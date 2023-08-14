using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class BonusController : Controller
    {
        [Area("AdminCMS")]
        public IActionResult Bonus()
        {
            return View();
        }
    }
}
