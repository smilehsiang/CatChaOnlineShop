using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.AllunModels;

namespace prjCatChaOnlineShop.Controllers
{
    public class GameRankController : Controller
    {
        public IActionResult Index(string sortOrder)
        {
            Allun貓抓抓Context db = new Allun貓抓抓Context();
            var datas = from p in db.ShopMemberInfo
                        select p;
            datas = datas.OrderByDescending(p => p.RunGameHighestScore);
            ViewBag.RunGameHighestScore = "RunGameHighestScore";
            return View(datas);
        }
    }
}
