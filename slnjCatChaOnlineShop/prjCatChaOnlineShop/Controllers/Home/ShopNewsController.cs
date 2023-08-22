using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.Models;
using prjCatChaOnlineShop.Models.CModels;
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

        public IActionResult NewsContent(int? id)
        {
            //GameShopAnnouncement news = _context.GameShopAnnouncement.FirstOrDefault(x=>x.AnnouncementId == id);
            //if (news != null)
            //{
            //    CAnnounceWrap cAnnounce = new CAnnounceWrap();
            //    cAnnounce.
            //}
            return View();
        }
        public IActionResult News()
        {
            DateTime currentTime = DateTime.Now;
            var selectAllNews = _context.GameShopAnnouncement.ToList();
            var newsGroupedByType = selectAllNews
                                            .Where(p =>
                                            {
                                                DateTime parsePublishTime, parsePublishEndTime;
                                                if (!DateTime.TryParse(p.PublishTime, out parsePublishTime) ||
                                                   !DateTime.TryParse(p.PublishEndTime, out parsePublishEndTime))
                                                {
                                                    return false;
                                                }
                                                return parsePublishTime <= currentTime && parsePublishEndTime >= currentTime;
                                            })
                                            .GroupBy(p => p.AnnouncementTypeId)
                                            .Where(g => g.Key.HasValue)
                                            .ToDictionary(g => g.Key.Value, g => g.ToList());


            var NewsModel = new CNewsModel
            {
                NewsType = _context.AnnouncementTypeData.ToList(),
                NewsContentGroupedByType = newsGroupedByType 
            };

            return View(NewsModel);
        }
    }
}
