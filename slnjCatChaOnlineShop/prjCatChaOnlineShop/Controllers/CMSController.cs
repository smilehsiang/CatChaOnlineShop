using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers
{
    public class CMSController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
