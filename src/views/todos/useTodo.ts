import { todoStore } from '@/store/pinia/todoStore'
import { storeToRefs } from 'pinia'

const useTodo = () => {
  const store = todoStore()
  const create = (content: string) => {
    console.log('useTodo create')
    store.pushItem(content)
  }
  const remove = (uuid: string) => store.pullItem(uuid)
  const finish = (uuid: string) => store.updateItem(uuid)
  return {
    list: storeToRefs(store).itemlist,
    create,
    remove,
    finish
  }
}
export { useTodo }
