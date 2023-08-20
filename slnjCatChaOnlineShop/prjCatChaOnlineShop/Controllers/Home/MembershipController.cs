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

        /*1.基本資料*/

        //取得帳戶基本資料
        public IActionResult GetMemberInfo()
        {
            try
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
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }

        //更新帳戶基本資料到資料庫
        public IActionResult UpdateMemberInfo(ShopMemberInfo member)
        {
            try
            {
                var memberToUpdate = _context.ShopMemberInfo.FirstOrDefault(m => m.MemberId == 1);

                memberToUpdate.Name = member.Name;
                /*
                memberToUpdate.Password = member.Password;
                memberToUpdate.Email = member.Email;
                memberToUpdate.PhoneNumber = member.PhoneNumber;
                memberToUpdate.Birthday = member.Birthday;
                */
                _context.SaveChanges();

                    return Content("修改成功");

            }
            catch (Exception ex)
            {
                return Content("修改失敗：" + ex.Message);
            }
        }

        /*2.消費紀錄*/

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

            try
            {
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
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }


        /*3.退換紀錄*/

        //取得退貨紀錄:待處理
        public IActionResult GetReturnRecord()
        {
            try
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
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }

        /*6.客服中心*/

        //取得申訴類型放到客服中心的頁面
        public IActionResult GetAppealCategory()
        {
            try
            {
                var datas = _context.ShopAppealCategoryData.ToList();


                if (datas != null)
                {
                    return new JsonResult(datas);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }


        //儲存客訴內容到資料庫
        public IActionResult SaveComplaint([Bind("ComplaintTitle,ComplaintContent")] ShopMemberComplaintCase complaint)
        {
            try
            {
                var selectedValue = HttpContext.Request.Form["selectedValue"];
                if (int.TryParse(selectedValue, out int categoryId))
                {
                    complaint.MemberId = 1;
                    complaint.ComplaintCategoryId = categoryId;
                    complaint.ComplaintStatusId = 1;  // Id = 1是指此案件待處理
                    complaint.CreationTime = DateTime.Now;

                    _context.ShopMemberComplaintCase.Add(complaint);
                    _context.SaveChanges();

                    return Content("新增成功");
                }
                else
                {
                    return Content("申訴類型選擇有誤");
                }
            }
            catch (Exception ex)
            {
                return Content("新增失敗：" + ex.Message);
            }
        }
    }
}
