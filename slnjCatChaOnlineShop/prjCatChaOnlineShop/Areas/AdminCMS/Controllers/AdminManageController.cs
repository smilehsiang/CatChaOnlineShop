using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.Models;
using System.Security.Policy;

namespace prjCatChaOnlineShop.Areas.AdminCMS.Controllers

{
    [Area("AdminCMS")]
    public class AdminManageController : Controller
    {
        private readonly cachaContext _context; //新的注入方法
        public AdminManageController(cachaContext context)
        {
            _context = context;
        }
        public IActionResult AdminManage()
        {
            var list = _context.ShopMemberInfo;
            return Json(list);
        }
    }
}
