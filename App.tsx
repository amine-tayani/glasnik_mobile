import AppContainer from "./src/components/app-container";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AppLoading from "expo-app-loading";
import MainStackNavigator from "./src/navigations/MainStackNavigator";

export default function App() {
  const [fontLoaded, setFontsLoaded] = useState(false);

  const client = new ApolloClient({
    uri: "https://glasnik-graphql-api.herokuapp.com/",
    cache: new InMemoryCache(),
    defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      inter: {
        uri: require("./assets/fonts/Inter.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (fontLoaded) {
    return (
      <ApolloProvider client={client}>
        <AppContainer>
          <MainStackNavigator />
        </AppContainer>
      </ApolloProvider>
    );
  } else {
    return <AppLoading />;
  }
}
