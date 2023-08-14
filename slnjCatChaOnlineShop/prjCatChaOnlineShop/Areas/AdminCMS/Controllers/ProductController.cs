using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class ProductController : Controller
    {
        
        public IActionResult Product()
        {
            return View();
        }
    }
}
