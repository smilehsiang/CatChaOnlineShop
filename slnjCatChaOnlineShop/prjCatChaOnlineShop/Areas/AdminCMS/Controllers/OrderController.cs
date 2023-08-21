using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.Models;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class OrderController : Controller
    {
        private readonly cachaContext _context;
        public OrderController(cachaContext context)
        {
            _context = context;
        }
        public IActionResult Order()
        {
            return View();
        }
        public IActionResult ShowOrderTotal()
        {
            var data = _context.ShopOrderTotalTable;

            return Json(new { data });
        }
    }
}
