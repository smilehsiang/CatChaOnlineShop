using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class NewsController : Controller
    {
        public IActionResult news()
        {
            return View();
        }
    }
}
