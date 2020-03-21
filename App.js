import * as React from "react";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import AppContainer from "./app/navigation/AppContainer";
import useLinking from "./app/navigation/useLinking";

console.ignoredYellowBox = [];
console.disableYellowBox = true;

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "Montserrat-Regular": require("./app/assets/fonts/Montserrat-Regular.ttf"),
          "Montserrat-Medium": require("./app/assets/fonts/Montserrat-Medium.ttf"),
          "Montserrat-Bold": require("./app/assets/fonts/Montserrat-Bold.ttf")
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return <AppContainer />;
  }
}
