namespace prjCatChaOnlineShop.Models.CModels
{
    public class CShopMemberInfoWrap
    {
        private ShopMemberInfo _info = null;

        public ShopMemberInfo information
        {
            get { return _info; }
            set { _info = value; }
        }

        public CShopMemberInfoWrap() 
        {
            _info = new ShopMemberInfo();
        }

        public int MemberId 
        {
            get { return _info.MemberId; }
            set { _info.MemberId = value; }
        }

        public string MemberAccount
        {
            get { return _info.MemberAccount; }
            set { _info.MemberAccount = value; }
        }


        public string CharacterName
        {
            get { return _info.CharacterName; }
            set { _info.CharacterName = value; }
        }

        public int? LevelId
        {
            get { return _info.LevelId; }
            set { _info.LevelId = value; }
        }

        public string Password
        {
            get { return _info.Password; }
            set { _info.Password = value; }
        }

        public string Name
        {
            get { return _info.Name; }
            set { _info.Name = value; }
        }

        public string Gender
        {
            get { return _info.Gender; }
            set { _info.Gender = value; }
        }

        public DateTime? Birthday
        {
            get { return _info.Birthday; }
            set { _info.Birthday = value; }
        }

        public string Email
        {
            get { return _info.Email; }
            set { _info.Email = value; }
        }

        public string PhoneNumber
        {
            get { return _info.PhoneNumber; }
            set { _info.PhoneNumber = value; }
        }

        public string Address
        {
            get { return _info.Address; }
            set { _info.Address = value; }
        }

        public int? CatCoinQuantity
        {
            get { return _info.CatCoinQuantity; }
            set { _info.CatCoinQuantity = value; }
        }

        public int? LoyaltyPoints
        {
            get { return _info.LoyaltyPoints; }
            set { _info.LoyaltyPoints = value; }
        }

        public DateTime? RegistrationTime
        {
            get { return _info.RegistrationTime; }
            set { _info.RegistrationTime = value; }
        }

        public DateTime? LastLoginTime
        {
            get { return _info.LastLoginTime; }
            set { _info.LastLoginTime = value; }
        }

        public int? FavoriteId
        {
            get { return _info.FavoriteId; }
            set { _info.FavoriteId = value; }
        }

        public int? CheckinDayCount
        {
            get { return _info.CheckinDayCount; }
            set { _info.CheckinDayCount = value; }
        }

        public int? MyCatNameListId
        {
            get { return _info.MyCatNameListId; }
            set { _info.MyCatNameListId = value; }
        }

        public int? RunGameHighestScore
        {
            get { return _info.RunGameHighestScore; }
            set { _info.RunGameHighestScore = value; }
        }



        public virtual ICollection<Game1on1MessageData> Game1on1MessageDataReceiver { get; set; } = new List<Game1on1MessageData>();

        public virtual ICollection<Game1on1MessageData> Game1on1MessageDataSender { get; set; } = new List<Game1on1MessageData>();

        public virtual ICollection<GameCoinExchangeRecord> GameCoinExchangeRecord { get; set; } = new List<GameCoinExchangeRecord>();

        public virtual ICollection<GameFriendData> GameFriendDataFriend { get; set; } = new List<GameFriendData>();

        public virtual ICollection<GameFriendData> GameFriendDataMember { get; set; } = new List<GameFriendData>();

        public virtual ICollection<GameGlobalChatData> GameGlobalChatData { get; set; } = new List<GameGlobalChatData>();

        public virtual ICollection<GameMemberTask> GameMemberTask { get; set; } = new List<GameMemberTask>();

        public virtual GameRankData Level
        {
            get { return _info.Level; }
            set { _info.Level = value; }
        }



        public virtual ShopMyCatNameList MyCatNameList
        {
            get { return _info.MyCatNameList; }
            set { _info.MyCatNameList = value; }
        }

        public virtual ICollection<ShopCatStatus> ShopCatStatus { get; set; } = new List<ShopCatStatus>();

        public virtual ICollection<ShopCommonAddressData> ShopCommonAddressData { get; set; } = new List<ShopCommonAddressData>();

        public virtual ICollection<ShopCommonShop> ShopCommonShop { get; set; } = new List<ShopCommonShop>();

        public virtual ICollection<ShopFavoriteDataTable> ShopFavoriteDataTable { get; set; } = new List<ShopFavoriteDataTable>();

        public virtual ICollection<ShopMemberComplaintCase> ShopMemberComplaintCase { get; set; } = new List<ShopMemberComplaintCase>();

        public virtual ICollection<ShopMemberCouponData> ShopMemberCouponData { get; set; } = new List<ShopMemberCouponData>();

        public virtual ICollection<ShopMyCatNameList> ShopMyCatNameList { get; set; } = new List<ShopMyCatNameList>();

        public virtual ICollection<ShopOrderTotalTable> ShopOrderTotalTable { get; set; } = new List<ShopOrderTotalTable>();

        public virtual ICollection<ShopProductReviewTable> ShopProductReviewTable { get; set; } = new List<ShopProductReviewTable>();

        //用於大頭照
        public IFormFile? ImageHeader { get; set; }

    }
}
