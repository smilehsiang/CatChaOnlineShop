using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using prjCatChaOnlineShop.Areas.AdminCMS.Models;
using prjCatChaOnlineShop.Models;
using prjCatChaOnlineShop.Models.CModels;
using prjCatChaOnlineShop.Services.Function;
using System.Drawing;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class ProductController : Controller
    {
        private readonly ImageService _imageService;
        private readonly cachaContext _cachaContext;


        public ProductController(ImageService imageService, cachaContext cachaContext)
        {
            _imageService = imageService;
            _cachaContext = cachaContext;
        }

        //編輯資料、上傳圖片
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> editorUploadImage([FromForm] CShopProductTotalWrap cShopproduct )
        {
            var image = cShopproduct.Image;

            if( image == null )
            {
                return BadRequest("找不到圖片");
            }
            string imageURL;
            //try
            //{
            //    imageURL = await _imageService.UploadImageAsync(image);
            //}
            //catch
            //{
            //    return BadRequest("上傳圖片錯誤");
            //}

            var newShopProduct = new ShopProductTotal
            {
                ProductId = cShopproduct.ProductId,
                ProductName = cShopproduct.ProductName,
                ProductDescription = cShopproduct.ProductDescription,
                ProductCategory = cShopproduct.ProductCategory,
                Image = cShopproduct.Image,
                ReleaseDate = cShopproduct.ReleaseDate,
                Size = cShopproduct.Size,
                Weight = cShopproduct.Weight,
                Supplier = cShopproduct.Supplier,
                Discontinued = cShopproduct.Discontinued
            };

            try
            {
                _cachaContext.ShopProductTotal.Add(newShopProduct);
                await _cachaContext.SaveChangesAsync();
            }
            catch
            {
                return BadRequest("商品資料儲存錯誤");
            }

            return Json(new { success = true, message = "編輯內容儲存成功" });
        }


        //上傳圖片
        [HttpPost]
        public async Task<IActionResult> UploadImage(IFormFile image)
        {
            if (image == null || image.Length == 0)
            {
                return BadRequest("未選擇圖片");
            }

            string imageUrl;
            try
            {
                imageUrl = await _imageService.UploadImageAsync(image);
            }
            catch
            {
                return BadRequest("圖片上船失敗");
            }
            return Ok(new { imageUrl = $"{imageUrl}" });
        }


        //db載入資料表
        public IActionResult LoadDatatable()
        {
            var data = _cachaContext.ShopProductTotal.Select(x => new
            {
                ProductId = x.ProductId,
                ProductName = x.ProductName,
                ProductDescription = x.ProductDescription.Length > 20 ? x.ProductDescription.Substring(0, 20) : x.ProductDescription,
                ProductPrice = x.ProductPrice,
                RemainingQuantity = x.RemainingQuantity,
                ProductCategory = x.ProductCategory,
                ShopProductImageTable = x.ShopProductImageTable,
                ReleaseDate = x.ReleaseDate,
                Size = x.Size,
                Weight = x.Weight,
                Supplier = x.Supplier,
                Discontinued = x.Discontinued
            });
            return Json(new { data });
        }

        public IActionResult Delete(int? id)
        {
            if (id != null)
            {
                ShopProductTotal cShopproduct = _cachaContext.ShopProductTotal.FirstOrDefault(p => p.ProductId == id);
                if (cShopproduct != null)
                {
                    _cachaContext.ShopProductTotal.Remove(cShopproduct);
                    _cachaContext.SaveChanges();
                }
            }
            return RedirectToAction("Product", "Product", new { area = "AdminCMS" });
        }

        [HttpGet]
        public IActionResult EditorShopProducts(int? id)
        {
            if (id == null)
            {
                return Json(new { success = false, message = "ID不存在" });
            }
            ShopProductTotal cShopproduct = _cachaContext.ShopProductTotal.FirstOrDefault(p => p.ProductId == id);
            if (cShopproduct == null)
            {
                return Json(new { success = false, message = "商品不存在" });
            }
            return Json(new { success = true, data = cShopproduct });
        }

        public IActionResult Product()
        {
            return View();
        }
    }
}
