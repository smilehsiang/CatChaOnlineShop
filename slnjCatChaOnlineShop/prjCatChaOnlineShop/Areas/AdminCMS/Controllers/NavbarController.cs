using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class NavbarController : Controller
    {
        
        public IActionResult Navbar()
        {
            return View();
        }
    }
}
