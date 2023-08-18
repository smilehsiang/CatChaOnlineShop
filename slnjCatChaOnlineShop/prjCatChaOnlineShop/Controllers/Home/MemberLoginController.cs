using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.Models.CDictionary;
using prjCatChaOnlineShop.Models.ViewModels;
using prjCatChaOnlineShop.Models;
using System.Text.Json;

namespace prjCatChaOnlineShop.Controllers.Home
{
    public class MemberLoginController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Login(CLoginModel vm)
        {
            
            ShopMemberInfo user = (new cachaContext()).ShopMemberInfo.FirstOrDefault(
                t => t.Email.Equals(vm.txtEmail) && t.Password.Equals(vm.txtPassword));
            if (user != null && user.Password.Equals(vm.txtPassword))
            {
                string Json = JsonSerializer.Serialize(user);
                HttpContext.Session.SetString(CDictionary.SK_LOINGED_USER, Json);
                return RedirectToAction("Index", "Index");
            }
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
