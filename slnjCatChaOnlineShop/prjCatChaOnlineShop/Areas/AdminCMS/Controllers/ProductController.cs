using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class ProductController : Controller
    {
        [Area("AdminCMS")]
        public IActionResult Product()
        {
            return View();
        }
    }
}
