using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class ReturnController : Controller
    {
        
        public IActionResult Return()
        {
            return View();
        }
    }
}
