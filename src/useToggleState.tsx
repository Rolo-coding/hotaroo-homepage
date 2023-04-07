import { useCallback, useState } from 'react'

const useToggleState = (initialValue: boolean): [boolean, () => void] => {
  const [state, setState] = useState(initialValue)

  const toggleState = useCallback(() => {
    setState(state => !state)
  }, [])

  return [state, toggleState]
}

export default useToggleState
