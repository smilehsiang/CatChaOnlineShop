using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class SalonController : Controller
    {
        [Area("AdminCMS")]
        public IActionResult Salon()
        {
            return View();
        }
    }
}
