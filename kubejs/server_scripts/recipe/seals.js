function SealRecipe(key) {
    this.lang_key = key
    this.type = 'seals:seal'
    this.invisible = true
}

SealRecipe.prototype = {
    /**
     * @param {string} item 
     * @returns 
     */
    setIcon: function(item) {
        this.icon = {
            'type': 'item',
            'value': {
                'stack': item
            }
        }
        return this
    },
    /**
     * @param {Array<String>} requisites 
     * @returns 
     */
    setRequisites: function(requisites) {
        this.requisites = requisites
        return this
    },
    /**
     * @param {boolean} invisible 
     * @returns 
     */
    setInvisible: function(invisible) {
        this.invisible = invisible
        return this
    }
}


ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registerCustomRecipe(new SealRecipe('im_new_here').setRequisites(['kubejs:nirvana/root']).setIcon('minecraft:oak_sapling'))
})
