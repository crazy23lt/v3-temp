/*
 * @Author: liut
 * @Date: 2024-07-27 22:34:20
 * @LastEditors: liut
 * @LastEditTime: 2024-07-27 22:35:21
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import { defineComponent } from 'vue'

const NotFoundView = defineComponent({
  setup(props, ctx) {
    return () => <>NotFound</>
  }
})
export default NotFoundView
