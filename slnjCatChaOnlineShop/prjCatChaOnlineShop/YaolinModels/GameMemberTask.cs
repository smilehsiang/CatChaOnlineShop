﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace prjCatChaOnlineShop.YaolinModels;

public partial class GameMemberTask
{
    public int? MemberId { get; set; }

    public int TaskId { get; set; }

    public DateTime? CompleteDate { get; set; }

    public virtual ICollection<GameTaskList> GameTaskList { get; set; } = new List<GameTaskList>();

    public virtual ShopMemberInfo Member { get; set; }
}