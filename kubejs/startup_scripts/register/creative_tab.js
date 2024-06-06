const $CreativeTabRegistry = Java.loadClass("dev.architectury.registry.CreativeTabRegistry")

$CreativeTabRegistry.create(Utils.id("kubejs:pilgraft"), () => Item.of('minecraft:wooden_axe'))