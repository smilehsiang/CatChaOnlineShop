using Microsoft.AspNetCore.Mvc;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class DataAnalysisController : Controller
    {
        
        public IActionResult DataAnalysis()
        {
            return View();
        }
    }
}
