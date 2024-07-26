import { defineComponent, ref } from 'vue'
import { VCol, VContainer, VForm, VRow, VSheet, VTextField } from 'vuetify/components'
const LoginView = defineComponent({
  setup() {
    const bool = ref(false)
    const onChange = () => {
      bool.value = !bool.value
    }
    return () => (
      <VContainer fluid={true}>
        <VRow>
          <VCol cols={7} class="d-flex subtitle-2">
            <span>liut</span>
          </VCol>
          <VCol cols={5}>
            <VSheet rounded={144}>
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
          </VCol>
        </VRow>
      </VContainer>
    )
  }
})
export default LoginView
