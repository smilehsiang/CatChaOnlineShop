using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using prjCatChaOnlineShop.YaolinModels;

namespace prjCatChaOnlineShop.Controllers.Home
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameapitestController : ControllerBase
    {
        private readonly Yaolin貓抓抓Context _context;
        public GameapitestController(Yaolin貓抓抓Context context)
        {
            _context = context;
        }
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
