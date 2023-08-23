using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using prjCatChaOnlineShop.Models;

namespace prjCatChaOnlineShop.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class RankController : ControllerBase
    {
        private readonly cachaContext _context;
        public RankController(cachaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Rank()
        {
            var datas = (from p in _context.ShopMemberInfo
                         select new
                         {
                             p.CharacterName,
                             p.RunGameHighestScore,
                         })
                         .Distinct()
                         .OrderByDescending(p => p.RunGameHighestScore)
                         .ToList(); // 轉換為 List

            // 在這裡處理結果，將集合中的元素合併

            if (datas.Any())
            {
                return new JsonResult(datas);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
