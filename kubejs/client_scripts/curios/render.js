// const NO_OVERLAY = (0 | 10 << 16)

// CuriosEvents.registerRenderer(event => {
//     event.register('kubejs:golden_ring', ctx => {
//         console.info('CuriosEvents')
//         let matrixStack = ctx.matrixStack
//         let slotContext = ctx.slotContext
//         let renderTypeBuffer = ctx.renderTypeBuffer
//         let renderLayerParent = ctx.renderLayerParent
    
//         let model = renderLayerParent.model
//         model.setupAnim(slotContext.entity(), ctx.limbSwing, ctx.limbSwingAmount, ctx.ageInTicks, ctx.netHeadYaw, ctx.netHeadPitch)
//         model.prepareMobModel(slotContext.entity(), ctx.limbSwing, ctx.limbSwingAmount, ctx.ageInTicks)
//         let renderType = model.renderType(new ResourceLocation('kubejs:textures/models/curios/focus_bag.png'))
//         CuriosRenderer.followBodyRotations(slotContext.entity(), model)
//         let vertexBuilder = renderTypeBuffer.getBuffer(renderType)


//         model.renderToBuffer(matrixStack, vertexBuilder, ctx.light, NO_OVERLAY, 1, 1, 1, 1)
//     })
// })
