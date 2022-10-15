import Vue from 'vue'
import Vuex from 'vuex'
import memberLevel from './modules/memberLevel.js'
import memberLevelCredential from './modules/memberLevelCredential'

//use(Vuex)中间件之后才能在vue上面创建store实例
Vue.use(Vuex)

// 导出store
export default new Vuex.Store({
    // actions,
    // mutations,
    // state,
    modules:{
        memberLevel,
        memberLevelCredential
    }
})