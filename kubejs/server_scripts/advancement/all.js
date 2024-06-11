// priority: 1
// 删除所有其他类型的进度
AdvJSEvents.advancement(event => {
    event.remove({ mod: '!kubejs' })
})
