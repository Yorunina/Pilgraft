// priority: 100
ItemEvents.entityInteracted('book_of_strength', event => {
    let {target, player} = event
    if (target.type != 'minecolonies:citizen') return
    let citizen = getCitizenFromEntity(target)
    if (!citizen) return
    let knowledge = citizen.citizenSkillHandler.getLevel($CitizenSkill.Strength)
    citizen.citizenSkillHandler.incrementLevel($CitizenSkill.Strength, 3)
    
    player.tell([Text.white('因为你'), Text.lightPurple('卓越(128)'), Text.white('的管理能力，'),Text.green(citizen.getName()), Text.white('的力量上升了'), Text.green(knowledge), Text.green('->'), Text.green(knowledge + 3)])
})

ItemEvents.entityInteracted('book_of_knowledge', event => {
    let {target, player, item} = event
    item.setDamageValue(item.getDamageValue() + 1)
    let educationAbility = player.getAttribute('kubejs:education_ability').getValue()
    if (target.type != 'minecolonies:citizen') return
    let citizen = getCitizenFromEntity(target)
    if (!citizen) return
    let knowledge = citizen.citizenSkillHandler.getLevel($CitizenSkill.Knowledge)
    citizen.citizenSkillHandler.incrementLevel($CitizenSkill.Knowledge, 3)
    
    player.tell([Text.white('因为你'), Text.lightPurple('卓越(128)'), Text.white('的管理能力，'),Text.green(citizen.getName()), Text.white('的学识上升了'), Text.green(knowledge), Text.green('->'), Text.green(knowledge + 3)])
})


/**
 * @param {Internal.Entity} target 
 * @returns {Internal.ICitizenData}
 */
function getCitizenFromEntity(target) {
    let colonyId = target?.nbt.getInt('colony')
    let citizenId = target?.nbt.getInt('citizen')
    if (!colonyId || !citizenId) return
    let colony = $IColonyManager.getInstance().getColonyByDimension(colonyId, player.level.dimensionKey)
    if (!colony) return
    return colony.getCitizenManager().getCivilian(citizenId)
}