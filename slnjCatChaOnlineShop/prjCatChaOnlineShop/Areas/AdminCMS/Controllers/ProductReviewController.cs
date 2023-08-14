using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class ProductReviewController : Controller
    {
       
        public IActionResult ProductReview()
        {
            return View();
        }
    }
}
