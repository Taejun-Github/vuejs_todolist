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
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = {
                completed: false,
                item: todoItem
            };
            localStorage.setItem(todoItem, JSON.stringify(obj)); //key와 value를 동일하게 저장한다. 그리고 객체를 문자열로 변환한다.
            state
                .todoItems
                .push(obj);
        },
        removeOneItem(state, payload) {
            //console.log(index);
            localStorage.removeItem(payload.todoItem.item);
            state
                .todoItems
                .splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            //localStorage에서 데이터를 갱신하는 과정
            console.log(payload);
            payload.todoItem.completed = !payload.todoItem.completed
            //console.log(todoItem.item);
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
            //아이템을 제거하고 새로 추가한다. 업데이트하는 api가 없기 때문에 업데이트를 하기 위해서 이렇게 한다.

        },
        clearAllItems() {
            localStorage.clear();
            this.todoItems = [];
            location.reload();
        }
    }
});