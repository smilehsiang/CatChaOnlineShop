using Microsoft.AspNetCore.Mvc;
using prjCatChaOnlineShop.Services.Function;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace prjCatChaOnlineShop.Controllers.Home
{
    public class ImageTestController : Controller
    {

        private readonly ImageService _imageService;

        public ImageTestController(ImageService imageService)
        {
            _imageService = imageService;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> UploadImage(IFormFile image)
        {
            if (image == null || image.Length == 0)
            {
                return BadRequest("No image provided.");
            }

            var imageUrl = await _imageService.UploadImageAsync(image);
            return Ok(new { Url = imageUrl });
        }
    }
}
