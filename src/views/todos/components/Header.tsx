import { defineComponent, ref } from 'vue'
import { handleKeyUp } from '@/utils'
export const Header = defineComponent({
  setup() {
    const inputVal = ref<string>('')
    const onChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      inputVal.value = target.value
    }
    const keyUpEnter = handleKeyUp('Enter', () => {})
    return () => (
      <header>
        <h1>Todos</h1>
        <input
          type="text"
          placeholder="What needs to be done?"
          autofocus
          value={inputVal.value}
          onChange={onChange}
          onKeyup={keyUpEnter}
        />
      </header>
    )
  }
})
