// priority: 100
ItemEvents.entityInteracted('sugar', event => {
    let target = event.target
    let player = event.player
    if (target.type != 'minecolonies:citizen') return
    let colonyId = target?.nbt.getInt('colony')
    let citizenId = target?.nbt.getInt('citizen')
    let colony = $IColonyManager.getInstance().getColonyByDimension(colonyId, player.level.dimensionKey)
    if (!colony) return
    let citizen = colony.getCitizenManager().getCivilian(citizenId)
    let knowledge = citizen.citizenSkillHandler.getLevel($CitizenSkill.Knowledge)
    citizen.citizenSkillHandler.incrementLevel($CitizenSkill.Knowledge, 3)
    player.tell([Text.white('因为你'), Text.lightPurple('卓越(128)'), Text.white('的管理能力，'),Text.green(citizen.getName()), Text.white('的学识上升了'), Text.green(knowledge), Text.green('->'), Text.green(knowledge + 3)])
})

