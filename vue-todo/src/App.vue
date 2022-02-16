<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
        <!--v-bind:내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 데이터 속성-->
        <TodoFooter></TodoFooter>
    </div>
</template>

<script>
    import TodoHeader from './components/TodoHeader.vue'
    import TodoList from './components/TodoList.vue'
    import TodoInput from './components/TodoInput.vue'
    import TodoFooter from './components/TodoFooter.vue'

    export default {
        data() {
            return {
                todoItems: []
            }
        },
        methods: {
            
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