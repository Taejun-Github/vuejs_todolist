<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
            <!-- <button v-on:click="addTodo">add</button> -->
            <span class="addContainer" v-on:click="addTodo">
                <i class="fas fa-plus addBtn"></i>
            </span>

            <Modal v-if="showModal" @close="showModal = false">
                <!-- you can use custom content here to overwrite default content -->
                <h3 slot="header">
                    경고!
                    <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
                </h3>

                <div slot="body">
                    입력해야 합니다
                </div>
                <div slot="footer">
                    테스트
                </div>
            </Modal>
        </div>
    </template>

    <script>
        import Modal from './common/Modal.vue'

        export default {
            data: function () {
                return {newTodoItem: "", showModal: false}
            },
            methods: {
                addTodo: function () {
                    if (this.newTodoItem !== '') {
                        //저장하는 로직
                        this.$emit('addTodoItem', this.newTodoItem);
                        this.clearInput(); //값을 비워주는 함수를 분할해서 만든다.
                    } else {
                        //입력하려는 내용이 비어있을 때
                        this.showModal = !this.showModal;

                    }
                },
                clearInput: function () {
                    this.newTodoItem = '';
                }
            },
            components: {
                Modal: Modal
            }
        }
    </script>

    <style scoped="scoped">
        input:focus {
            outline: none;
        }
        .inputBox {
            background: white;
            height: 50px;
            line-height: 50px;
            border-radius: 5px;
        }
        .inputBox input {
            border-style: none;
            font-size: 0.9rem;
        }
        .addContainer {
            float: right;
            background: linear-gradient(to right, #6478FB, #8763FB);
            display: block;
            width: 3rem;
            border-radius: 0 5px 5px 0;
        }
        .addBtn {
            color: white;
            vertical-align: middle;
        }
        .closeModalBtn {
            color: #42b983;
        }
    </style>