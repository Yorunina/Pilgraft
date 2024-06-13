/**
 * 无聊时写的方法，用于使用kjs便捷构建神化宝石相关的信息。
 */

/**
 * 宝石
 * @param {string} variant 
 * @returns {Gem}
 */
function Gem(variant) {
    this.variant = variant
    this.weight = 10
    this.quality = 0
    this.dimensions = []
    this.bonuses = []
    return this
}
Gem.prototype = {
    /**
     * @param {string} variant 
     * @returns {Gem}
     */
    setVariant: function (variant) {
        this.variant = variant
        return this
    },
    /**
     * @param {number} weight 
     * @returns {Gem}
     */
    setWeight: function (weight) {
        this.weight = weight
        return this
    },
    /**
     * @param {number} quality 
     * @returns {Gem}
     */
    setQuality: function (quality) {
        this.quality = quality
        return this
    },
    /**
     * @param {string} minRarity 
     * @returns {Gem}
     */
    setMinRarity: function (minRarity) {
        this.min_rarity = minRarity
        return this
    },
    /**
     * @param {boolean} unique 
     * @returns {Gem}
     */
    setUnique: function (unique) {
        this.unique = unique
        return this
    },
    /**
     * @param {string} dimension 
     * @returns {Gem}
     */
    addDimension: function (dimension) {
        this.dimensions.push(dimension)
        return this
    },
    /**
     * 
     * @param {GemAllStatsBonus|GemAttributeBonus|GemDropTransformBonus|GemEnchantmentBonus|GemMobEffectBonus|GemMultiAttributeBonus} bonus 
     * @returns {Gem}
     */
    addBonus: function (bonus) {
        this.bonuses.push(bonus)
        return this
    },
}

/**
 * 效果应用类型
 * @param {string} key 
 * @param {string[]} types 
 * @returns {GemClass}
 */
function GemClass(key, types) {
    this.key = key
    this.types = types
    return this
}
GemClass.prototype = {
    /**
     * @param {string} type 
     * @returns {GemClass}
     */
    addTypes: function (type) {
        this.types.push(type)
        return this
    },
}

/**
 * 属性Bonus
 * @returns {GemAttributeBonus}
 */
function GemAttributeBonus() {
    this.type = GemBonusType_Attribute
    this.gem_class = {}
    this.attribute = ''
    this.operation = AttributeOperation_Addition
    this.values = {}
    return this
}
GemAttributeBonus.prototype = {
    /**
     * @param {string} operation 
     * @returns {GemAttributeBonus}
     */
    setOperation: function (operation) {
        this.operation = operation
        return this
    },
    /**
     * @param {string} attribute 
     * @returns {GemAttributeBonus}
     */
    setAttribute: function (attribute) {
        this.attribute = attribute
        return this
    },
    /**
     * @param {GemClass} gemClass 
     * @returns {GemAttributeBonus}
     */
    setGemClass: function (gemClass) {
        this.gem_class = gemClass
        return this
    },
    /**
     * @param {GemBonusValues} values 
     * @returns {GemAttributeBonus}
     */
    setValues: function (values) {
        this.values = values
        return this
    },
    /**
     * 简易设置Values，需要传入数字列表，按照稀有度逐个放入，不足则补末值（最多6个）
     * @param {number[]} values 
     * @returns {GemAttributeBonus}
     */
    setSimpleValues: function (values) {
        this.values = new GemBonusValues()
            .setCommon(values.length > 0 ? values[0] : 0)
            .setUncommon(values.length > 1 ? values[1] : values[-1])
            .setRare(values.length > 2 ? values[2] : values[-1])
            .setEpic(values.length > 3 ? values[3] : values[-1])
            .setMythic(values.length > 4 ? values[4] : values[-1])
            .setAncient(values.length > 5 ? values[5] : values[-1])
        return this
    },
}

/**
 * 生物效果Bonus
 * @returns {GemMobEffectBonus}
 */
function GemMobEffectBonus() {
    this.type = GemBonusType_MobEffect
    this.gem_class = {}
    this.mob_effect = ''
    this.stack_on_reapply = true
    this.target = ''
    this.values = {}
    return this
}
GemMobEffectBonus.prototype = {
    /**
     * @param {string} mobEffect 
     * @returns {GemMobEffectBonus}
     */
    setMobEffect: function (mobEffect) {
        this.mob_effect = mobEffect
        return this
    },
    /**
     * @param {boolean} stackOnReapply 
     * @returns {GemMobEffectBonus}
     */
    setStackOnReapply: function (stackOnReapply) {
        this.stack_on_reapply = stackOnReapply
        return this
    },
    /**
     * @param {GemClass} gemClass 
     * @returns {GemMobEffectBonus}
     */
    setGemClass: function (gemClass) {
        this.gem_class = gemClass
        return this
    },
    /**
     * @param {string} target 
     * @returns {GemMobEffectBonus}
     */
    setTarget: function (target) {
        this.target = target
        return this
    },
    /**
     * @param {GemBonusValues} values 
     * @returns {GemMobEffectBonus}
     */
    setValues: function (values) {
        this.values = values
        return this
    },
}

/**
 * 全属性Bonus
 * @returns {GemAllStatsBonus}
 */
