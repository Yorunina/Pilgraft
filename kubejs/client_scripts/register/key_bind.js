const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");
const $GLFWKey = Java.loadClass("org.lwjgl.glfw.GLFW");
const $KeyMappingRegistry = Java.loadClass("dev.architectury.registry.client.keymappings.KeyMappingRegistry");

global.PrayAction = new $KeyMapping(`key.kubejs.pary_action`, $GLFWKey.GLFW_KEY_X, 'key.categories.kubejs')
$KeyMappingRegistry.register(global.PrayAction)


ClientEvents.tick(event => {
    if (global.PrayAction.consumeClick()) {
        event.player.sendData(global.NET_PRAY_KEY)
    }
})
