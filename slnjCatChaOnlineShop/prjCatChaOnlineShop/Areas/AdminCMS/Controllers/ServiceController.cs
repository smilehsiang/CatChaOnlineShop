using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class ServiceController : Controller
    {
       
        public IActionResult Service()
        {
            return View();
        }
    }
}
