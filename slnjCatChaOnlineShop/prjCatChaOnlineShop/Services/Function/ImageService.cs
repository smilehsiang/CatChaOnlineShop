using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using Azure.Storage.Blobs;
using prjCatChaOnlineShop.Models.CModels;

namespace prjCatChaOnlineShop.Services.Function
{
    public class ImageService
    {
        private readonly string _connectionString;
        private readonly string _containerName;

        public ImageService(IConfiguration configuration)
        {
            _connectionString = configuration["AzureBlobStorage:ConnectionString"];
            _containerName = configuration["AzureBlobStorage:ContainerName"];
        }

        public async Task<string> UploadImageAsync(IFormFile image)
        {
            var client = new BlobServiceClient(_connectionString);
            var containerClient = client.GetBlobContainerClient(_containerName);
            var blobClient = containerClient.GetBlobClient(image.FileName);

            await using var stream = image.OpenReadStream();
            await blobClient.UploadAsync(stream, true);

            return blobClient.Uri.ToString();
        }
    }
}
