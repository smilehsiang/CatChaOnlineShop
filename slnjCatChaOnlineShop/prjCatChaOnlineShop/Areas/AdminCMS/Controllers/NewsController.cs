using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class NewsController : Controller
    {
        
        public IActionResult News()
        {
            return View();
        }
    }
}
