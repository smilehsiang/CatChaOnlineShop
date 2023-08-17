using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.Models;


namespace prjCatChaOnlineShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameApiController : ControllerBase
    {
        private readonly cachaContext _context;
        public GameApiController(cachaContext context)
        {
            _context = context;
        }
        [HttpGet]
        //http://localhost:5090/Api/gameapi
        public IActionResult 轉蛋數據()
        {
            var datas = from p in _context.GameProductTotal
                        where p.LotteryProbability != null && p.ProductCategoryId != 2
                        select new
                        {
                            p.ProductName,
                            p.ProductId,
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

        //public IActionResult 轉蛋數據2()
        //{
        //    var datas = _context.GameProductTotal.Select(c => c.LotteryProbability).Distinct();
        //    return new JsonResult(datas);
        //}
    }  
}
