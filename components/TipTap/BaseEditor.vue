<template>
  <div>
    <template v-if="editor">
      <TipTapBubble />
    </template>
    <TipTapEditorContent />
  </div>
</template>

<script lang="ts" setup>
const { editor } = useEditor()
</script>

<style>

</style>
