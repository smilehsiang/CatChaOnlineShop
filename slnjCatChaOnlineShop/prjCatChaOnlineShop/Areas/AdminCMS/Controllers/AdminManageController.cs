using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.Models;
using System.Security.Policy;

namespace prjCatChaOnlineShop.Areas.AdminCMS.Controllers

{
    [Area("AdminCMS")]
    public class AdminManageController : Controller
    {
        private readonly cachaContext _context;
        public AdminManageController(cachaContext context)
        {
            _context = context;
        }
        public IActionResult AdminManage()
        {
            return View();
        }

        public IActionResult ShowAdminManage() {
            var data = _context.ShopGameAdminData;
            return Json(new { data });
        }
        [HttpPost]
        public IActionResult AddAdminManage(ShopGameAdminData newAdmin) {
            try
            {
                if (newAdmin != null) // 檢查 newAdmin 是否為空
                {
                    // 將 newAdmin 存入 _context
                    _context.ShopGameAdminData.Add(newAdmin);
                    _context.SaveChanges();

                    return Json(new { success = true, message = "管理員新增成功！" });
                }
                else
                {
                    return Json(new { success = false, message = "新增的管理員資訊為空。" });
                }
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = "管理員新增失敗：" + ex.Message });
            }
        }
        //=============新增管理員檢查帳號是否重複
        public IActionResult CheckDuplicateAccount(string account)
        {
            bool result = _context.ShopGameAdminData != null && _context.ShopGameAdminData.Where(c => c.AdminAccount == account).Count() >= 1;

            return Json(new { IsDuplicate = result });
        }
    }
}
