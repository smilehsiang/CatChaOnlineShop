namespace prjCatChaOnlineShop.Models.CModels
{
    public class CShopReplyDataWrap
    {
        private ShopReplyData _replyData = null;

        public ShopReplyData replyData
        {
            get { return _replyData; }
            set { _replyData = value; }
        }

        public CShopReplyDataWrap()
        {
            _replyData = new ShopReplyData();
        }

        public int ReplyId
        {
            get { return _replyData.ReplyId; }
            set { _replyData.ReplyId = value; }
        }

        public int ComplaintCaseId
        {
            get { return _replyData.ComplaintCaseId; }
            set { _replyData.ComplaintCaseId = value; }
        }

        public int ReceiverIdOfficial
        {
            get { return _replyData.ReceiverIdOfficial; }
            set { _replyData.ReceiverIdOfficial = value; }
        }

        public string MessageRecipientContent
        {
            get { return _replyData.MessageRecipientContent; }
            set { _replyData.MessageRecipientContent = value; }
        }

        public DateTime SentTime
        {
            get { return _replyData.SentTime; }
            set { _replyData.SentTime = value; }
        }

        public virtual ShopMemberComplaintCase ComplaintCase
        {
            get { return _replyData.ComplaintCase; }
            set { _replyData.ComplaintCase = value; }
        }

        public virtual ShopGameAdminData ReceiverIdOfficialNavigation
        {
            get { return _replyData.ReceiverIdOfficialNavigation; }
            set { _replyData.ReceiverIdOfficialNavigation = value; }
        }
    }
}
