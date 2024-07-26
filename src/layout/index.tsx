import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { VAppBar, VLayout, VList, VListItem, VMain, VNavigationDrawer } from 'vuetify/components'

const LayoutView = defineComponent({
  setup(props, { slots }) {
    return () => (
      <VLayout class="rounded rounded-md">
        <VAppBar title="Application Bar"></VAppBar>
        <VNavigationDrawer>
          <VList>
            <VListItem title="Navigation drawer"></VListItem>
          </VList>
        </VNavigationDrawer>
        <VMain class="d-flex align-center justify-center" style={{ minHeight: 300 }}>
          <RouterView />
        </VMain>
      </VLayout>
    )
  }
})
export default LayoutView
