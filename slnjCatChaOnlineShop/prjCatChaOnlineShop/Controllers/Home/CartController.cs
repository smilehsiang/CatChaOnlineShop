using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.Models;
using prjCatChaOnlineShop.Models.CDictionary;
using prjCatChaOnlineShop.Models.CModels;
using prjCatChaOnlineShop.Services.Function;
using System.Text.Json;

namespace prjCatChaOnlineShop.Controllers.Home
{
    public class CartController : Controller
    {
        private readonly cachaContext _context;
        private readonly IWebHostEnvironment _host;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ProductService _productService;
        
        public CartController(cachaContext context, IWebHostEnvironment host, IHttpContextAccessor httpContextAccessor, ProductService productService)
        {
            _context = context;
            _host = host;
            _httpContextAccessor = httpContextAccessor;
            _productService = productService;
            
        }
        public IActionResult ConfrimOrder()
        { 
            return View();
        }
        public IActionResult Checkout() 
        {
            return View();
        }
        public IActionResult Cart()
        {
            
            string json = HttpContext.Session.GetString(CDictionary.SK_PURCHASED_PRODUCTS_LIST);
            List<CCartItem> cart = JsonSerializer.Deserialize<List<CCartItem>>(json);

            return View(cart);
        }
    }
}
