import { Container, Stack } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RobesProvider } from 'robes'
import { ConvexAuthProvider } from '@convex-dev/auth/react'
import { ConvexReactClient } from 'convex/react'
import HomePage from './home/HomePage'
import GamesPage from './game/GamesPage'
import GamePage from './game/GamePage'
import LayoutNotFound from './layout/LayoutNotFound'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL)

export default function App () {
  return (
    <BrowserRouter>
      <RobesProvider>
        <ConvexAuthProvider client={convex}>
          <Container pt='10px'>
            <Stack>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/games' element={<GamesPage />} />
                <Route path='/game/:gameId' element={<GamePage />} />
                <Route path='*' element={<LayoutNotFound label='Page' />} />
              </Routes>
            </Stack>
          </Container>
        </ConvexAuthProvider>
      </RobesProvider>
    </BrowserRouter>
  )
}
