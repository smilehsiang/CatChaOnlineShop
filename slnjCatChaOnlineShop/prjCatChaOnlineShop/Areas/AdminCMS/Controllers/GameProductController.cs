using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class GameProductController : Controller
    {
        
        public IActionResult GameProduct()
        {
            return View();
        }
    }
}
