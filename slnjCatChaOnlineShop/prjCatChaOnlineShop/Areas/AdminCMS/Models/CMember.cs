namespace prjCatChaOnlineShop.Areas.AdminCMS.Models
{
    public partial class CMember
    {
        public int MemberId { get; set; }

        public string MemberAccount { get; set; }

        public string CharacterName { get; set; }

        public int? LevelId { get; set; }

        public string Name { get; set; }

        public string Gender { get; set; }

        public DateTime? Birthday { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public string Address { get; set; }

        public int? CatCoinQuantity { get; set; }

        public int? LoyaltyPoints { get; set; }

        public int? RunGameHighestScore { get; set; }

        public bool? MemberStatus { get; set; }
    }
}
