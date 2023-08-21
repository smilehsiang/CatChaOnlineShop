namespace prjCatChaOnlineShop.Models.CModels
{
    public class CShopOrderTotalTableWrap
    {
        private ShopOrderTotalTable _orderTotal = null;

        public ShopOrderTotalTable orderTotal
        {
            get { return _orderTotal; }
            set { _orderTotal = value; }
        }

        public CShopOrderTotalTableWrap()
        {
            _orderTotal = new ShopOrderTotalTable();
        }

        public int? MemberId
        {
            get { return _orderTotal.MemberId; }
            set { _orderTotal.MemberId = value; }
        }

        public int OrderId
        {
            get { return _orderTotal.OrderId; }
            set { _orderTotal.OrderId = value; }
        }

        public DateTime? OrderCreationDate
        {
            get { return _orderTotal.OrderCreationDate; }
            set { _orderTotal.OrderCreationDate = value; }
        }

        public DateTime? LastUpdateTime
        {
            get { return _orderTotal.LastUpdateTime; }
            set { _orderTotal.LastUpdateTime = value; }
        }

        public int? AddressId
        {
            get { return _orderTotal.AddressId; }
            set { _orderTotal.AddressId = value; }
        }

        public string RecipientAddress
        {
            get { return _orderTotal.RecipientAddress; }
            set { _orderTotal.RecipientAddress = value; }
        }

        public string RecipientName
        {
            get { return _orderTotal.RecipientName; }
            set { _orderTotal.RecipientName = value; }
        }

        public string RecipientPhone
        {
            get { return _orderTotal.RecipientPhone; }
            set { _orderTotal.RecipientPhone = value; }
        }

        public int? OrderStatusId
        {
            get { return _orderTotal.OrderStatusId; }
            set { _orderTotal.OrderStatusId = value; }
        }

        public int? PaymentMethodId
        {
            get { return _orderTotal.PaymentMethodId; }
            set { _orderTotal.PaymentMethodId = value; }
        }

        public int? CouponId
        {
            get { return _orderTotal.CouponId; }
            set { _orderTotal.CouponId = value; }
        }

        public int? ShippingMethodId
        {
            get { return _orderTotal.ShippingMethodId; }
            set { _orderTotal.ShippingMethodId = value; }
        }

        public virtual ShopCommonAddressData Address
        {
            get { return _orderTotal.Address; }
            set { _orderTotal.Address = value; }
        }

        public virtual ShopMemberInfo Member
        {
            get { return _orderTotal.Member; }
            set { _orderTotal.Member = value; }
        }

        public virtual ShopOrderStatusData OrderStatus
        {
            get { return _orderTotal.OrderStatus; }
            set { _orderTotal.OrderStatus = value; }
        }

        public virtual ShopPaymentMethodData PaymentMethod
        {
            get { return _orderTotal.PaymentMethod; }
            set { _orderTotal.PaymentMethod = value; }
        }

        public virtual ShopShippingMethod ShippingMethod
        {
            get { return _orderTotal.ShippingMethod; }
            set { _orderTotal.ShippingMethod = value; }
        }

        public virtual ICollection<ShopOrderDetailTable> ShopOrderDetailTable { get; set; } = new List<ShopOrderDetailTable>();
    }
}
