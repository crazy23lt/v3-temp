/*
 * @Author: liut
 * @Date: 2024-07-26 22:35:39
 * @LastEditors: liut
 * @LastEditTime: 2024-07-27 21:52:41
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */

import { defineComponent, ref } from 'vue'
import { VContainer, VForm, VSheet, VTextField } from 'vuetify/components'
const LoginView = defineComponent({
  setup() {
    const bool = ref(false)
    const onChange = () => {
      bool.value = !bool.value
    }
    return () => (
      <VContainer class={'d-flex justify-center'}>
        <VSheet width={450} rounded={144}>
          <VForm>
            <VTextField
              prependInnerIcon={'fas fa-mobile-screen'}
              placeholder="Enter your mobile"
              variant="outlined"
            ></VTextField>
            <VTextField
              theme="cusDarkTheme"
              type={bool.value ? 'password' : 'text'}
              prependInnerIcon={'fas fa-lock'}
              appendInnerIcon={bool.value ? 'far fa-eye' : 'far fa-eye-slash'}
              placeholder="Enter your password"
              variant="outlined"
              onClick:appendInner={onChange}
            ></VTextField>
          </VForm>
        </VSheet>
      </VContainer>
    )
  }
})
export default LoginView
