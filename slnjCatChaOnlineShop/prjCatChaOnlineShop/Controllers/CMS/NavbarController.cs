using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class NavbarController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
