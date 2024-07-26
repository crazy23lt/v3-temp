import { defineComponent } from 'vue'
import { VSelect } from 'vuetify/components'

const OtherView = defineComponent({
  setup(props, ctx) {
    return () => (
      <VSelect
        label="Select"
        focused={true}
        active={true}
        items={['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']}
      ></VSelect>
    )
  }
})
export default OtherView
