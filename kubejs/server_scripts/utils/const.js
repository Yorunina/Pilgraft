// 原版
const $ServerPlayer = Java.loadClass('net.minecraft.server.level.ServerPlayer')
const $MapItemSavedData = Java.loadClass('net.minecraft.world.level.saveddata.maps.MapItemSavedData')
const $MapItem = Java.loadClass('net.minecraft.world.item.MapItem')
const $MapDecorationType = Java.loadClass('net.minecraft.world.level.saveddata.maps.MapDecoration$Type')
const $RandomizableContainerBlockEntity = Java.loadClass('net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity')

// 通用
const AttributeOperation_Addition = 'ADDITION'
const AttributeOperation_MultiplyTotal = 'MULTIPLY_TOTAL'

// 殖民地相关
const $CitizenSkill = Java.loadClass('com.minecolonies.api.entity.citizen.Skill')
const $ICitizenSkillHandler = Java.loadClass('com.minecolonies.api.entity.citizen.citizenhandlers.ICitizenSkillHandler')
const $IColonyManager = Java.loadClass('com.minecolonies.api.colony.IColonyManager')

// 心石通用
const MoodStoneDataKey = 'moodStone'
// 归家心石
const WayHomeStoneDataKey = 'wayHome'
const BiomeListDataKey = 'biomeList'

// 神化宝石相关
const GemBonusType_Attribute = 'apotheosis:attribute'
const GemBonusType_MobEffect = 'apotheosis:mob_effect'
const GemBonusType_AllStats = 'apotheosis:all_stats'
const GemBonusType_DropTransform = 'apotheosis:drop_transform'
const GemBonusType_MultiAttribute = 'apotheosis:multi_attribute'
const GemBonusType_Enchantment = 'apotheosis:enchantment'
const Helmet = 'helmet'
const Chestplate = 'chestplate'
const Leggings = 'leggings'
const Sword = 'sword'
const Trident = 'trident'
const Shovel = 'shovel'
const Pickaxe = 'pickaxe'
const Axe = 'axe'
const Bow = 'bow'
const CrossBow = 'crossbow'

// 饰品槽位
const Curios_Ring = 'curios:ring'
const Curios_Belt = 'curios:belt'
const Curios_MoodStone = 'curios:moodstone'
const Curios_Sutra = 'curios:sutra'
const Curios_Hat = 'curios:hat'
const Curios_Back = 'curios:back'
const Curios_Feet = 'curios:feet'
const Curios_Hands = 'curios:hands'
const Curios_Necklace = 'curios:necklace'
const Curios_Talisman = 'curios:talisman'