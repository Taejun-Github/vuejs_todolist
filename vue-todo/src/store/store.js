import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); //뷰 플러그인을 사용한다.

const storage = {
    fetch() {
        const arr = [];
        // console.log('created');
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
};

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    }
});