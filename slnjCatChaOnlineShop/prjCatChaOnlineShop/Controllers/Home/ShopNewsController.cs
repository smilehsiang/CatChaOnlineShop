using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.Models;
using prjCatChaOnlineShop.Models.ViewModels;

namespace prjCatChaOnlineShop.Controllers.Home
{
    public class ShopNewsController : Controller
    {
        private readonly cachaContext _context ;
        
        public ShopNewsController(cachaContext context)
        {
            _context = context;
        }

        public IActionResult NewsContent()
        { 
            return View();
        }
        public IActionResult News()
        {
            DateTime currentTime = DateTime.Now;

            var NewsModel = new CNewsModel
            {
                NewsType = _context.AnnouncementTypeData.ToList(),
                NewsContent = _context.GameShopAnnouncement
                                    .Where(p => p.PublishTime <= currentTime && p.PublishEndTime >= currentTime)
                                    .ToList()
            };

            return View(NewsModel);
        }
    }
}
