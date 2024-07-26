import { ref } from 'vue'

export function useHiddle() {
  const bool = ref<boolean>(true)
  const change = () => {
    console.log(bool.value)
    bool.value = !bool.value
  }
  return { visible: bool.value, onChangeVisible: change }
}
