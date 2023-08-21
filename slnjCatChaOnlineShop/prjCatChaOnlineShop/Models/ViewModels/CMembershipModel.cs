using prjCatChaOnlineShop.Models.CModels;

namespace prjCatChaOnlineShop.Models.ViewModels
{
    public class CMembershipModel
    {
        public List<CShopMemberInfoWrap> MemberInfo { get; set; }
        public List<CShopOrderTotalTableWrap> OrderTotalTable { get; set; }
        public List<CShopOrderDetailTableWrap> OrderDetailTable { get; set; }
        public List<CShopReplyDataWrap> ReplyData  { get; set; }
    }
}
