namespace prjCatChaOnlineShop.Models.CModels
{
    public class CProductItem
    {
        public ShopProductTotal product{get;set;}
        //public int pId { get; set; }
        //public string? pName { get; set; }
        //public decimal? pSalePrice
        //{
        //    get
        //    {
        //        if (pDiscount < 0)//折數
        //            return this.pPrice * this.pDiscount;
        //        else//折扣金額
        //            return this.pPrice - this.pDiscount;
        //    }
        //}
        public decimal? pSalePrice
        {
            get
            {
                if (product.Discount < 0)//折數
                    return this.product.ProductPrice * this.product.Discount;
                else//折扣金額
                    return this.product.ProductPrice - this.product.Discount;
            }
        }
        //public decimal? pDiscount { get; set; }

        //public decimal? pPrice{ get; set; }

        //public string? pCategory { get; set; }
        //public DateTime? p上架時間 { get; set; }

        //public int? p剩餘庫存;

        //public string? p子項目 { get; set; }
        public string? pImgPath { get; set; }
    }
}
