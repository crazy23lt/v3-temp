import { defineComponent, ref } from 'vue'
import { handleKeyUp } from '@/utils'
import { useTodo } from './useTodo'
export const TodoView = defineComponent({
  setup() {
    const { list, remove, create, finish } = useTodo()
    const inputVal = ref<string>('')
    const onChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      inputVal.value = target.value
    }
    const keyUpEnter = handleKeyUp('Enter', () => {
      console.log('keyUpEnter')
      create(inputVal.value)
    })
    return () => (
      <section>
        <header>
          <input
            type="text"
            autofocus
            autocomplete="off"
            placeholder="What needs to be done?"
            value={inputVal.value}
            onChange={onChange}
            onKeyup={keyUpEnter}
          />
        </header>
        <ul>
          {list.value.map((item) => (
            <li key={item.uuid}>
              <span>
                {item.content}:{item.completed ? 'true' : 'false'}
              </span>
              <button onClick={() => remove(item.uuid)}>del</button>
              <button onClick={() => finish(item.uuid)}>finish</button>
            </li>
          ))}
        </ul>
      </section>
    )
  }
})
