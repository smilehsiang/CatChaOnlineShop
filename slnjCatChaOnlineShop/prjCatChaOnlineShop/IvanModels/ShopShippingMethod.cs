﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace prjCatChaOnlineShop.IvanModels;

public partial class ShopShippingMethod
{
    public int ShippingMethodId { get; set; }

    public string ShippingMethodName { get; set; }

    public decimal? Shippment { get; set; }

    public virtual ICollection<ShopOrderTotalTable> ShopOrderTotalTable { get; set; } = new List<ShopOrderTotalTable>();
}