<template>
  <BubbleMenu
    :editor="editor!"
    :tippy-options="{ duration: 100 }"
  >
    <ToggleGroup :default-value="['a']">
      <ToggleGroupItem value="a">
        <TextBoldIcon
          :size="14"
          :stroke-width="3"
        />
      </ToggleGroupItem>
      <ToggleGroupItem value="b">
        <TextBoldIcon
          :size="14"
          :stroke-width="3"
        />
      </ToggleGroupItem>
      <ToggleGroupItem value="c">
        <TextBoldIcon
          :size="14"
          :stroke-width="3"
        />
      </ToggleGroupItem>
    </ToggleGroup>
  </BubbleMenu>
</template>

<script lang="ts" setup>
import { TextBoldIcon } from 'hugeicons-vue'
import {
  BubbleMenu,
} from '@tiptap/vue-3'
import { ToggleGroupItem, ToggleGroup } from '@/components/ui/toggle-group/index'

const { editor } = useEditor()
</script>

<style>

</style>
