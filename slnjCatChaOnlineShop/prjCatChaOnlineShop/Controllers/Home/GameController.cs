using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers
{
    public class GameController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
