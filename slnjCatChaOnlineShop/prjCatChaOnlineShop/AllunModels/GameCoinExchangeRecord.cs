﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace prjCatChaOnlineShop.AllunModels;

public partial class GameCoinExchangeRecord
{
    public int? MemberId { get; set; }

    public DateTime? ExchangeTime { get; set; }

    public int? ExchangeQuantity { get; set; }

    public int CoinExchangeRecordId { get; set; }

    public virtual ShopMemberInfo Member { get; set; }
}