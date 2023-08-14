using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class NewsController : Controller
    {
        [Area("AdminCMS")]
        public IActionResult News()
        {
            return View();
        }
    }
}
