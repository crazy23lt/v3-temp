import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export interface itemsIPorps {
  uuid: string
  content: string
  completed: boolean
}
export const todoStore = defineStore(
  'todo',
  () => {
    const items = ref<itemsIPorps[]>([])
    const itemlist = computed<itemsIPorps[]>(() => items.value)
    const pushItem = (content: string) => {
      console.log('todoStore pushItem')
      const uuid = uuidv4()
      const newTarget = { uuid, content, completed: false }
      items.value.push(newTarget)
    }
    const pullItem = (uuid: string) => {
      const idx = items.value.findIndex((item) => item.uuid === uuid)
      if (idx !== -1) {
        items.value.splice(idx, 1)
      }
    }
    const updateItem = (uuid: string) => {
      const idx = items.value.findIndex((item) => item.uuid === uuid)
      if (idx !== -1) {
        items.value[idx].completed = true
      }
    }

    return { items, itemlist, pushItem, pullItem, updateItem }
  },
  {
    persist: {
      debug: process.env.NODE_ENV !== 'production'
    }
  }
)
