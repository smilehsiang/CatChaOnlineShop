using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class GroomingController : Controller
    {
        
        public IActionResult Grooming()
        {
            return View();
        }
    }
}
