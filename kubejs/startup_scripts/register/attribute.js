const $RangedAttribute = Java.loadClass("net.minecraft.world.entity.ai.attributes.RangedAttribute")
const $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries")
const $EntityType = Java.loadClass("net.minecraft.world.entity.EntityType")

StartupEvents.registry("attribute", event => {
    /**
     * 宝藏距离：玩家使用宝藏能力时，出现宝藏的距离系数。
     */
    event.createCustom("kubejs:treasure_distance", () => new $RangedAttribute("Treasure Distance", 2048, 64, 65535).setSyncable(true))
    /**
     * 宝藏幸运：玩家使用宝藏能力时，出现宝藏的稀有度描述系数。
     */
    event.createCustom("kubejs:treasure_fortune", () => new $RangedAttribute("Treasure Fortune", 0, 0, 1024).setSyncable(true))


    /**
     * 分解效率：玩家在使用可分解类型材料时，获得基础材料的数量系数
     */
    event.createCustom("kubejs:unpack_ability", () => new $RangedAttribute("Unpack Ability", 0, 0, 1024).setSyncable(true))
    /**
     * 教化能力：在主动提高殖民地工人能力时，能力提升的系数
     */
    event.createCustom("kubejs:education_ability", () => new $RangedAttribute("Education Ability", 0, 0, 1024).setSyncable(true))


    /**
     * 自然庇佑：影响着所有自然系祈祷能力的效果
     */
    event.createCustom("kubejs:natrue_bless", () => new $RangedAttribute("Treasure Fortune", 0, 0, 1024).setSyncable(true))
    /**
     * 星光庇佑：影响着所有星空系祈祷能力的效果
     */
    event.createCustom("kubejs:starlight_bless", () => new $RangedAttribute("Treasure Fortune", 0, 0, 1024).setSyncable(true))
    /**
     * 洋流庇佑：影响着所有洋流系祈祷能力的效果
     */
    event.createCustom("kubejs:ocean_bless", () => new $RangedAttribute("Treasure Fortune", 0, 0, 1024).setSyncable(true))
    /**
     * 色彩庇佑：影响着所有色彩系祈祷能力的效果
     */
    event.createCustom("kubejs:colorful_bless", () => new $RangedAttribute("Treasure Fortune", 0, 0, 1024).setSyncable(true))
})


ForgeModEvents.onEvent("net.minecraftforge.event.entity.EntityAttributeModificationEvent", event => {
    event.add($EntityType.PLAYER, getAttribute("kubejs:treasure_distance"))
    event.add($EntityType.PLAYER, getAttribute("kubejs:treasure_fortune"))
    event.add($EntityType.PLAYER, getAttribute("kubejs:unpack_ability"))
    event.add($EntityType.PLAYER, getAttribute("kubejs:education_ability"))
})


/**
 * @param {Special.Attribute} attributeId
 */
function getAttribute(attributeId) {
    return $ForgeRegistries.ATTRIBUTES.getValue(attributeId) ?? null;
}

