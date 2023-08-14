using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class ReturnController : Controller
    {
        [Area("AdminCMS")]
        public IActionResult Return()
        {
            return View();
        }
    }
}
