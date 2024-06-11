// priority: 100
AdvJSEvents.advancement(event => {
    const { PREDICATE, TRIGGER } = event
    function genTransKey(key) {
        return { 'translate': `advancement.kubejs.nirvana.${key}` }
    }
    const nirvanaRoot = event.create('kubejs:nirvana')
        .display(displayBuilder => {
            displayBuilder.setBackground('minecraft:textures/block/stone.png')
            displayBuilder.setIcon('minecraft:oak_sapling')
            displayBuilder.setTitle(genTransKey('the_root.title'))
            displayBuilder.setDescription(genTransKey('the_root.desc'))
        })
        .criteria(criteriaBuilder => {
            criteriaBuilder.add('seeds', TRIGGER.fromJson({
                "conditions": {},
                "trigger": "minecraft:inventory_changed"
            }))
        })


    const nirvanaTheFirst = nirvanaRoot.addChild('kubejs:nirvana/the_first', advBuilder => {
        advBuilder.display(displayBuilder => {
            displayBuilder.setIcon('minecraft:sugar')
            displayBuilder.setTitle(genTransKey('the_first.title'))
            displayBuilder.setDescription(genTransKey('the_first.desc'))
            displayBuilder.setHidden(true)
        })
            .requireParentDone()
    })

    const nirvanaTheSecond = nirvanaTheFirst.addChild('kubejs:nirvana/the_second', advBuilder => {
        advBuilder.display(displayBuilder => {
            displayBuilder.setIcon('minecraft:sugar')
            displayBuilder.setTitle(genTransKey('the_second.title'))
            displayBuilder.setDescription(genTransKey('the_second.desc'))
            displayBuilder.setHidden(true)
        })
            .requireParentDone()
    })


    const nirvanaTheThird = nirvanaTheSecond.addChild('kubejs:nirvana/the_third', advBuilder => {
        advBuilder.display(displayBuilder => {
            displayBuilder.setIcon('minecraft:sugar')
            displayBuilder.setTitle(genTransKey('the_third.title'))
            displayBuilder.setDescription(genTransKey('the_third.desc'))
            displayBuilder.setHidden(true)
        })
            .requireParentDone()
    })


    const nirvanaTheFourth = nirvanaTheThird.addChild('kubejs:nirvana/the_fourth', advBuilder => {
        advBuilder.display(displayBuilder => {
            displayBuilder.setIcon('minecraft:sugar')
            displayBuilder.setTitle(genTransKey('the_fourth.title'))
            displayBuilder.setDescription(genTransKey('the_fourth.desc'))
            displayBuilder.setHidden(true)
        })
            .requireParentDone()
    })


    const nirvanaTheFifth = nirvanaTheFourth.addChild('kubejs:nirvana/the_fifth', advBuilder => {
        advBuilder.display(displayBuilder => {
            displayBuilder.setIcon('minecraft:sugar')
            displayBuilder.setTitle(genTransKey('the_fifth.title'))
            displayBuilder.setDescription(genTransKey('the_fifth.desc'))
            displayBuilder.setHidden(true)
        })
            .requireParentDone()
    })


    const nirvanaTheSixth = nirvanaTheFifth.addChild('kubejs:nirvana/the_sixth', advBuilder => {
        advBuilder.display(displayBuilder => {
            displayBuilder.setIcon('minecraft:sugar')
            displayBuilder.setTitle(genTransKey('the_sixth.title'))
            displayBuilder.setDescription(genTransKey('the_sixth.desc'))
            displayBuilder.setHidden(true)
        })
            .requireParentDone()
    })

    const nirvanaTheSeventh = nirvanaTheSixth.addChild('kubejs:nirvana/the_seventh', advBuilder => {
        advBuilder.display(displayBuilder => {
            displayBuilder.setIcon('minecraft:sugar')
            displayBuilder.setTitle(genTransKey('the_seventh.title'))
            displayBuilder.setDescription(genTransKey('the_seventh.desc'))
            displayBuilder.setHidden(true)
        })
            .requireParentDone()
    })

    nirvanaTheSeventh.addChild('kubejs:nirvana/the_final', advBuilder => {
        advBuilder.display(displayBuilder => {
            displayBuilder.setIcon('minecraft:sugar')
            displayBuilder.setTitle(genTransKey('the_final.title'))
            displayBuilder.setDescription(genTransKey('the_final.desc'))
            displayBuilder.setHidden(true)
        })
    })
})

