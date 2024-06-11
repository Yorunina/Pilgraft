/**
 * @param {org.mesdag.advjs.trigger.Trigger} trigger 
 * @param {Ingredient} ingredient 
 * @returns 
 */
function genItemPickByPlayerTrigger(trigger, ingredient) {
    return trigger.itemPickedUpByPlayer(triggerBuilder => {
        triggerBuilder["setItem(net.minecraft.world.item.crafting.Ingredient)"](ingredient)
    })
}