using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class MemberController : Controller
    {
        public IActionResult Member()
        {
            return View();
        }
    }
}
