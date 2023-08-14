using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.Home
{
    public class CartController : Controller
    {
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
            return View();
        }
    }
}
