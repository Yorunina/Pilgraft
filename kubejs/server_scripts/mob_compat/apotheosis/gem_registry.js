// priority: 1000
ServerEvents.highPriorityData(event => {
    /**
     * 注册宝石
     * @param {Gem} gem 
     */
    function registerGem(gem) {
        event.addJson(`kubejs:gems/custom/${gem.variant}.json`, gem)
        console.info(JSON.stringify(gem))
    }

    registerGem(new Gem('shining')
        .addBonus(new GemAttributeBonus()
            .setGemClass(new GemClass('ring', [Curios_Ring]))
            .setAttribute('kubejs:treasure_distance')
            .setSimpleValues([-10, -30, -50, -100, -150, -200]))
        .addBonus(new GemAttributeBonus()
            .setGemClass(new GemClass('helmet', [Helmet]))
            .setAttribute('kubejs:treasure_distance')
            .setSimpleValues([-10, -30, -50, -100, -150, -200])))

});
