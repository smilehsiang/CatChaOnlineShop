using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.Areas.AdminCMS.Models;
using prjCatChaOnlineShop.Areas.AdminCMS.Models.ViewModels;
using prjCatChaOnlineShop.Models;
using prjCatChaOnlineShop.Models.CDictionary;
using System.Text.Json;

namespace prjCatChaOnlineShop.Areas.AdminCMS.Controllers
{
    [Area("AdminCMS")]
    public class CMSHomeController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(CAdminLoginVM vm)
        {
            ShopGameAdminData user = (new cachaContext()).ShopGameAdminData.FirstOrDefault(
                t => t.AdminAccount.Equals(vm.AdminAccount) && t.AdminPassword.Equals(vm.AdminPassword));
            if (user != null && user.AdminPassword.Equals(vm.AdminPassword))
            {
                string Json = JsonSerializer.Serialize(user);
                HttpContext.Session.SetString(CAdminLogin.SK_LOGINED_USER, Json);
                return RedirectToAction("Login");
            }
            return View();
        }
        // 处理登录表单提交
        //[HttpPost]
        //public ActionResult Login(string username, string password)
        //{
        //    // 在这里进行管理员身份验证逻辑
        //    if (IsValidAdmin(username, password))
        //    {
        //        Session["IsAdminLoggedIn"] = true;
        //        return RedirectToAction("Index", "Home"); // 登录成功后跳转到主页
        //    }
        //    else
        //    {
        //        ViewBag.ErrorMessage = "登录失败，请检查用户名和密码。";
        //        return View();
        //    }
        //}

        //// 示例：管理员身份验证逻辑
        //private bool IsValidAdmin(string username, string password)
        //{
        //    // 在实际中，您应该从数据库或其他存储中验证管理员信息
        //    return (username == "admin" && password == "password");
        //}

        //// 受保护的页面
        //public ActionResult ProtectedPage()
        //{
        //    // 检查管理员是否已登录，如果未登录，则跳转到登录页面
        //    if (Session["IsAdminLoggedIn"] == null || !(bool)Session["IsAdminLoggedIn"])
        //    {
        //        return RedirectToAction("Login");
        //    }

        //    return View();
        //}
    }
}
