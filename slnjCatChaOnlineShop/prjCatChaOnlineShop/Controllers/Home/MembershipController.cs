using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using prjCatChaOnlineShop.Models;

namespace prjCatChaOnlineShop.Controllers.Home
{

    //[Route("api/[controller]")]
    //[ApiController]

    public class MembershipController : Controller
    {
        private readonly cachaContext _context;

        //建構子先載入資料
        public MembershipController(cachaContext context)
        {
            _context = context;
        }
        public IActionResult Membership()
        {
            return View();
        }



        //取得訂單資訊
        public IActionResult GetOrders()
        {
            /*
            var datas = from p in _context.ShopOrderTotalTable
                        where p.MemberId == 1
                        select new
                        {
                            p.OrderId, //訂單編號
                            p.OrderCreationDate,  //訂單成立日期
                            p.Address, //收款地址
                            p.RecipientName, //收款人
                            p.RecipientPhone,  //收款電話
                            p.ShippingMethod, //付款方式
                        };*/
            //var datas = _context.ShopOrderTotalTable.Where(p => p.MemberId == 4).ToList();

            /*
            var query = from order in _context.ShopOrderTotalTable
                        //join payment in _context.ShopPaymentMethodData on order.PaymentMethodId equals payment.PaymentMethodId
                        where order.MemberId == 4
                        select new
                        {
                            order.OrderId,
                            order.OrderCreationDate,
                            order.RecipientName,
                            order.RecipientAddress,
                            order.RecipientPhone,
                            order.PaymentMethod.PaymentMethodName,
                            order
                        };*/

            var query = from order in _context.ShopOrderTotalTable
                        where order.MemberId == 4
                        select new
                        {
                            order.OrderId,
                            order.OrderCreationDate,
                            order.RecipientName,
                            order.RecipientAddress,
                            order.RecipientPhone,
                            order.PaymentMethod.PaymentMethodName,
                            order.OrderStatus.StatusName,
                            order.ShopOrderDetailTable
                        };

            var datas = query.ToList();
            


            if (datas != null)
            {
                return new JsonResult(datas);
            }
            else
            {
                return NotFound();
            }
        }

        //取得帳戶基本資料
        public IActionResult GetMemberInfo()
        {
            var datas = _context.ShopMemberInfo.FirstOrDefault(p => p.MemberId == 4);

            if (datas != null)
            {
                return new JsonResult(datas);
            }
            else
            {
                return NotFound();
            }
        }


        //取得退貨紀錄:待處理
        public IActionResult GetReturnRecord()
        {
            var datas = from p in _context.ShopOrderTotalTable
                        where p.MemberId == 1
                        select new
                        {
                            p.OrderId, //訂單編號
                            p.OrderCreationDate,  //訂單成立日期
                            p.Address, //收款地址
                            p.RecipientName, //收款人
                            p.RecipientPhone,  //收款電話
                            p.ShippingMethod, //付款方式
                        };

            if (datas.Any())
            {
                return new JsonResult(datas);
            }
            else
            {
                return NotFound();
            }
        }


    }
}
