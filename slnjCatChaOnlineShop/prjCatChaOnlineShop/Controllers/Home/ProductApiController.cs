using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using prjCatChaOnlineShop.Models;
using prjCatChaOnlineShop.Models.CDictionary;
using prjCatChaOnlineShop.Models.CModels;
using prjCatChaOnlineShop.Models.ViewModels;
using prjCatChaOnlineShop.Services.Function;
using System.Text.Json;

namespace prjCatChaOnlineShop.Controllers.Home
{
    public class ProductApiController : Controller
    {
        private readonly cachaContext _context;
        private readonly IWebHostEnvironment _host;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ProductService _productService;
        public ProductApiController(cachaContext context, IWebHostEnvironment host, IHttpContextAccessor httpContextAccessor, ProductService productService)
        {
            _context = context;
            _host = host;
            _httpContextAccessor = httpContextAccessor;
            _productService = productService;  
                
        }
        
        
        public IActionResult Index()
        {
            return View();
        }
        
        //以下為測試功能
        public IActionResult imgUpload()
        {
            return View();
        }
        [HttpPost]
        public ActionResult imgUpload(ShopProductImageTable img, IFormFile photo, testAddImageViewModel vm)
        {
            string path = _host.WebRootPath + $"/images/prod-{vm.txtPId}.jpg";
            photo.CopyTo(new FileStream(path, FileMode.Create));
            var data = from i in _context.ShopProductImageTable
                       select i.ProductId;
            foreach (var i in data)
            {
                if (i != vm.txtPId)
                {
                    img.ProductId = vm.txtPId;
                    img.ProductPhoto = photo.FileName;

                    _context.ShopProductImageTable.Add(img);
                    _context.SaveChanges();
                    return Content("資料庫已更新, 新增成功!!");
                }
            }

            return Content("新增成功!!");

        }

        public IActionResult Byte2Path()
        {

            return View();
        }

        [HttpPost]
        public IActionResult Byte2Path(testByte2PathViewModel vm)
        {
            var img = from i in _context.ShopProductImageTable
                      where i.ProductId == vm.txtPId
                      select i;


            int count = 0;
            foreach (var item in img)
            {
                count++;
                if (count == vm.txtNum)
                {
                    item.ProductPhoto = $"prod-{vm.txtPId}.jpg";
                }
                else
                    return Content("無改動!");

            }
            _context.SaveChanges();
            return Content("已更改!");

        }
        public IActionResult ShopItemPerPage(int itemPerPage)
        {
            var items = _productService.GetProductItems().DistinctBy(item => item.product.ProductName).Take(itemPerPage);//只出現商品名稱不同的品項
            return Json(items);
        }

        public IActionResult AddToCart(int pId)
        {
            var prodItem=_productService.GetProductById(pId);
            string json = "";
            List<CCartItem> cart ;
            if (HttpContext.Session.Keys.Contains(CDictionary.SK_PURCHASED_PRODUCTS_LIST))
            {
                json = HttpContext.Session.GetString(CDictionary.SK_PURCHASED_PRODUCTS_LIST);
                cart = JsonSerializer.Deserialize<List<CCartItem>>(json);
                if (cart.FirstOrDefault(item => item.cId == pId)!=null)
                {
                    cart = new List<CCartItem>();
                    CCartItem cartItem = new CCartItem();
                    cartItem.c數量++;
                    // 商品已在購物車中
                    return RedirectToAction("Shop");
                }
               

            }
            else
            {
                cart = new List<CCartItem>();
                CCartItem cartItem = new CCartItem();
                cartItem.cId = pId;
                cartItem.cName = prodItem.product.ProductName;
                
                if (prodItem.pSalePrice!=null) //特價時的金額
                    cartItem.cPrice = prodItem.pSalePrice;

                cartItem.cPrice= prodItem.product.ProductPrice; //無特價時金額
                cartItem.cImgPath= prodItem.pImgPath;
                cartItem.c子選項 = prodItem.product.Attributes;
                cartItem.c數量 = 1;//預設點第一次加入一個
                cartItem.c剩餘庫存 = prodItem.product.RemainingQuantity;
                cart.Add(cartItem);
                json = JsonSerializer.Serialize(cart);
                HttpContext.Session.SetString(CDictionary.SK_PURCHASED_PRODUCTS_LIST, json);
            }
                
            return RedirectToAction("Shop");
        }
    }
}
