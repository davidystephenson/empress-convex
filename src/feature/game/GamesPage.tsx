import { api } from "../../../convex/_generated/api"
import { useArchedQuery } from "../arched/useArchedQuery"
import LayoutHeader from "../layout/LayoutHeader"
import { LongRowmanceRobe } from "robes"
import GameCells from "./GameCells"
import { useState } from "react"
import { Heading, HStack } from "@chakra-ui/react"
import AuthController from "../auth/AuthController"
import CreateGame from "./CreateGame"

export default function GamesPage() {
  const gamesQuery = useArchedQuery({ args: {}, query: api.getGames.default })
  const [query, setQuery] = useState<string>()
  if (gamesQuery.isPending) {
    return <LayoutHeader loading />
  }
  if (gamesQuery.isError) {
    return (
      <>
        <LayoutHeader />
        <>???</>
      </>
    )
  }
  function handleFilter(props: { query?: string }) {
    setQuery(props.query)
  }
  const filteredGames = query == null
    ? gamesQuery.data.games
    : gamesQuery.data.games?.filter(game => {
      if (query == null) return true
      return game.name.toLowerCase().includes(query.toLowerCase())
    })
  return (
    <AuthController user={gamesQuery.data.auth}>
      <LayoutHeader />
      <HStack>
        <Heading>Games</Heading>
        <CreateGame />
      </HStack>
      <LongRowmanceRobe
        Cells={GameCells}
        columns={['Name', '']}
        data={filteredGames ?? []}
        onSearch={handleFilter}
      />
    </AuthController>
  )
}