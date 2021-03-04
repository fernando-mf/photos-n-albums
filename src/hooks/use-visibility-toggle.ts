import { useCallback, useState } from 'react'

export function useVisibilityToggle() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = useCallback(() => {
    setIsVisible(prevState => !prevState)
  }, [])

  return [isVisible, toggleVisibility] as [
    typeof isVisible,
    typeof toggleVisibility,
  ]
}
