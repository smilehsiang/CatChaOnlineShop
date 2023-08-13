using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class ProductController : Controller
    {
        public IActionResult Product()
        {
            return View();
        }
    }
}
