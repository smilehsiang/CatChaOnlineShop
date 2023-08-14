using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class NavbarController : Controller
    {
        [Area("AdminCMS")]
        public IActionResult Navbar()
        {
            return View();
        }
    }
}
