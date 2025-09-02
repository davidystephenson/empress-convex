import { api } from "../../../convex/_generated/api"
import { useArchedQuery } from "../arched/useArchedQuery"
import LayoutHeader from "../layout/LayoutHeader"
import { ButtonRobe, ImpressedActorRobe, LongRowmanceRobe } from "robes"
import GameCells from "./GameCells"
import { useState } from "react"
import { HStack } from "@chakra-ui/react"
import useArchedMutation from "../arched/useArchedMutation"

export default function GamesPage() {
  const gamesQuery = useArchedQuery({ args: {}, query: api.getGames.default })
  const createGame = useArchedMutation({ label: 'Create Game', mutation: api.createGame.default })
  const [query, setQuery] = useState<string>()
  function handleFilter(props: { query?: string }) {
    setQuery(props.query)
  }
  const filteredGames = query == null
    ? gamesQuery.data?.games
    : gamesQuery.data?.games?.filter(game => {
      if (query == null) return true
      return game.name.toLowerCase().includes(query.toLowerCase())
    })
  const nameColumn = (
    <HStack>
      <span>Name</span>
      <ImpressedActorRobe size='xs' actor={createGame} input={{}}>Create Game</ImpressedActorRobe>
    </HStack>
  )
  return (
    <>
      <LayoutHeader loading={gamesQuery.loading} name={gamesQuery.data?.user?.name} />
      <LongRowmanceRobe
        Cells={GameCells}
        columns={[nameColumn, '']}
        data={filteredGames ?? []}
        onSearch={handleFilter}
      />
    </>
  )
}