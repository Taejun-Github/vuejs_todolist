<template>
  <div>
      <ul>
        <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem">
          <i class="checkBtn fas fa-check" v-bind:class="{checkBtnComplete: todoItem.completed}" 
          v-on:click="toggleComplete(todoItem, index)"></i>
          <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span> 
          <!-- <button v-on:click="removeTodo">delete</button> -->
          <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
            <i class="fas fa-trash-alt"></i>
          </span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {

  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(todoItem, index) {
      todoItem.completed = !todoItem.completed;
      //localStorage에서 데이터를 갱신하는 과정
      console.log(index);
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      //아이템을 제거하고 새로 추가한다. 업데이트하는 api가 없기 때문에 업데이트를 하기 위해서 이렇게 한다.
    }
  },
  created: function() {
    // console.log('created');
    if(localStorage.length > 0) {
      for(let i=0; i<localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          let item = JSON.parse(localStorage.getItem(localStorage.key(i))); //value를 가져오게 된다. 다시 가져올 때는 자바스크립트 객체로 변환
          this.todoItems.push(item);
        }
      }
    }
  }
}
</script>

<style scoped>
ul{
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li{
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
  color:#de4343;
}
</style>