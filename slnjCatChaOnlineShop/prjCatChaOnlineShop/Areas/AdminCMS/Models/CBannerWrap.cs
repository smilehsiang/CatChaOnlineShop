using prjCatChaOnlineShop.Models;
using System.ComponentModel;

namespace prjCatChaOnlineShop.Areas.AdminCMS.Models
{
    public class CBannerWrap
    {
        private GameShopBanner _banr = null;
        public GameShopBanner banner { get { return _banr; } set { _banr = value; } }
        public CBannerWrap() 
        {
            _banr = new GameShopBanner();
        }

        [DisplayName("ID")]
        public int BannerId { get { return _banr.BannerId; } set { _banr.BannerId = value; } }

        [DisplayName("名稱")]
        public string Banner { get { return _banr.Banner; } set { _banr.Banner = value; } }

        [DisplayName("發佈日期")]
        public DateTime? PublishDate { get { return _banr.PublishDate; } set { _banr.PublishDate = value; } }

        [DisplayName("圖片")]
        public string Link { get { return _banr.Link; } set { _banr.Link = value; } }
    }
}
