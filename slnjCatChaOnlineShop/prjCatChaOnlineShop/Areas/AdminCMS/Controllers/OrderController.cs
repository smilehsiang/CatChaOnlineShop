using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class OrderController : Controller
    {
        
        public IActionResult Order()
        {
            return View();
        }
    }
}
