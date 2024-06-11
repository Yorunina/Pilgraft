function MoodStoneAttribute() {
    /**@type {Map<string,MoodStage>} */
    this.moodStageMap = new Map()
    this.moodStageMap.set('peace', new MoodStage(-1, 100, 'peace'))
    this.moodStageMap.set('tension', new MoodStage(101, 200, 'tension'))
    this.moodStageMap.set('panic', new MoodStage(201, -1, 'panic'))
    return this
}

MoodStoneAttribute.prototype = {
    /**
     * @param {MoodStage} moodStage 
     * @returns {MoodStoneAttribute}
     */
    setMoodStage: function (moodStage) {
        this.moodStageMap.set(moodStage.moodKey, moodStage)
        return this
    },
    /**
     * @param {String} moodKey 
     * @returns {MoodStage}
     */
    getMoodStage: function (moodKey) {
        return this.moodStageMap.get(moodKey)
    },
    /**
     * @param {Internal.ServerPlayer} player 
     * @returns {Internal.List<MoodStage>}
     */
    getPlayerCurStage: function (player) {
        let moodDegree = player.persistentData.getInt('moodDegree')
        this.moodStageMap.forEach((value) => {
            if ((moodDegree <= value.upperBound || value.upperBound < 0) && (moodDegree >= value.lowerBound || value.upperBound < 0)) {
                return value
            }
        })
        return value
    }
}


/**
 * 设置心境阶段的上下界值，取值范围上下界均包含，判定小数点向下取整，[Floor(lowerBound), Floor(upperBound)]。
 * 
 * 如果数值小于0，代表忽视该设置，即无上界/无下界
 * @param {Number} lowerBound 
 * @param {Number} upperBound 
 * @param {String} moodKey 
 * @returns 
 */
function MoodStage(lowerBound, upperBound, moodKey) {
    this.lowerBound = lowerBound
    this.upperBound = upperBound
    this.moodKey = moodKey
    return this
}

/**
 * @type {Map<String, MoodStoneAttribute>}
 */
const MoodStoneAttributeMap = {
    'kubejs:lava_mood_stone': new MoodStoneAttribute()
    .setMoodStage(new MoodStage(-1, 100, 'peace'))
    .setMoodStage(new MoodStage(101, 200, 'anger'))
    .setMoodStage(new MoodStage(201, -1, 'rage')),

    'kubejs:faith_mood_stone': new MoodStoneAttribute()
    .setMoodStage(new MoodStage(-1, 100, 'peace'))
    .setMoodStage(new MoodStage(101, 200, 'anger'))
    .setMoodStage(new MoodStage(201, -1, '')),

    'default': new MoodStoneAttribute()
    .setMoodStage(new MoodStage(-1, 100, 'peace'))
    .setMoodStage(new MoodStage(101, 200, 'tension'))
    .setMoodStage(new MoodStage(201, -1, 'panic'))
}

global.MoodStoneAttributeMap = MoodStoneAttributeMap