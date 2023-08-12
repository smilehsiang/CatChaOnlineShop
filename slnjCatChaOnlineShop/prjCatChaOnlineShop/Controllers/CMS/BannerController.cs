using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class BannerController : Controller
    {
        public IActionResult Banner()
        {
            return View();
        }
    }
}
