using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class SalonController : Controller
    {
       
        public IActionResult Salon()
        {
            return View();
        }
    }
}
