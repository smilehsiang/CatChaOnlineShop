using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.Models;
using System.Diagnostics;

namespace prjCatChaOnlineShop.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        public IActionResult ConfrimOrder()
        {
         return View();
        }
        public IActionResult Checkout() 
        { 
         return View();
        }
        public IActionResult Cart() 
        {
        return View();
        }
        public IActionResult About()
        { 
        return View();
        }
        public IActionResult Booking()
        { 
        return View();
        }
        public IActionResult Membership() 
        { 
        return View();
        }
        public IActionResult NewsContent()
        { 
        return View();
        }
        public IActionResult News()
        {
            return View();
        }
        public IActionResult ShopDetail() 
        {
        return View();
        }
        public IActionResult Shop() 
        {
            return View();
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}