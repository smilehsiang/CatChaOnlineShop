﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace prjCatChaOnlineShop.IvanModels;

public partial class ShopAppealCategoryData
{
    public int AppealCategoryId { get; set; }

    public string CategoryName { get; set; }

    public virtual ICollection<ShopMemberComplaintCase> ShopMemberComplaintCase { get; set; } = new List<ShopMemberComplaintCase>();
}