using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class CMSHomeController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}
