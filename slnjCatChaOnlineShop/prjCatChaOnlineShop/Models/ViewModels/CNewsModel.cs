using prjCatChaOnlineShop.Models;

namespace prjCatChaOnlineShop.Models.ViewModels
{
    public class CNewsModel
    {
        public List<GameShopAnnouncement> NewsContent { get; set; }
        public List<AnnouncementTypeData> NewsType { get; set; }
    }
}
