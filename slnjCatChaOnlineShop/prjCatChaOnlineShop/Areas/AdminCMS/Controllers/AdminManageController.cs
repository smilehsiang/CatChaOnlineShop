using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Areas.AdminCMS.Controllers

{
    public class AdminManageController : Controller
    {
        [Area("AdminCMS")]
        public IActionResult AdminManage()
        {
            return View();
        }
    }
}
