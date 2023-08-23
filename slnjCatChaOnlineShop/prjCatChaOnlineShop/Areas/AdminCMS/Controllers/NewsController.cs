using CKSource.CKFinder.Connector.Config.Nodes;
using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.Models;
using prjCatChaOnlineShop.Models.ViewModels;
using prjCatChaOnlineShop.Models.CModels;
using prjCatChaOnlineShop.Services.Function;
using System.Security.Policy;
using PagedList;
using DataTables.AspNet.Core;
using Microsoft.EntityFrameworkCore;
using DataTables.AspNet.AspNetCore;
using System.Data;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class NewsController : Controller
    {
        private readonly ImageService _imageService;
        private readonly cachaContext _cachaContext;

        public NewsController(ImageService imageService, cachaContext cachaContext)
        {
            _imageService = imageService;
            _cachaContext = cachaContext;
        }

        public IActionResult News()
        {

            var NewsViewModel = new CNewsModel
            {
                NewsType = _cachaContext.AnnouncementTypeData.ToList(),
                NewsContent = _cachaContext.GameShopAnnouncement.ToList()
            };
            return View(NewsViewModel);
        }
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> editorUploadImage([FromForm] CAnnounceWrap cAnnounce)
        {
            var image = cAnnounce.ImageHeader;

            if (image == null || image.Length == 0)
            {
                return BadRequest("No image provided.");
            }

            string imageUrl;
            try
            {
                imageUrl = await _imageService.UploadImageAsync(image);
            }
            catch
            {

                return BadRequest("Error uploading the image.");
            }
            var newAnnounce = new GameShopAnnouncement
            {
                AnnouncementImageHeader = imageUrl,
                AnnouncementContent = cAnnounce.AnnouncementContent,
                AnnouncementTitle = cAnnounce.AnnouncementTitle,
                AnnouncementTypeId = cAnnounce.AnnouncementTypeId,
                PublishTime = cAnnounce.PublishTime,
                PublishEndTime = cAnnounce.PublishEndTime,
                PinToTop = cAnnounce.PinToTop,
            };

            try
            {
                _cachaContext.GameShopAnnouncement.Add(newAnnounce);
                await _cachaContext.SaveChangesAsync();
            }
            catch
            {
                return BadRequest("Error saving the announcement.");
            }

            return Json(new { success = true, message = "Content saved!" });

        }

        [HttpPost]
        public async Task<IActionResult> UploadImage(IFormFile image)
        {
            if (image == null || image.Length == 0)
            {
                return BadRequest("No image provided.");
            }

            string imageUrl;
            try
            {
                imageUrl = await _imageService.UploadImageAsync(image);
            }
            catch
            {

                return BadRequest("Error uploading the image.");
            }

            return Ok(new { imageUrl = $"{imageUrl}" });
        }


        public IActionResult tableData()
        {
            var rawData = _cachaContext.GameShopAnnouncement.ToList();

            var data = rawData.Select(x =>
            {
                DateTime parsedDateTime;
                string formattedDateTime = DateTime.TryParse(x.PublishEndTime, out parsedDateTime)
                                            ? parsedDateTime.ToString("yyyy-MM-dd HH:mm")
                                            : "未設定時間";
                string publishDateTime = DateTime.TryParse(x.PublishTime, out parsedDateTime)
                            ? parsedDateTime.ToString("yyyy-MM-dd HH:mm")
                            : "未設定時間";
                return new
                {
                    AnnouncementId = x.AnnouncementId,
                    AnnouncementTitle = x.AnnouncementTitle,
                    AnnouncementContent = x.AnnouncementContent,
                    AnnouncementImageHeader = x.AnnouncementImageHeader,
                    AdminId = x.AdminId,
                    EditTime = x.EditTime,
                    PublishTime = publishDateTime,
                    SyncWithGameAndShopDisplay = x.SyncWithGameAndShopDisplay,
                    HideInGameDisplay = x.HideInGameDisplay,
                    ConvertToMarquee = x.ConvertToMarquee,
                    PinToTop = x.PinToTop == null ? "未設定" :
                                x.PinToTop == true ? "是" : "否",
                    AnnouncementTypeId = x.AnnouncementTypeId == null ? "未設定" :
                         x.AnnouncementTypeId.Value == 1 ? "商城公告" :
                         x.AnnouncementTypeId.Value == 2 ? "遊戲公告" :
                         x.AnnouncementTypeId.ToString(),
                    AnnouncementType = x.AnnouncementType,
                    AnnouncementImageContent = x.AnnouncementImageContent,
                    PublishEndTime = formattedDateTime,
                    displayOrNot = x.DisplayOrNot == null ? "未設定" :
                                   x.DisplayOrNot == true ? "是" : "否",
                };
        }).ToList();
            return Json(new { data });
        }

        public IActionResult Delete(int? id)
        {
            if (id != null)
            {
                GameShopAnnouncement cAnnounce = _cachaContext.GameShopAnnouncement.FirstOrDefault(p => p.AnnouncementId == id);
                if (cAnnounce != null)
                {
                    _cachaContext.GameShopAnnouncement.Remove(cAnnounce);
                    _cachaContext.SaveChanges();
                }
            }
            return RedirectToAction("news" , "News", new {area="AdminCMS" });
        }
        [HttpGet]
        public IActionResult EditorNews(int? id)
        {
            if (id == null)
            {
                return Json(new { success = false, message = "Invalid ID" });
            }
            GameShopAnnouncement cAnnounce = _cachaContext.GameShopAnnouncement.FirstOrDefault(p => p.AnnouncementId == id);
            if (cAnnounce == null)
            {
                return Json(new { success = false, message = "Item not found" });
            }
            return Json(new { success = true, data = cAnnounce });
        }
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> EditNews([FromForm] CAnnounceWrap cAnnounce)
        {
            var image = cAnnounce.ImageHeader;
            GameShopAnnouncement editorNews = _cachaContext.GameShopAnnouncement.FirstOrDefault(p => p.AnnouncementId == cAnnounce.AnnouncementId);

            string? imageUrl = null;
            if (image != null || image?.Length > 0)
            {
                try
                {
                    imageUrl = await _imageService.UploadImageAsync(image);
                }
                catch
                {

                    return BadRequest("Error uploading the image.");
                }
            }
            if (editorNews != null)
            {
                editorNews.AnnouncementTitle = cAnnounce.AnnouncementTitle;
                editorNews.AnnouncementContent = cAnnounce.AnnouncementContent;
                if(imageUrl!= null)
                {
                    editorNews.AnnouncementImageHeader = imageUrl;
                }
                editorNews.DisplayOrNot = cAnnounce.DisplayOrNot;
                editorNews.PinToTop = cAnnounce.PinToTop;
                editorNews.PublishTime = cAnnounce.PublishTime;
                editorNews.PublishEndTime = cAnnounce.PublishEndTime;
                _cachaContext.SaveChanges();
            }
            return RedirectToAction("news", "News", new { area = "AdminCMS" });
        }

    }
}
