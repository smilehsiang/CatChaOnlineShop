using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class ServiceController : Controller
    {
        [Area("AdminCMS")]
        public IActionResult Service()
        {
            return View();
        }
    }
}
