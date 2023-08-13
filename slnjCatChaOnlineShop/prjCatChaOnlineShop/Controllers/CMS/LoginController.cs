using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View("/CMSHome/Login.cshtml");
        }
    }
}
