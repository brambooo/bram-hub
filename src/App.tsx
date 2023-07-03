import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          // Mobile
          base: `"nav" "main"`,
          // Normal
          lg: `"nav nav" "aside main"`, // wider than 1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5} bg="blue">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="green">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
