using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.Home
{
    public class ShopNewsController : Controller
    {
        public IActionResult NewsContent()
        { 
            return View();
        }
        public IActionResult News()
        {
            return View();
        }
    }
}
