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

            var newsGroupedByType = _context.GameShopAnnouncement
                                            .Where(p => DateTime.Parse(p.PublishTime) <= currentTime && DateTime.Parse(p.PublishEndTime) >= currentTime)
                                            .GroupBy(p => p.AnnouncementTypeId)
                                            .ToDictionary(g => g.Key, g => g.ToList());

            var NewsModel = new CNewsModel
            {
                NewsType = _context.AnnouncementTypeData.ToList(),
                NewsContentGroupedByType = newsGroupedByType 
            };

            return View(NewsModel);
        }
    }
}
