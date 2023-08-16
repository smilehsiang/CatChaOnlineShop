using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.IvanModels;

namespace prjCatChaOnlineShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameApiController : ControllerBase
    {
        private readonly Ivan貓抓抓Context _context;
        public GameApiController(Ivan貓抓抓Context context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult 轉蛋數據()
        {
            var datas = from p in _context.GameProductTotal
                        where p.LotteryProbability != null && p.ProductCategoryId != 2
                        select new
                        {
                            p.ProductName,
                            p.ProductId,
                            p.ProductImage,
                            p.ProductCategoryId,
                            p.LotteryProbability
                        };
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
