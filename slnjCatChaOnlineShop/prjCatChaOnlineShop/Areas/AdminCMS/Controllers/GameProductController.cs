using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class GameProductController : Controller
    {
        [Area("AdminCMS")]
        public IActionResult GameProduct()
        {
            return View();
        }
    }
}
