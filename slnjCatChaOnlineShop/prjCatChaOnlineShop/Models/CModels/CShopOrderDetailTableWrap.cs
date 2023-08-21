namespace prjCatChaOnlineShop.Models.CModels
{
    public class CShopOrderDetailTableWrap
    {
        private ShopOrderDetailTable _ordedDetail = null;

        public ShopOrderDetailTable orderDetail
        {
            get { return _ordedDetail; }
            set { _ordedDetail = value; }
        }

        public CShopOrderDetailTableWrap()
        {
            _ordedDetail = new ShopOrderDetailTable();
        }

        public int? OrderId
        {
            get { return _ordedDetail.OrderId; }
            set { _ordedDetail.OrderId = value; }
        }

        public int? ProductId
        {
            get { return _ordedDetail.ProductId; }
            set { _ordedDetail.ProductId = value; }
        }

        public int? ProductQuantity
        {
            get { return _ordedDetail.ProductQuantity; }
            set { _ordedDetail.ProductQuantity = value; }
        }

        public int OrderDetailId
        {
            get { return _ordedDetail.OrderDetailId; }
            set { _ordedDetail.OrderDetailId = value; }
        }

        public virtual ShopOrderTotalTable Order
        {
            get { return _ordedDetail.Order; }
            set { _ordedDetail.Order = value; }
        }

        public virtual ShopProductTotal Product
        {
            get { return _ordedDetail.Product; }
            set { _ordedDetail.Product = value; }
        }
    }
}
