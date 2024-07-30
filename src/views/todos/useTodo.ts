/*
 * @Author: liut
 * @Date: 2024-07-26 22:33:41
 * @LastEditors: liut
 * @LastEditTime: 2024-07-27 21:54:02
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import { todoStore } from '@/store/todoStore'
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
