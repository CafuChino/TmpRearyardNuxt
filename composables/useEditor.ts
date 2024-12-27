import { Editor, EditorContent, type EditorOptions } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import type { ShallowRef } from 'vue'

const provideKey = Symbol('_ry_editor_provide')

export interface EditorProvideState {
  editor: ShallowRef<Editor | null>
  options: Partial<EditorOptions>
}

export const useProvideEditor = (options?: Partial<EditorOptions>) => {
  const editor = shallowRef<Editor | null>(null)

  const defaultOptions: Partial<EditorOptions> = {
    content: '',
    extensions: [StarterKit],
  }

  onMounted(() => {
    editor.value = new Editor({
      ...defaultOptions,
      ...options ? options : {},
    })
  })

  provide<EditorProvideState>(provideKey, {
    editor,
    options: {
      ...defaultOptions,
      ...options ? options : {},
    },
  })

  return {
    editor,
  }
}

export const useEditor = () => {
  const editor = inject<EditorProvideState>(provideKey)

  if (!editor) {
    throw new Error('useEditor() is called without provider.')
  }

  return editor
}
