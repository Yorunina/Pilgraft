const $ServerPlayer = Java.loadClass('net.minecraft.server.level.ServerPlayer')
const $Tiers = Java.loadClass('net.minecraft.world.item.Tiers')
const $Properties = Java.loadClass('net.minecraft.world.item.Item$Properties')

// 水产养殖兼容
const $ChatFormatting = Java.loadClass('net.minecraft.ChatFormatting')
const $BaitItem = Java.loadClass('com.teammetallurgy.aquaculture.item.BaitItem')
const $HookItem = Java.loadClass('com.teammetallurgy.aquaculture.item.HookItem')
const $FishItem = Java.loadClass('com.teammetallurgy.aquaculture.item.FishItem')
const $AquaFishingRodItem = Java.loadClass('com.teammetallurgy.aquaculture.item.AquaFishingRodItem')
const $HookBuilder = Java.loadClass('com.teammetallurgy.aquaculture.api.fishing.Hook$HookBuilder')
