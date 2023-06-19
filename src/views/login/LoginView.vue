<script setup lang="ts">
import {test} from "../../request/index"
  const cccc = async () =>{
    const result = await test()
    console.log(result);
  }
  
</script>
<template>
  <div class="login">
    <el-button type="primary" plain @click="cccc">Login组件</el-button>
  </div>
</template>
<style scoped>
  
</style>