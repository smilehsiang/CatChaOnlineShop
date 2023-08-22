using Microsoft.EntityFrameworkCore;
using prjCatChaOnlineShop.Models;
using prjCatChaOnlineShop.Models.ViewModels;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
// 添加 Session 服務
builder.Services.AddSession(options=> {
    // 設定 Session 的過期時間（以日為單位）
    options.IdleTimeout = TimeSpan.FromDays(365); // 這裡設定為 365 天
    });
builder.Services.AddScoped<ProductService>();

//讓網頁可以解析DB資料庫

builder.Services.AddDbContext<cachaContext>(
 options => options.UseSqlServer(builder.Configuration.GetConnectionString("CachaConnection")));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseSession();// 啟用 Session
app.UseRouting();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
    name: "areas",
    pattern: "{area:exists}/{controller=CMSHome}/{action=Login}/{id?}");

    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Index}/{action=Index}/{id?}");

});

app.Run();
