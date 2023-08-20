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
            var data = _cachaContext.GameShopAnnouncement.ToList();

            return Json(new { data });
        }


    }
}
