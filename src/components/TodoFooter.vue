<template>
  <div class="clearAllContainer" >
    <span class="clearAllBtn" @click="showClearModal">Clear All</span>
    <div class="doneleft">
      할일 {{doneLeft}}개 남음!
    </div>
    <div class="pageContainer">
      <span class="allBtn" @click="pageToAll">
        <i v-if='nowPage==undefined' class="fas fa-check"></i>ALL
      </span>
      <span class="unfinishedBtn" @click="pageToUndone" >
        <i v-if='nowPage==false' class="fas fa-check"></i>UNFINISHED
      </span>
      <span class="finishedBtn" @click="pageToDone">
        <i v-if='nowPage==true' class="fas fa-check"></i>FINISHED
      </span>
    </div>

    <ClearAlertModal v-if="showClearAlertModal" @close="showClearAlertModal = false">
      <h3 slot="header">경고</h3>
      <span slot="content">정말 삭제하겠습니까?</span>
      <div slot="footer">
        <span class="realCloseBtn"  @click="clearTodo">네</span>
        <span class="noCloseBtn" @click="showClearAlertModal = false">아니요</span>
      </div>
    </ClearAlertModal>
  </div>



</template>

<script>

import ClearAlertModal from './common/ClearAlertModal.vue'
import { mapGetters } from 'vuex'

export default {
  props : ['propsDate'],
  data(){
    return{
      showClearAlertModal:false,
      nowPage: undefined
    }

  },
  
  methods: {
    showClearModal(){
      this.showClearAlertModal=!this.showClearAlertModal;
    },
    clearTodo() {
      this.$store.commit('clearAll');
      this.showClearAlertModal=!this.showClearAlertModal;
    },
    pageToAll(){
      this.$emit('pageToAll')
      this.nowPage=undefined
    },
    pageToUndone(){
      this.$emit('pageToUndone')
      this.nowPage=false
    },
    pageToDone(){
      this.$emit('pageToDone')
      this.nowPage=true
    }
  },
  
  computed: {
    doneLeft: function() {
      
      let undone = []
      if (this.todoList !== undefined ) {
        undone = this.todoList.filter(todo=> todo.done === false & todo.todoDate==this.propsDate);
      }
      return undone.length
    },
    ...mapGetters({
      'todoList':'getTodoList'
    })
  },


  components: {
    ClearAlertModal:ClearAlertModal

  }
}
</script>

<style scoped>

  .clearAllContainer {
    /* position: fixed; */
    bottom:0;
    width:100%;
    background-color: #F6F6F8;

    height: 130px;
    line-height: 40px;
    border-radius: 5px;
    margin-top: 0;
    float:none;
    
  }
  .pageContainer{

    height: 40px;
    line-height:40px;
    margin-top:20px;
    width:auto;
    
  }

  .clearAllBtn {
    width: 8.5rem;
    color: #e20303;
    float:none;
  }
  .allBtn{
    color: rgb(102, 103, 171);
    /* width: 100px; */
    float:left;
  }
  .unfinishedBtn{
    color: rgb(102, 103, 171);
    /* width: 100px; */
    float:auto;
  }
  .finishedBtn{
    color: rgb(102, 103, 171);
    width: 90px;
    float:right;
  }


  
  .realCloseBtn{
    width: 7.5rem;
    height: 40px;
    line-height: 40px;
    color: rgb(102, 103, 171);
    background-color:white;
    border-radius: 5px;
    margin-right: 0;
    float:left;
    border-style: solid;
  }
  .noCloseBtn{
    width: 7.5rem;
    height: 40px;
    line-height: 40px;
    color: rgb(102, 103, 171);
    background-color:white;
    border-radius: 5px;
    margin-right: 0;
    float:right;
    border-style: solid;
  }
  .doneleft{
    height: 30px;
    line-height: 30px;
    bottom:0;
    margin-bottom:0;
    margin-top:0;
    padding-bottom:0;
  }

    
</style>
