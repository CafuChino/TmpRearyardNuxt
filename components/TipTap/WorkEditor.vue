<script setup lang="ts">
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'

const CustomDocument = Document.extend({
  content: 'heading block+',
})

const { editor } = useProvideEditor({
  editorProps: {
    attributes: {
      class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
    },
  },
  extensions: [
    CustomDocument,
    StarterKit.configure({
      document: false,
    }),
    Placeholder.configure({
      showOnlyCurrent: false,
      placeholder: ({ node }) => {
        if (node.type.name === 'heading') {
          return 'What’s the title?'
        }
        return 'Can you add some further context?'
      },
    }),
  ],
})

watch(editor, () => {
  if (editor.value) {
    editor.value.on('update', (e) => {
      console.log('editor updated', e);
      handleEditorUpdate()
    })
  }
})

const title = ref('')
const content = ref('')

const handleEditorUpdate = () => {
  const headingNode = editor.value?.$nodes('heading')?.[0]
  title.value = headingNode?.textContent || ''
  // contentNodes is an array of nodes excluding the first node which is the heading node
  const content = editor.value?.getHTML()
  console.log('content', content)
}
</script>

<template>
  <TipTapBaseEditor />
</template>

<style lang="scss">
@import "@/assets/scss/editor";
</style>
