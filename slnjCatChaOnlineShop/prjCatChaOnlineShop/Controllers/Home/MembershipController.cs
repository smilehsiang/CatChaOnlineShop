using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.Home
{
    public class MembershipController : Controller
    {
        public IActionResult Membership()
        {
            return View();
        }
    }
}
