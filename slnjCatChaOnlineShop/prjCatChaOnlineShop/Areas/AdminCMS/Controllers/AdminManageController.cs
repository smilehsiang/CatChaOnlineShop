using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Areas.AdminCMS.Controllers

{
    [Area("AdminCMS")]
    public class AdminManageController : Controller
    {
        
        public IActionResult AdminManage()
        {
            return View();
        }
    }
}
