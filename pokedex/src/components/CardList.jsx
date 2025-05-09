import { useContext } from "react"
import { CardContext } from "../contexts/CardContext"

export function CardList() {
  const { state } = useContext(CardContext)

  if (state.loading) return <p>Carregando...</p>
  if (state.error) return <p>Erro: {state.error}</p>

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
      {state.cards.map((card) => (
        <div key={card.id} style={{ textAlign: "center", width: "150px" }}>
          <img src={card.images.small} alt={card.name} style={{ width: "100%" }} />
          <p>{card.name}</p>
        </div>
      ))}
    </div>
  )
}