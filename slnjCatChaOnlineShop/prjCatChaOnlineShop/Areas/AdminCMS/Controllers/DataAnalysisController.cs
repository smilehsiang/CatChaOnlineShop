using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    public class DataAnalysisController : Controller
    {
        [Area("AdminCMS")]
        public IActionResult DataAnalysis()
        {
            return View();
        }
    }
}
