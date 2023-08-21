using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using prjCatChaOnlineShop.Areas.AdminCMS.Models.ViewModels;
//using prjCatChaOnlineShop.Areas.AdminCMS.Service;
using prjCatChaOnlineShop.Models;
using System.Text.Json.Serialization;
using System.Text.Json;
using prjCatChaOnlineShop.Areas.AdminCMS.Models;
//using prjCatChaOnlineShop.Areas.AdminCMS.Util;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class MemberController : Controller
    {
        private readonly cachaContext _context;
        public MemberController(cachaContext context)
        {
            _context = context;
        }


        //private readonly CMemberService _memberService;
        //public MemberController(CMemberService memberService)
        //{
        //    _memberService = memberService;
        //}


        public IActionResult Member()
        {
            return View();
        }

        public IActionResult ShowMemeberInfo()
        {
            //ShowMemeberInfo
            //var data = _memberService.ShowMemeberInfo();

            var data = _context.ShopMemberInfo;

            return Json(new { data });
        }

        public IActionResult GetMemberDetails(int id)
        {
            var member = _context.ShopMemberInfo
                      .Include(m => m.ShopCommonAddressData)
                      .Include(m => m.ShopMemberCouponData)
                      .FirstOrDefault(m => m.MemberId == id);

            if (member != null)
            {
                foreach (var couponData in member.ShopMemberCouponData)
                {
                    // 根據 couponData.CouponId 查詢其他相關數據並附加到 couponData
                    var CouponTotal = _context.ShopCouponTotal.FirstOrDefault(o => o.CouponId == couponData.CouponId);
                }

                return Json(new { data = member });
            }
            else
            {
                // 沒有找到匹配的成員
                //  do something..........
                return NotFound();
            }
        }
        //=============檢查姓名是否重複
        public IActionResult CheckDuplicateName(string account)
        {
            bool result = _context.ShopMemberInfo != null && _context.ShopMemberInfo.Where(c => c.MemberAccount == account).Count() >= 1;


            return Json(new { IsDuplicate = result });
        }
        [HttpPost]
        public IActionResult AddMember(ShopMemberInfo newMember)
        {
            // 後端待補-檢查信箱&帳號格式，及檢查帳號是否已存在；前端驗證信箱&帳號格式，生日不可為未來
            try
            {
                if (newMember != null) // 檢查 newMember 是否為空
                {
                    // 將 newMember 存入 DbContext
                    _context.ShopMemberInfo.Add(newMember);
                    _context.SaveChanges();

                    return Json(new { success = true, message = "會員新增成功！" });
                }
                else
                {
                    return Json(new { success = false, message = "新增的會員資訊為空。" });
                }
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = "會員新增失敗：" + ex.Message });
            }
        }

        public IActionResult EditMemeber(int id)
        {
            var member = _context.ShopMemberInfo
                      .Include(m => m.ShopCommonAddressData)
                      .FirstOrDefault(m => m.MemberId == id);

            if (member != null)
            {
                return Json(new { data = member });
            }
            else
            {
                // 沒有找到匹配的成員
                //  do something..........
                return NotFound();
            }
        }
        [HttpPost]
        public async Task<IActionResult> UpdateMember([FromBody] CMember memberData)
        {
            //Utility utility = new Utility();
            //if (IsValidFormat(memberData))
            //{
            var member = _context.ShopMemberInfo.FirstOrDefault(m => m.MemberId == memberData.MemberId);

            if (member != null)
            {
                member.MemberId = memberData.MemberId;
                member.MemberAccount = memberData.MemberAccount;
                member.CharacterName = memberData.CharacterName;
                member.LevelId = memberData.LevelId;
                member.Name = memberData.Name;
                member.Gender = memberData.Gender;
                member.Birthday = memberData.Birthday;
                member.PhoneNumber = memberData.PhoneNumber;
                member.CatCoinQuantity = memberData.CatCoinQuantity;
                member.LoyaltyPoints = memberData.LoyaltyPoints;
                member.RunGameHighestScore = memberData.RunGameHighestScore;
                // 更新其他字段...
                try
                {
                    // 將newMember存入DbContext
                    await _context.SaveChangesAsync();

                    return Json(new { success = true, message = "編輯資料成功！" });
                }
                catch (Exception ex)
                {
                    return Json(new { success = false, message = "編輯資料失敗：" + ex.Message });
                }
            }
            //}
            return NotFound();
        }

        //private bool IsValidFormat(CMember memberData)
        //{
        //    if (!string.IsNullOrWhiteSpace(memberData.Name) && !string.IsNullOrWhiteSpace(memberData.Email))
        //    {
        //        if (IsValidEmail(memberData.Email))
        //        {
        //            return true;
        //        }
        //    }

        //    return false;
        //}

        //private bool IsValidEmail(string email)
        //{
        //    return true;
        //}


        public IActionResult DeleteMemeber()
        {
            return View();
        }

    }
}
