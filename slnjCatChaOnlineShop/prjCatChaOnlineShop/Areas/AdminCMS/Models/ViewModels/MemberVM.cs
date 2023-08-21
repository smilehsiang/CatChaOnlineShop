using prjCatChaOnlineShop.Models;

namespace prjCatChaOnlineShop.Areas.AdminCMS.Models.ViewModels
{
    public class MemberVM
    {
        public ShopMemberInfo shopMemberInfo { get; set; }

        public ShopCommonAddressData shopCommonAddressData { get; set; }

        public ShopMemberCouponData shopMemberCouponData { get; set; }
    }
}
