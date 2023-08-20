namespace prjCatChaOnlineShop.Models.CModels
{
    public class CAnnounceWrap
    {
        private GameShopAnnouncement _news = null;
        public GameShopAnnouncement News
        {
            get { return _news; }
            set { _news = value; }
        }
        public CAnnounceWrap()
        {
            _news = new GameShopAnnouncement();
        }

        public int AnnouncementId 
        {
            get { return _news.AnnouncementId;}
            set { _news.AnnouncementId = value;}
        }

        public string AnnouncementTitle 
        {
            get { return _news.AnnouncementTitle;}
            set { _news.AnnouncementTitle = value;}
        }

        public string AnnouncementContent 
        {
            get { return _news.AnnouncementContent;}
            set { _news.AnnouncementContent = value;}   
        }

        public string AnnouncementImageHeader 
        {
            get { return _news.AnnouncementImageHeader;}    
            set { _news.AnnouncementImageHeader = value;}   
        }

        public int? AdminId 
        {
            get { return _news.AdminId;}
            set { _news.AdminId = value;}   
        }

        public DateTime? EditTime 
        {
            get { return _news.EditTime;}
            set { _news.EditTime = value;}
        }

        public string? PublishTime 
        {
            get { return _news.PublishTime;}
            set { _news.PublishTime = value;}
        }

        public bool? DisplayOrNot 
        {
            get { return _news.DisplayOrNot;}
            set { _news.DisplayOrNot = value;}
        }

        public bool? SyncWithGameAndShopDisplay 
        {
            get {return _news.SyncWithGameAndShopDisplay;}
            set { _news.SyncWithGameAndShopDisplay = value;}
        }

        public bool? HideInGameDisplay 
        {
            get { return _news.HideInGameDisplay;}
            set { _news.HideInGameDisplay = value;}
        }

        public bool? ConvertToMarquee 
        {
            get { return _news.ConvertToMarquee;}
            set { _news.ConvertToMarquee = value;}
        }

        public bool? PinToTop 
        {
            get { return _news.PinToTop;}
            set { _news.PinToTop = value;}
        }

        public int? AnnouncementTypeId 
        {
            get { return _news.AnnouncementTypeId;}
            set { _news.AnnouncementTypeId = value;}
        }

        public string AnnouncementImageContent 
        {
            get { return _news.AnnouncementImageContent; }
            set { _news.AnnouncementImageContent = value;}
        }
        public virtual ShopGameAdminData Admin 
        {
            get { return _news.Admin; }
            set { _news.Admin = value;}
        }

        public virtual AnnouncementTypeData AnnouncementType 
        {
            get { return _news.AnnouncementType;}
            set { _news.AnnouncementType = value;}
        }

        public IFormFile? ImageHeader { get; set; }

        public string? PublishEndTime
        {
            get { return _news.PublishEndTime; }
            set { _news.PublishEndTime = value;}
        }
    }
}
