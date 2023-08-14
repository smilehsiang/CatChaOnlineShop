using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class ProductReviewController : Controller
    {
        [Area("AdminCMS")]
        public IActionResult ProductReview()
        {
            return View();
        }
    }
}
