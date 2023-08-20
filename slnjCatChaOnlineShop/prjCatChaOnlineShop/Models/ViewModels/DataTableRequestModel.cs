namespace prjCatChaOnlineShop.Models.ViewModels
{
    public class DataTableRequestModel
    {
        public int Draw { get; set; }
        public int Start { get; set; }
        public int Length { get; set; }
        public string ExtraParam { get; set; }
        public string SearchString { get; set; }
        
    }
}
