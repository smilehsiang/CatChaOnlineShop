using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class CMSHomeController : Controller
    {
        public IActionResult SalonOrder()
        {
            return View();
        }
    }
}
