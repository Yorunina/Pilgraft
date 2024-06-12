// const $HumanoidModel = Java.loadClass('net.minecraft.client.model.HumanoidModel')
// const $LayerDefinitions = Java.loadClass('net.minecraft.client.model.geom.LayerDefinitions')
// const $LayerDefinition = Java.loadClass('net.minecraft.client.model.geom.builders.LayerDefinition')
// const $CubeDeformation = Java.loadClass('net.minecraft.client.model.geom.builders.CubeDeformation')
// const $CubeListBuilder = Java.loadClass('net.minecraft.client.model.geom.builders.CubeListBuilder')
// const $PartPose = Java.loadClass('net.minecraft.client.model.geom.PartPose')
// const $ModelLayerLocation = Java.loadClass('net.minecraft.client.model.geom.ModelLayerLocation')

// const FocusBagLayerLocation = new $ModelLayerLocation(new ResourceLocation('kubejs', 'focus_bag'), 'main')

// /**
//  * @returns {Internal.LayerDefinition}
//  */
// function createFocusBag() {
//     let meshDefinition = $HumanoidModel.createMesh($LayerDefinitions.OUTER_ARMOR_DEFORMATION, 0.5)
//     let partdefinition = meshDefinition.getRoot()
//     partdefinition.addOrReplaceChild("head", $CubeListBuilder.create(), $PartPose.ZERO)
//     partdefinition.addOrReplaceChild("body", $CubeListBuilder.create().texOffs(0, 0).addBox(4.0, 10.0, -2.5, 1.0, 4.0, 5.0, new $CubeDeformation(0.25)), $PartPose.offset(0.0, 0.0, 0.0))
//     return $LayerDefinition.create(meshDefinition, 16, 16)
// }

// ForgeEvents.onEvent('net.minecraftforge.client.event.EntityRenderersEvent$RegisterLayerDefinitions', event => {
//     event.registerLayerDefinition(FocusBagLayerLocation, () => createFocusBag())
// })

