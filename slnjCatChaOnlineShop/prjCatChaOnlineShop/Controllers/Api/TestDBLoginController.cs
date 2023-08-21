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
                        GameItemInfo = group.Select(g => new { g.ProductId, g.QuantityOfInGameItems,g.ItemName})
                    })
                    .ToList();
                return new JsonResult(mergedData);
            }
            else
            {
                return NotFound();
            }
        }


    }
}
