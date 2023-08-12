using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.Home
{
    public class SalonBookingController : Controller
    {
        public IActionResult Booking()
        {
            return View();
        }
    }
}
