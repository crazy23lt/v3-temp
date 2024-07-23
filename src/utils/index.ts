export const handleKeyUp: (target: string, fn: Function) => (payload: KeyboardEvent) => void = (
  target,
  fn
) => {
  return function (this: HTMLElement, e: KeyboardEvent) {
    if (target === e.key) fn.call(this, e)
  }
}
