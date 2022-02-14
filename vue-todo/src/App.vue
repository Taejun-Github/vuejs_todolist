<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
        <TodoList
            v-bind:propsdata="todoItems"
            v-on:removeItem="removeOneItem"
            v-on:toggleItem="toggleOneItem"></TodoList>
        <!--v-bind:내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 데이터 속성-->
        <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
    </div>
</template>

<script>
    import TodoHeader from './components/TodoHeader.vue'
    import TodoList from './components/TodoList.vue'
    import TodoInput from './components/TodoInput.vue'
    import TodoFooter from './components/TodoFooter.vue'

    export default {
        data() {
            return {todoItems: []}
        },
        methods: {
            addOneItem(todoItem) { // this.$emit('addTodoItem', this.newTodoItem);에서 전달한 this.newTodoItem이 todoItem으로 들어간다.
                const obj = {
                    completed: false,
                    item: todoItem
                };
                localStorage.setItem(todoItem, JSON.stringify(obj)); //key와 value를 동일하게 저장한다. 그리고 객체를 문자열로 변환한다.
                this
                    .todoItems
                    .push(obj);
            },
            removeOneItem(todoItem, index) {
                localStorage.removeItem(todoItem.item);
                this
                    .todoItems
                    .splice(index, 1);
            },
            toggleOneItem(todoItem, index) {
                //localStorage에서 데이터를 갱신하는 과정
                this
                    .todoItems[index]
                    .completed = !this
                    .todoItems[index]
                    .completed;
                //console.log(todoItem.item);
                localStorage.removeItem(todoItem.item);
                localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
                //아이템을 제거하고 새로 추가한다. 업데이트하는 api가 없기 때문에 업데이트를 하기 위해서 이렇게 한다.
            },
            clearAllItems() {
                localStorage.clear();
                this.todoItems = [];
            }
        },

        created() {
            // console.log('created');
            if (localStorage.length > 0) {
                for (let i = 0; i < localStorage.length; i++) {
                    if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                        this
                            .todoItems
                            .push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    }
                }
            }
        },
        components: {
            TodoHeader,
            TodoList,
            TodoInput,
            TodoFooter
        }
    }
</script>

<style>
    body {
        text-align: center;
        background-color: #f6f6f6;
    }

    input {
        border-style: groove;
        width: 200px;
    }

    button {
        border-style: groove;
    }

    .shadow {
        box-shadow: 5px 10px 10px rgba(0, 0,0, 0.03);
    }
</style>