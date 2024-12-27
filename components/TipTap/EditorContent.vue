<template>
  <EditorContent :editor="editor" />
</template>

<script lang="ts" setup>
import {

  EditorContent,

} from '@tiptap/vue-3'

const { editor } = useEditor()
</script>

<style>

</style>
