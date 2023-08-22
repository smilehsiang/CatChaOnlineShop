using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using prjCatChaOnlineShop.Models;

namespace prjCatChaOnlineShop.Controllers.Api
{
    [Route("api/Api/[controller]")]
    [ApiController]
    public class TestDBLoginController : ControllerBase
    {
        private readonly cachaContext _context;
        public TestDBLoginController(cachaContext context)
        {
            _context = context;
        }
        //http://localhost:5090/Api/Api/TestDBLogin


        [HttpGet]
        public IActionResult 玩家資訊數據()
        {
            var datas = (from p in _context.ShopMemberInfo
                         join i in _context.GameItemPurchaseRecord on p.MemberId equals i.MemberId
                         where p.MemberId == 1033
                         select new
                         {
                             p.MemberId,
                             p.CharacterName,
                             p.CatCoinQuantity,
                             p.LoyaltyPoints,
                             p.RunGameHighestScore,
                             i.ProductId,
                             i.QuantityOfInGameItems,
                             i.ItemName
                         })
                         .Distinct()
                         .ToList(); // 轉換為 List

            // 在這裡處理結果，將集合中的元素合併

            if (datas.Any())
            {
                // 在這裡處理結果，將集合中的元素合併
                var mergedData = datas
                    .GroupBy(d => new { d.MemberId, d.CharacterName, d.CatCoinQuantity, d.LoyaltyPoints, d.RunGameHighestScore })
                    .Select(group => new
                    {
                        group.Key.MemberId,
                        group.Key.CharacterName,
                        group.Key.CatCoinQuantity,
                        group.Key.LoyaltyPoints,
                        group.Key.RunGameHighestScore,
                        GameItemInfo = group.Select(g => new { g.ProductId, g.QuantityOfInGameItems, g.ItemName })
                    })
                    .ToList();
                return new JsonResult(mergedData);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult 傳回玩家資訊數據([FromBody] GameReturnGachaDataModel rgm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("資料驗證失敗");
            }
            try
            {
                // 創建一個資料庫模型對象，將DTO數據映射到模型
                // 檢查資料庫中是否已存在具有相同 MemberId 和 ProductId 的記錄
                var existingRecord = _context.GameItemPurchaseRecord
                    .FirstOrDefault(record => record.MemberId == rgm.MemberId && record.ProductId == rgm.ProductId);

                if (existingRecord != null)
                {
                    // 如果存在相同記錄，則執行更新操作
                    existingRecord.QuantityOfInGameItems+=1; // 更新其他屬性
                                                                    // 更新其他需要更新的屬性

                    _context.SaveChanges(); // 儲存更改
                }
                else
                {
                    // 如果不存在相同記錄，則執行新增操作
                    var dbItemModel = new GameItemPurchaseRecord
                    {
                        MemberId = rgm.MemberId,
                        ProductId = rgm.ProductId,
                        // 設定其他屬性
                    };
                    var dbUserInformation = new ShopMemberInfo
                    {
                        CatCoinQuantity = rgm.CatCoinQuantity,
                        LoyaltyPoints = rgm.LoyaltyPoints,
                        // 設定其他屬性
                    };

                    _context.GameItemPurchaseRecord.Add(dbItemModel);
                    _context.ShopMemberInfo.Add(dbUserInformation);

                    _context.SaveChanges(); // 儲存新增的記錄
                }


                return Ok(new { message = "數據已成功保存" });
            }
            catch (Exception ex)
            {
                // 處理異常情況
                return StatusCode(600, "哈哈是我這邊錯了保存數據時發生錯誤：" + ex.Message);
            }
        }
    }
}
