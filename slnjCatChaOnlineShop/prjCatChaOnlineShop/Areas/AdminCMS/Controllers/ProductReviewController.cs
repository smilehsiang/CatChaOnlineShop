using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.Models;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class ProductReviewController : Controller
    {
        private readonly cachaContext? _context;
       
        public ProductReviewController(cachaContext context) 
        {
            _context = context;
        }

        public IActionResult ProductReview()
        {
            return View();
        }
        public IActionResult tableData()
        {
            var rawData = _context.ShopProductReviewTable.ToList();
            var tableDatas = rawData.Select(x =>
            {
                DateTime parsedDateTime;
                string formattedDateTime = DateTime.TryParse(x.ReviewTime, out parsedDateTime) ? parsedDateTime.ToString("yyyy-MM-dd HH:mm") : "未設定時間";
                                                            
            })
        }
    }
}
