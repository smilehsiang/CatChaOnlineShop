﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace prjCatChaOnlineShop.AllunModels;

public partial class ShopCommonAddressData
{
    public int? MemberId { get; set; }

    public int AddressId { get; set; }

    public string RecipientName { get; set; }

    public string RecipientPhone { get; set; }

    public string RecipientAddress { get; set; }

    public virtual ShopMemberInfo Member { get; set; }

    public virtual ICollection<ShopOrderTotalTable> ShopOrderTotalTable { get; set; } = new List<ShopOrderTotalTable>();
}