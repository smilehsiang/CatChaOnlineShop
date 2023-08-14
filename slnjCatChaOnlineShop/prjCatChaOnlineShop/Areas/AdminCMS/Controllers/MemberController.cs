using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class MemberController : Controller
    {
        [Area("AdminCMS")]
        public IActionResult Member()
        {
            return View("~/Views/CMSBackend/Member/Member.cshtml");
        }
    }
}
