<script setup lang="ts">
import { Repl,ReplStore} from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'
import '@vue/repl/style.css'
const store = new  ReplStore()

store.setImportMap({
  imports: {
    zax: '../node_modules/zax/dist/index.js',
  },
})


</script>

<template>
  <div style="height:100vh">
    
    <Repl :editor="Monaco" :store="store" :showCompileOutput="true" />
    
  </div>
</template>

<script setup lang="ts">

</script>
