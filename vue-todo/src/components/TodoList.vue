<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem">
                <i
                    class="checkBtn fas fa-check"
                    v-bind:class="{checkBtnComplete: todoItem.completed}"
                    v-on:click="toggleComplete(todoItem, index)"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
                <!-- <button v-on:click="removeTodo">delete</button> -->
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
    export default {
        props: ['propsdata'],
        methods: {
            removeTodo (todoItem, index) {
                this.$emit('removeItem', todoItem, index);
            },
            toggleComplete (todoItem, index) {
                this.$emit('toggleItem', todoItem, index);
            }
        }
    }
</script>

<style scoped="scoped">
    ul {
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .checkBtnComplete {
        color: #b3adad;
    }
    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }

    /* 리스트 아이템 트랜지션 효과 */
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active,
    .list-leave-active {
        transition: all 1s;
    }
    /* .list-leave-active below version 2.1.8 */
    .list-enter,
    .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>