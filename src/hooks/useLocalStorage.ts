import { useEffect, useState } from "react"

// T makes it a generic type
// The initial value is either a type of T or a function that returns
// the type of T
// Basically, it gets the value from local storage
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key)
    // != null checks if it's in local storage
    if (jsonValue != null) return JSON.parse(jsonValue)

    // if our initial value is a function, then we need to invoke it as a function
    if (typeof initialValue === "function") {
      return (initialValue as () => T)()
    } else {
      return initialValue
    }
  })

// We need a useEffect that runs every time our key or our value changes 
// And we need to store that value back in local storage 
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue]
}