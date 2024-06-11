// priority: 100
AdvJSEvents.advancement(event => {
    const { PREDICATE, TRIGGER } = event
    function genTransKey(key) {
        return { 'translate': `advancement.kubejs.ability.${key}` }
    }
    const abilityRoot = event.create('kubejs:ability')
        .display(displayBuilder => {
            displayBuilder.setBackground('minecraft:textures/block/stone.png')
            displayBuilder.setIcon('minecraft:oak_sapling')
            displayBuilder.setTitle(genTransKey('ability.title'))
            displayBuilder.setDescription(genTransKey('ability.desc'))
        })
        .criteria(criteriaBuilder => {
            criteriaBuilder.add('seeds', TRIGGER.fromJson({
                "conditions": {},
                "trigger": "minecraft:inventory_changed"
            }))
        })


    const abilityOreView = abilityRoot.addChild('kubejs:ability/ore_view', advBuilder => {
        advBuilder.display(displayBuilder => {
            displayBuilder.setIcon('minecraft:iron_ore')
            displayBuilder.setTitle(genTransKey('ore_view.title'))
            displayBuilder.setDescription(genTransKey('ore_view.desc'))
            displayBuilder.setHidden(true)
        })
            .requireParentDone()
    })

    const abilityBedrockOreView = abilityOreView.addChild('kubejs:ability/bedrock_ore_view', advBuilder => {
        advBuilder.display(displayBuilder => {
            displayBuilder.setIcon('minecraft:bedrock')
            displayBuilder.setTitle(genTransKey('bedrock_ore_view.title'))
            displayBuilder.setDescription(genTransKey('bedrock_ore_view.desc'))
            displayBuilder.setHidden(true)
            displayBuilder.setFrameType('challenge')
        })
            .requireParentDone()
    })

})

AdvJSEvents.betterAdv(event => {
    event.modify('kubejs:ability/ore_view').hideLines()
})