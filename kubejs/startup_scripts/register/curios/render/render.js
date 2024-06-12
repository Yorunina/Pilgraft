const NO_OVERLAY = (0 | 10 << 16)
CuriosEvents.registerRenderer(event => {
    event.register('kubejs:focus_bag', ctx => {
        console.info('CuriosEvents')
        let matrixStack = ctx.matrixStack
        let slotContext = ctx.slotContext
        let renderTypeBuffer = ctx.renderTypeBuffer
        /**@type {Internal.LivingEntity} */
        let entity = slotContext.entity()

        let modelPart = Client.instance.getEntityModels().bakeLayer(FocusBagLayerLocation)
        let model = new $HumanoidModel(modelPart)

        model.setupAnim(entity, ctx.limbSwing, ctx.limbSwingAmount, ctx.ageInTicks, ctx.netHeadYaw, ctx.netHeadPitch)
        model.head.visible = !entity.isInvisible()
        model.body.visible = !entity.isInvisible()
        model.prepareMobModel(entity, ctx.limbSwing, ctx.limbSwingAmount, ctx.ageInTicks)

        let renderType = model.renderType(new ResourceLocation('kubejs:textures/models/curios/focus_bag.png'))
        CuriosRenderer.followBodyRotations(entity, model)
        let vertexBuilder = renderTypeBuffer.getBuffer(renderType)

        // model.renderToBuffer(matrixStack, vertexBuilder, ctx.light, NO_OVERLAY, 1, 1, 1, 1)
        model.head.render(matrixStack, vertexBuilder, ctx.light, NO_OVERLAY, 1, 1, 1, 1)
        model.body.render(matrixStack, vertexBuilder, ctx.light, NO_OVERLAY, 1, 1, 1, 1)
    })
})



