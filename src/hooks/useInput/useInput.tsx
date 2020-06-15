import { useState } from "react"

interface useInputProps {
  initialValue: React.ReactNode
}

const useInput: React.FC<useInputProps> = initialValue => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value)
      },
    },
  }
}

export default useInput
