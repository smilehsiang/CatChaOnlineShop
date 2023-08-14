using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class OrderController : Controller
    {
        [Area("AdminCMS")]
        public IActionResult Order()
        {
            return View();
        }
    }
}
