import { createContext, useReducer } from "react"

export const CardContext = createContext()

const initialState = {
  cards: [],
  loading: false,
  error: null,
}

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null }
    case "FETCH_SUCCESS":
      return { ...state, loading: false, cards: action.payload }
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export function CardProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  )
}