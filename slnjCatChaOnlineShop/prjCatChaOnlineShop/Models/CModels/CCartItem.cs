namespace prjCatChaOnlineShop.Models.CModels
{
    public class CCartItem
    {
        public int cId { get; set; }
        public string? cName { get; set; }
        public int? c剩餘庫存;
        internal decimal? cPrice;

        public string? c子選項 { get; set; }
        public string? cImgPath { get; set; }
        public int? c數量 { get; set; }
        public decimal?c小計 
        { 
            get 
            {
                return cPrice*c數量;
            }
            
        }
    }
}
