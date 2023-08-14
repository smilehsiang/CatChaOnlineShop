using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class BannerController : Controller
    {
        [Area("AdminCMS")]
        public IActionResult Banner()
        {
            return View();
        }
    }
}
