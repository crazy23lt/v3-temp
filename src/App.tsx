/*
 * @Author: liut
 * @Date: 2024-07-26 22:33:41
 * @LastEditors: liut
 * @LastEditTime: 2024-07-27 21:53:02
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */

import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

const App = defineComponent({
  setup() {
    return () => <RouterView />
  }
})
export { App }
