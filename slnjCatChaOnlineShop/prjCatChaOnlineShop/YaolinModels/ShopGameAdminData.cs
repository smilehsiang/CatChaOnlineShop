﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace prjCatChaOnlineShop.YaolinModels;

public partial class ShopGameAdminData
{
    public int AdminId { get; set; }

    public string AdminUsername { get; set; }

    public string AdminPassword { get; set; }

    public virtual ICollection<GameShopAnnouncement> GameShopAnnouncement { get; set; } = new List<GameShopAnnouncement>();

    public virtual ICollection<GameShopBlogData> GameShopBlogData { get; set; } = new List<GameShopBlogData>();

    public virtual ICollection<ShopReplyData> ShopReplyData { get; set; } = new List<ShopReplyData>();
}