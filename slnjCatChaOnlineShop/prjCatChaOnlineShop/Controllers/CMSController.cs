using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers
{
    public class CMSController : Controller
    {
        public IActionResult AdminManage()
        {
            return View();
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
