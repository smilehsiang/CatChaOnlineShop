using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Areas.AdminCMS.Controllers
{
    [Area("AdminCMS")]
    public class CMSHomeController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}
