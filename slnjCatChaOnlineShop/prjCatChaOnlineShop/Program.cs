using Autofac.Core;
using Microsoft.EntityFrameworkCore;
using prjCatChaOnlineShop.Models;
using prjCatChaOnlineShop.Services.Function;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
// 添加 Session 服務
builder.Services.AddSession(options=> {
    // 設定 Session 的過期時間（以分為單位）
    options.IdleTimeout = TimeSpan.FromMinutes(3); // 測試:這裡設定為 3 分鐘
    });
builder.Services.AddScoped<ProductService>();
builder.Services.AddHttpContextAccessor();
//==============解決 json too big 問題（Mandy需要的請勿刪~桑Q）
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    options.JsonSerializerOptions.WriteIndented = true;
});
//==============解決 json too big 問題（Mandy需要的請勿刪~桑Q）

builder.Services.AddScoped<ImageService>();


//註冊session要加這個
builder.Services.AddSession();

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
app.UseSession();
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
