﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace prjCatChaOnlineShop.AllunModels;

public partial class ShopProductDiscount
{
    public int DiscountId { get; set; }

    public decimal? DiscountValue { get; set; }

    public virtual ICollection<ShopProductTotal> ShopProductTotal { get; set; } = new List<ShopProductTotal>();
}