function GemAllStatsBonus() {
    this.type = GemBonusType_AllStats
    this.gem_class = {}
    this.operation = ''
    this.attributes = []
    this.values = {}
    return this
}
GemAllStatsBonus.prototype = {
    /**
     * @param {GemClass} gemClass 
     * @returns {GemAllStatsBonus}
     */
    setGemClass: function (gemClass) {
        this.gem_class = gemClass
        return this
    },
    /**
     * @param {string} operation 
     * @returns {GemAllStatsBonus}
     */
    setOperation: function (operation) {
        this.operation = operation
        return this
    },
    /**
     * @param {GemBonusValues} values 
     * @returns {GemAllStatsBonus}
     */
    setValues: function (values) {
        this.values = values
        return this
    },
    /**
     * @param {string[]} attributes 
     * @returns {GemAllStatsBonus}
     */
    setAttributes: function (attributes) {
        this.attributes = attributes
        return this
    },
    /**
     * @param {string} desc 
     * @returns {GemAllStatsBonus}
     */
    setDesc: function (desc) {
        this.desc = desc
        return this
    },
}

/**
 * 掉落物转换Bonus
 * @returns {GemDropTransformBonus}
 */
function GemDropTransformBonus() {
    this.type = GemBonusType_DropTransform
    this.gem_class = {}
    return this
}
GemDropTransformBonus.prototype = {
    /**
     * @param {GemClass} gemClass 
     * @returns {GemDropTransformBonus}
     */
    setGemClass: function (gemClass) {
        this.gem_class = gemClass
        return this
    },
    /**
     * @param {Internal.Ingredient} inputs 
     * @returns {GemDropTransformBonus}
     */
    setInputs: function (inputs) {
        this.inputs = inputs
        return this
    },
    /**
     * @param {Internal.Item} output 
     * @returns {GemDropTransformBonus}
     */
    setOutput: function (output) {
        this.output = output
        return this
    },
    /**
     * @param {Internal.Block} blocks 
     * @returns {GemDropTransformBonus}
     */
    setBlocks: function (blocks) {
        this.blocks = blocks
        return this
    },
    /**
     * @param {string} desc 
     * @returns {GemDropTransformBonus}
     */
    setDesc: function (desc) {
        this.desc = desc
        return this
    },
}

/**
 * 多属性Bonus
 * @returns {GemMultiAttributeBonus}
 */
function GemMultiAttributeBonus() {
    this.type = GemBonusType_MultiAttribute
    this.gem_class = {}
    this.modifiers = []
    return this
}
GemMultiAttributeBonus.prototype = {
    /**
     * @param {gemClass} gemClass 
     * @returns {GemMultiAttributeBonus}
     */
    setGemClass: function (gemClass) {
        this.gem_class = gemClass
        return this
    },
    /**
     * @param {String} desc 
     * @returns {GemMultiAttributeBonus}
     */
    setDesc: function (desc) {
        this.desc = desc
        return this
    },
    /**
     * @param {string} attribute 
     * @param {string} operation 
     * @param {GemBonusValues} values 
     */
    addModifier: function (attribute, operation, values) {
        this.modifiers.push(
            {
                'attribute': attribute,
                'operation': operation,
                'values': values
            }
        )
    }
}

/**
 * 附魔Bonus
 * @returns {GemEnchantmentBonus}
 */
function GemEnchantmentBonus() {
    this.type = GemBonusType_Enchantment
    this.gem_class = {}
    this.enchantment = ''
    this.must_exist = true
    return this
}
GemEnchantmentBonus.prototype = {
    /**
     * @param {GemClass} gemClass 
     * @returns {GemEnchantmentBonus}
     */
    setGemClass: function (gemClass) {
        this.gem_class = gemClass
        return this
    },
    /**
     * @param {string} enchantment 
     * @returns {GemEnchantmentBonus}
     */
    setEnchantment: function (enchantment) {
        this.enchantment = enchantment
        return this
    },
    /**
     * @param {boolean} mustExist 
     * @returns {GemEnchantmentBonus}
     */
    setMustExist: function (mustExist) {
        this.must_exist = mustExist
        return this
    },
    /**
     * @param {GemBonusValues} values 
     * @returns {GemEnchantmentBonus}
     */
    setValues: function (values) {
        this.values = values
        return this
    },
}

/**
 * BonusValue构建，根据场景不同，set的值可能是某对象，如效果对象{duration: 1, amplifier: 1, cooldown: 1}
 * @returns {GemBonusValues}
 */
function GemBonusValues() {
    return this
}
GemBonusValues.prototype = {
    /**
     * @param {any} obj 
     * @returns {GemBonusValues}
     */
    setCommon: function (obj) {
        this.common = obj
        return this
    },
    /**
     * @param {any} obj 
     * @returns {GemBonusValues}
     */
    setUncommon: function (obj) {
        this.uncommon = obj
        return this
    },
    /**
     * @param {any} obj 
    * @returns {GemBonusValues}
    */
    setRare: function (obj) {
        this.rare = obj
        return this
    },
    /**
     * @param {any} obj 
     * @returns {GemBonusValues}
     */
    setEpic: function (obj) {
        this.epic = obj
        return this
    },
    /**
     * @param {any} obj 
     * @returns {GemBonusValues}
     */
    setMythic: function (obj) {
        this.mythic = obj
        return this
    },
    /**
     * @param {any} obj 
     * @returns {GemBonusValues}
     */
    setAncient: function (obj) {
        this.ancient = obj
        return this
    },
}