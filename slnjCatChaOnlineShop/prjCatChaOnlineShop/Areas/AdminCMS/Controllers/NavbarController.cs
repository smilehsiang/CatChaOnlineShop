using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class NavbarController : Controller
    {
        public IActionResult Navbar()
        {
            return View();
        }
    }
}
