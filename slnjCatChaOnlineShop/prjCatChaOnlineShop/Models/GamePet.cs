﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace prjCatChaOnlineShop.Models;

public partial class GamePet
{
    public int? ProductId { get; set; }

    public int? PetLevelId { get; set; }

    public int? PetSkillId { get; set; }

    public int? PetRarityId { get; set; }

    public int Id { get; set; }

    public virtual GameProductTotal Product { get; set; }
}