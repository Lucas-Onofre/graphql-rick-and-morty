import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { CharacterList } from "./components/CharacterList";

export const App = () => {
  return (
    <>
      <GlobalStyle />

      <Header />
      <CharacterList />
    </>
  );
};

App.displayName = "App";
