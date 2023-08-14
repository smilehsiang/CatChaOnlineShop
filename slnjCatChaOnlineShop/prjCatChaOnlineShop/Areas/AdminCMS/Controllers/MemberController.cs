using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class MemberController : Controller
    {
        
        public IActionResult Member()
        {
            return View("~/Areas/AdminCMS/Views/CMSBackend/Member/Member.cshtml");
        }
    }
}
