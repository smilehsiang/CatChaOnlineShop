using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class BannerController : Controller
    {
        
        public IActionResult Banner()
        {
            return View();
        }
    }
}
