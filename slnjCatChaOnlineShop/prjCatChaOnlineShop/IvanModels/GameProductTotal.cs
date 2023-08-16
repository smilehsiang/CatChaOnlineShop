﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace prjCatChaOnlineShop.IvanModels;

public partial class GameProductTotal
{
    public string ProductName { get; set; }

    public int ProductId { get; set; }

    public int? ProductCategoryId { get; set; }

    public string ProductDescription { get; set; }

    public int? ProductPrice { get; set; }

    public string ProductImage { get; set; }

    public string PurchasedQuantity { get; set; }

    public string RemainingQuantity { get; set; }

    public decimal? LotteryProbability { get; set; }

    public virtual ICollection<GameItemPurchaseRecord> GameItemPurchaseRecord { get; set; } = new List<GameItemPurchaseRecord>();

    public virtual GameProductCategory ProductCategory { get; set; }
}