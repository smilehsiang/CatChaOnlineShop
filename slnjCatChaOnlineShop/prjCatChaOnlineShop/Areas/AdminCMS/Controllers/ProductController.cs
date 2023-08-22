using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
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
            try
            {
                imageURL = await _imageService.UploadImageAsync(image);
            }
            catch
            {
                return BadRequest("上傳圖片錯誤");
            }

            var newShopProduct = new ShopProductTotal
            {
                ProductId = cShopproduct.ProductId,
                ProductName = cShopproduct.ProductName,
                ProductDescription = cShopproduct.ProductDescription,
                ProductCategory = cShopproduct.ProductCategory,
                ReleaseDate = cShopproduct.ReleaseDate,
                Size = cShopproduct.Size,
                Weight = cShopproduct.Weight,
                Supplier = cShopproduct.Supplier,
                Discontinued = cShopproduct.Discontinued
            };

            var newImage = new ShopProductImageTable
            {
                ProductPhoto = imageURL
            };
            newShopProduct.ShopProductImageTable.Add(newImage);

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
                return BadRequest("圖片上傳失敗");
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
                ProductPrice = x.ProductPrice == null ? "沒有資料" :
                                            x.ProductPrice.ToString(),
                RemainingQuantity = x.RemainingQuantity == null ? "沒有資料" :
                                                         x.RemainingQuantity.ToString(),
                ProductCategory = x.ProductCategory == null ? "沒有資料" :
                                                     x.ProductCategory.CategoryName.ToString(),
                ShopProductImageTable = x.ShopProductImageTable == null ? "沒有資料" :
                                                                    x.ShopProductImageTable.FirstOrDefault().ProductPhoto,
                ReleaseDate = x.ReleaseDate == null ? "沒有資料" :
                                            x.ReleaseDate.ToString(),
                Size = x.Size == null ? "沒有資料" :
                            x.Size.ToString(),
                Weight = x.Weight == null ? "沒有資料" :
                                   x.Weight.ToString(),
                Supplier = x.Supplier == null ? "沒有資料" :
                                     x.Supplier.CompanyName.ToString(),
                Discontinued = x.Discontinued == null ? "未設定" : (x.Discontinued == true ? "是" : "否")
            }).ToList();
            return Json(new { data });
        }

        //刪除
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


        //編輯
        [HttpGet]
        public IActionResult EditShopProducts(int? id)
        {
            Console.WriteLine($"Received id: {id}");
            if (id == null)
            {
                return Json(new { success = false, message = "Invalid ID" });
            }
            ShopProductTotal cShopProductTotal = _cachaContext.ShopProductTotal.FirstOrDefault(p => p.ProductId == id);
            if (cShopProductTotal == null)
            {
                return Json(new { success = false, message = "Item not found" });
            }
            return Json(new { success = true, data = cShopProductTotal });

            //var prod = _cachaContext.ShopProductTotal
            //          .Include(p => p.ProductCategory)
            //          .Include(p => p.ShopProductImageTable)
            //           .Include(p => p.Supplier)
            //          .FirstOrDefault(p => p.ProductId == id);

            //if (prod != null)
            //{
            //    return Json(new { data = prod });
            //}
            //else
            //{
            //    return NotFound();
            //}
        }

        //編輯
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> EditShopProducts([FromForm] CShopProductTotalWrap cShopproduct)
        {
            var image = cShopproduct.Image;
            var editProduct = _cachaContext.ShopProductTotal.FirstOrDefault(p => p.ProductId == cShopproduct.ProductId);

            if (image == null || image.Length == 0)
            {
                return BadRequest("未選擇圖片");
            }
            string imageURL;
            try
            {
                imageURL = await _imageService.UploadImageAsync(image);
            }
            catch
            {

                return BadRequest("圖片上傳錯誤.");
            }
            if (editProduct != null)
            {
                editProduct.ProductId = cShopproduct.ProductId;
                editProduct.ProductName = cShopproduct.ProductName;
                editProduct.ProductDescription = cShopproduct.ProductDescription;
                editProduct.ProductPrice = cShopproduct.ProductPrice;
                editProduct.RemainingQuantity = cShopproduct.RemainingQuantity;
                editProduct.ProductCategory= cShopproduct.ProductCategory;
                editProduct.ShopProductImageTable= cShopproduct.ShopProductImageTable;
                editProduct.ReleaseDate = cShopproduct.ReleaseDate;
                editProduct.Size= cShopproduct.Size;
                editProduct.Weight= cShopproduct.Weight;
                editProduct.Supplier= cShopproduct.Supplier;
                editProduct.Discontinued= cShopproduct.Discontinued;
                _cachaContext.SaveChanges();
            }
            return RedirectToAction("Product", "Product", new { area = "AdminCMS" });
        }


        //儲存
        [HttpPost]
        public IActionResult CreateProduct(ShopProductTotal newProduct)
        {
            try
            {
                if (newProduct != null) // 檢查 newMember 是否為空
                {
                    _cachaContext.ShopProductTotal.Add(newProduct);
                    _cachaContext.SaveChanges();

                    return Json(new { success = true, message = "會員商品成功！" });
                }
                else
                {
                    return Json(new { success = false, message = "新增的商品資訊為空。" });
                }
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = "商品新增失敗：" + ex.Message });
            }
        }


        public IActionResult Product()
        {
            return View();
        }
    }
}
