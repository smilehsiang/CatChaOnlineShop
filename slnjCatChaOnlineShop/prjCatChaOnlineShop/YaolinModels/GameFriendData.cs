﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace prjCatChaOnlineShop.YaolinModels;

public partial class GameFriendData
{
    public int MemberId { get; set; }

    public int FriendId { get; set; }

    public int FriendDataId { get; set; }

    public virtual ShopMemberInfo Friend { get; set; }

    public virtual ShopMemberInfo Member { get; set; }
}