using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class GroomingController : Controller
    {
        [Area("AdminCMS")]
        public IActionResult Grooming()
        {
            return View();
        }
    }
}
