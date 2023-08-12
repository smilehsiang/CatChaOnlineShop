using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class ReturnController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
