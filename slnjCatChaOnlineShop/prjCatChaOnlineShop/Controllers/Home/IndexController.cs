using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.Home
{
    public class IndexController : Controller
    {
        public IActionResult ShopDetail() 
        { 
            return View();
        }
        public IActionResult Shop() 
        {
            return View();
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
