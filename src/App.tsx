import { Container, Stack } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { RobesProvider } from "robes";
import LayoutHeader from "./feature/layout/LayoutHeader";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

export default function App() {
  return (
    <BrowserRouter>
      <RobesProvider>
        <ConvexAuthProvider client={convex}>
          <Container pt='10px'>
            <Stack>
              <LayoutHeader />
            </Stack>
          </Container>
        </ConvexAuthProvider>
      </RobesProvider>
    </BrowserRouter>
  )
}