const $Heading = Java.loadClass('mod.gottsch.forge.gottschcore.spatial.Heading')
const $ChestRegistry = Java.loadClass('mod.gottsch.forge.treasure2.core.registry.ChestRegistry')
const $FeatureType = Java.loadClass('mod.gottsch.forge.treasure2.core.world.feature.FeatureType')
const $Rarity = Java.loadClass('mod.gottsch.forge.treasure2.core.enums.Rarity')
const $TreasureBlocks = Java.loadClass('mod.gottsch.forge.treasure2.core.block.TreasureBlocks')
const $AbstractTreasureChestBlockEntity = Java.loadClass('mod.gottsch.forge.treasure2.core.block.entity.AbstractTreasureChestBlockEntity')
const $RarityLevelWeightedChestGeneratorRegistry = Java.loadClass('mod.gottsch.forge.treasure2.core.registry.RarityLevelWeightedChestGeneratorRegistry')
const $ITreasureChestBlockEntity = Java.loadClass('mod.gottsch.forge.treasure2.core.block.entity.ITreasureChestBlockEntity')
const $TreasureItems = Java.loadClass('mod.gottsch.forge.treasure2.core.item.TreasureItems')
/**
 * 
 * @param {Internal.Level} level 
 * @param {BlockPos} level 
 * @returns 
 */
function spawnLockedChest(level, pos, player) {
    let chest = $TreasureBlocks.WOOD_CHEST.get()
    player.tell(level.setBlockAndUpdate(pos, chest.defaultBlockState()))

    let blockEntity = level.getBlockEntity(pos)

    if (blockEntity != null) {
        blockEntity.setChanged()
    }
}

ItemEvents.rightClicked('minecraft:stick', event => {
    spawnLockedChest(event.level, event.player.getPosition(1.0), event.player)
})