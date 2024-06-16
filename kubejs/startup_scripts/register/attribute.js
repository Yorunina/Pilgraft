const $RangedAttribute = Java.loadClass("net.minecraft.world.entity.ai.attributes.RangedAttribute")
const $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries")
const $EntityType = Java.loadClass("net.minecraft.world.entity.EntityType")

StartupEvents.registry("attribute", event => {
    /**
     * 宝藏距离：玩家使用宝藏能力时，出现宝藏的距离系数。
     */
    event.createCustom("kubejs:treasure_distance", () => new $RangedAttribute("attribute.kubejs.treasure_distance", 2048, 64, 65535).setSyncable(true))
    /**
     * 宝藏幸运：玩家使用宝藏能力时，出现宝藏的稀有度描述系数。
     */
    event.createCustom("kubejs:treasure_fortune", () => new $RangedAttribute("attribute.kubejs.treasure_fortune", 0, 0, 1024).setSyncable(true))


    /**
     * 分解效率：玩家在使用可分解类型材料时，获得基础材料的数量系数
     */
    event.createCustom("kubejs:unpack_ability", () => new $RangedAttribute("attribute.kubejs.unpack_ability", 0, 0, 1024).setSyncable(true))
    /**
     * 教化能力：在主动提高殖民地工人能力时，能力提升的系数
     */
    event.createCustom("kubejs:education_ability", () => new $RangedAttribute("attribute.kubejs.education_ability", 0, 0, 1024).setSyncable(true))


    /**
     * 归家渴望：能够提高归家心石的积累次数上限
     */
    event.createCustom("kubejs:way_home_longing", () => new $RangedAttribute("attribute.kubejs.way_home_longing", 3, 3, 128).setSyncable(true))

    
    /**
     * 自然庇佑：影响着所有自然系祈祷能力的效果
     */
    event.createCustom("kubejs:natrue_bless", () => new $RangedAttribute("attribute.kubejs.natrue_bless", 0, 0, 1024).setSyncable(true))
    /**
     * 星光庇佑：影响着所有星空系祈祷能力的效果
     * 包括增强遭遇新生态群系后对祈祷值的提高效果
     * 在遭遇新的结构时对祈祷值的提高效果
     */
    event.createCustom("kubejs:starlight_bless", () => new $RangedAttribute("attribute.kubejs.starlight_bless", 0, 0, 1024).setSyncable(true))
    /**
     * 洋流庇佑：影响着所有洋流系祈祷能力的效果
     * 包括增强在获得钓鱼战利品时对祈祷值的提高效果
     */
    event.createCustom("kubejs:ocean_bless", () => new $RangedAttribute("attribute.kubejs.ocean_bless", 0, 0, 1024).setSyncable(true))
    /**
     * 鲜血庇佑：影响着所有鲜血系祈祷能力的效果
     * 包括在击杀怪物后对祈祷值的提高效果
     */
    event.createCustom("kubejs:blood_bless", () => new $RangedAttribute("attribute.kubejs.blood_bless", 0, 0, 1024).setSyncable(true))
    /**
     * 命运庇佑：影响着所有命运系祈祷能力的效果
     * 包括在完成悬赏任务后对祈祷值的提高效果
     */
    event.createCustom("kubejs:fate_bless", () => new $RangedAttribute("attribute.kubejs.fate_bless", 0, 0, 1024).setSyncable(true))
    /**
     * 深渊庇佑：影响着所有深渊系祈祷能力的效果
     */
    event.createCustom("kubejs:abyss_bless", () => new $RangedAttribute("attribute.kubejs.abyss_bless", 0, 0, 1024).setSyncable(true))
})


ForgeModEvents.onEvent("net.minecraftforge.event.entity.EntityAttributeModificationEvent", event => {
    event.add($EntityType.PLAYER, getAttribute("kubejs:treasure_distance"))
    event.add($EntityType.PLAYER, getAttribute("kubejs:treasure_fortune"))
    event.add($EntityType.PLAYER, getAttribute("kubejs:unpack_ability"))
    event.add($EntityType.PLAYER, getAttribute("kubejs:education_ability"))

    event.add($EntityType.PLAYER, getAttribute("kubejs:natrue_bless"))
    event.add($EntityType.PLAYER, getAttribute("kubejs:starlight_bless"))
    event.add($EntityType.PLAYER, getAttribute("kubejs:ocean_bless"))
    event.add($EntityType.PLAYER, getAttribute("kubejs:blood_bless"))
    event.add($EntityType.PLAYER, getAttribute("kubejs:fate_bless"))
    event.add($EntityType.PLAYER, getAttribute("kubejs:abyss_bless"))
})


/**
 * @param {Special.Attribute} attributeId
 */
function getAttribute(attributeId) {
    return $ForgeRegistries.ATTRIBUTES.getValue(attributeId) ?? null;
}

