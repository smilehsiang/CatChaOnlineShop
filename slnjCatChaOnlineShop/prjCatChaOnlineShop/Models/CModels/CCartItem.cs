namespace prjCatChaOnlineShop.Models.CModels
{
    public class CCartItem
    {
        public ShopProductTotal product { get; set; }
        
        public decimal? pSalePrice{get; set;}
       
        public string? pImgPath { get; set; }
    }
}
