<template lang="html">
  <transition name="modal">
    <div class="modal-mask" @keyup.esc="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container" style="height: 120px">
          <div class="modal-header" style="margin-top:0">
            <slot name="header">
              <!--  -->
            </slot>
          </div>

          <div class="modal-content" style="height:50px;margin-top:30px">
            <slot name="content">
            </slot>
          </div>

          <div class="modal-footer" >
            <slot name="footer">
              <!--  -->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scope>
.closeModalBtn {
  color: rgb(102, 103, 171);
  border-style: solid;
  width: 7.5rem;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  float:right;
  text-align: center;
  font-family: 'NanumSquare';
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;

}

.modal-header h3 {

  color: rgb(102, 103, 171);
}
.modal-content {
  vertical-align: middle;
  float:none;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
