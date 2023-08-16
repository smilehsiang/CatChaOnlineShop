using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.Home
{
    public class MemberLoginController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }

        public IActionResult ForgetPassword()
        {
            return View();
        }

        public IActionResult RegisterMember() 
        {
            return View();
        }
    }
}
