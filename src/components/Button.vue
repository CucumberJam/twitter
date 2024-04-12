<script setup>
import Button from "primevue/button";

defineProps({
  label: String,
  action: Function
})
</script>

<template>
  <div :class="{btnAdd: true, desktopBtn: true}">
    <Button class="btn" :label="label" @click="action"/>
  </div>
</template>

<style scoped>
.btnAdd {
  color: white;
  display: flex;
  justify-content: end;
  margin: 0 20px;
}
.desktopBtn{
  display: flex;
}

@media screen and (max-width: 466px){
  .btnAdd button{
    font-size: 12px;
    padding: 8px 6px;
  }
}
@media screen and (max-width: 696px){
  .desktopBtn{
    display: none;
  }
  .mobBtn{
    display: flex;
    margin: 0;
    align-self: start;
  }
  .mobBtn button{
    font-size: 14px;
    padding: 15px;
  }
  .total-head span{
    margin: 0;
  }

}
@media screen and (max-width: 540px){
  .mobBtn button{
    padding: 10px;
  }
}
@media screen and (max-width: 466px){
  .btnAdd button{
    font-size: 12px;
    padding: 8px 6px;
  }
}
</style>