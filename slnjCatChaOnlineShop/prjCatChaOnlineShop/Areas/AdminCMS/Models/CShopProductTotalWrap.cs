using prjCatChaOnlineShop.Models;
using System.ComponentModel;

namespace prjCatChaOnlineShop.Areas.AdminCMS.Models
{
    public class CShopProductTotalWrap
    {
        private ShopProductTotal _sprod = null;
        public ShopProductTotal shopproduct { get { return _sprod; } set { _sprod = value; } }
        public CShopProductTotalWrap()
        {
            _sprod = new ShopProductTotal();
        }

        [DisplayName("名稱")]
        public string ProductName { get { return _sprod.ProductName; } set { _sprod.ProductName = value; }}
        [DisplayName("商品ID")]
        public int ProductId { get { return _sprod.ProductId; } set { _sprod.ProductId = value; } }
        [DisplayName("類別ID")]
        public int? ProductCategoryId { get { return _sprod.ProductCategoryId; } set { _sprod.ProductCategoryId = value; } }
        [DisplayName("描述")]
        public string ProductDescription { get { return _sprod.ProductDescription; } set { _sprod.ProductDescription = value; } }
        [DisplayName("價格")]
        public decimal? ProductPrice { get { return _sprod.ProductPrice; } set { _sprod.ProductPrice = value; } }
        [DisplayName("尺寸")]
        public string Size { get { return _sprod.Size; } set { _sprod.Size = value; } }
        [DisplayName("重量")]
        public string Weight { get { return _sprod.Weight; } set { _sprod.Weight = value; } }
        [DisplayName("上架日期")]
        public DateTime? ReleaseDate { get { return _sprod.ReleaseDate; } set { _sprod.ReleaseDate = value; } }
        [DisplayName("是否停售")]
        public bool? Discontinued { get { return _sprod.Discontinued; } set { _sprod.Discontinued = value; } }
        public IFormFile? Image { get; set; }
        [DisplayName("剩餘數量")]
        public int? RemainingQuantity { get { return _sprod.RemainingQuantity; } set { _sprod.RemainingQuantity = value; } }
        [DisplayName("供應商ID")]
        public int? SupplierId { get { return _sprod.SupplierId; } set { _sprod.SupplierId = value; } }
        [DisplayName("下架日期")]
        public DateTime? OffDay { get { return _sprod.OffDay; } set { _sprod.OffDay = value; } }


        public string Attributes { get { return _sprod.Attributes; } set { _sprod.Attributes = value; } }
        [DisplayName("折扣")]
        public decimal? Discount { get { return _sprod.Discount; } set { _sprod.Discount = value; } }

        [DisplayName("類別")]
        public virtual ShopProductCategory ProductCategory { get { return _sprod.ProductCategory; } set { _sprod.ProductCategory = value; } }

        public virtual ICollection<ShopFavoriteDataTable> ShopFavoriteDataTable { get; set; } = new List<ShopFavoriteDataTable>();

        public virtual ICollection<ShopOrderDetailTable> ShopOrderDetailTable { get; set; } = new List<ShopOrderDetailTable>();
        [DisplayName("圖片")]
        public virtual ICollection<ShopProductImageTable> ShopProductImageTable { get; set; } = new List<ShopProductImageTable>();

        public virtual ICollection<ShopProductReviewTable> ShopProductReviewTable { get; set; } = new List<ShopProductReviewTable>();

        public virtual ICollection<ShopRoom> ShopRoom { get; set; } = new List<ShopRoom>();
        [DisplayName("供應商")]
        public virtual ShopProductSupplier Supplier { get { return _sprod.Supplier; } set { _sprod.Supplier = value; } }
    }
}
