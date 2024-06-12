function CuriosExtraContext() {
    return this
}

CuriosExtraContext.prototype = {
    /**
     * @param {Internal.ItemStack} player 
     * @returns {CuriosExtraContext}
     */
    setCurios: function (curios) {
        this.curios = curios
        return this
    },
    /**
     * @returns {Internal.ItemStack}
     */
    getCurios: function () {
        return this.curios
    },
}

/**
 * 获取玩家已经装备的饰品ItemStack List，顺序依照饰品本身装备的顺序排序
 * @param {Internal.ServerPlayer} player 
 * @returns {Internal.List<Internal.ItemStack>}
 */
function getEquippedCuriosByPriority(player) {
    let lazyOptCapability = player.getCapability(CuriosCapabilities.INVENTORY)
    if (!lazyOptCapability.isPresent()) return
    let curios = lazyOptCapability.resolve().get()
    return curios.getEquippedCurios().getAllItems()
}