using prjCatChaOnlineShop.Models;
using prjCatChaOnlineShop.Models.CModels;

namespace prjCatChaOnlineShop.Models.ViewModels
{
    public class CNewsModel
    {
        public List<GameShopAnnouncement> NewsContent { get; set; }
        public List<AnnouncementTypeData> NewsType { get; set; }
        public CAnnounceWrap cAnnounceWrap { get; set; }
        public Dictionary<int, List<GameShopAnnouncement>>? NewsContentGroupedByType { get;set; }
    }
}
