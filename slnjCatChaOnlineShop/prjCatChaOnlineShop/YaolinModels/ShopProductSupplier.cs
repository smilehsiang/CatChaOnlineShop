﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace prjCatChaOnlineShop.YaolinModels;

public partial class ShopProductSupplier
{
    public int SupplierId { get; set; }

    public string CompanyName { get; set; }

    public string ContactPhone { get; set; }

    public string CompanyAddress { get; set; }

    public virtual ICollection<ShopProductTotal> ShopProductTotal { get; set; } = new List<ShopProductTotal>();
}