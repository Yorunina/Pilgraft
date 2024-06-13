StartupEvents.registry('item', event => {
    event.create('book_of_strength').maxStackSize(1).maxDamage(10).tag('kubejs:citizen_book')
    event.create('book_of_knowledge').maxStackSize(1).maxDamage(10).tag('kubejs:citizen_book')
})