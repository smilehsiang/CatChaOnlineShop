using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.AllunModels;

namespace prjCatChaOnlineShop.Controllers
{
    public class SummonController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult 抽卡()
        {
            
            Allun貓抓抓Context db = new Allun貓抓抓Context();
            var datas = from p in db.GameProductTotal
                        select p;
            return View(datas);
        }

        public IActionResult 抽卡v2()
        {
            Allun貓抓抓Context db = new Allun貓抓抓Context();
            //Allun貓抓抓Context db = new Allun貓抓抓Context();
            var datas = from p in db.GameProductTotal
                        where p.LotteryProbability != null && p.ProductCategoryId !=2
                        select p;
            return View(datas);
        }
    }
}
