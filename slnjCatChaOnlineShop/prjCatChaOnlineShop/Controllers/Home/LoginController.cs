using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.Home
{
    public class LoginController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}
