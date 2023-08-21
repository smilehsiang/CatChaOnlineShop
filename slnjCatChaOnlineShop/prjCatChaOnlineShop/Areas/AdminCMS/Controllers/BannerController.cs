using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using prjCatChaOnlineShop.Models;
using prjCatChaOnlineShop.Services.Function;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using Azure.Storage.Blobs;

namespace prjCatChaOnlineShop.Controllers.CMS
{
    [Area("AdminCMS")]
    public class BannerController : Controller
    {
        private readonly ImageService _imageService;
        private readonly cachaContext _cachaContext;


        public BannerController(ImageService imageService, cachaContext cachaContext)
        {
            _imageService = imageService;
            _cachaContext = cachaContext;
        }
        public IActionResult Banner()
        {
            return View();
        }
    }
}
