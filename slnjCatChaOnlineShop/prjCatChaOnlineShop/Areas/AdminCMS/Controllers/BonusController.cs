using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class BonusController : Controller
    {
        
        public IActionResult Bonus()
        {
            return View();
        }
    }
}
