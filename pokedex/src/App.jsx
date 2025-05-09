import { useContext } from "react"
import { useForm } from "react-hook-form"
import { CardContext } from "./contexts/CardContext"
import { CardList } from "./components/CardList"

function App() {
  const { register, handleSubmit } = useForm()
  const { dispatch } = useContext(CardContext)

  const onSubmit = async (data) => {
    dispatch({ type: "FETCH_START" })
    try {
      const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${data.name}`)
      const json = await res.json()
      dispatch({ type: "FETCH_SUCCESS", payload: json.data })
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message })
    }
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Pokémon TCG Pokedex</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "1rem" }}>
        <input
          {...register("name", { required: true })}
          placeholder="Nome do Pokémon"
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Buscar
        </button>
      </form>
      <CardList />
    </div>
  )
}

export default App