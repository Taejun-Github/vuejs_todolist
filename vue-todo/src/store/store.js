import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'


Vue.use(Vuex); //뷰 플러그인을 사용한다.



export const store = new Vuex.Store({
    modules: {
        todoApp: todoApp
    }
});