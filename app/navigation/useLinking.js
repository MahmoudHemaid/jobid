import { useLinking } from "@react-navigation/native";
import { Linking } from "expo";
import { SCREEN_KEYS } from "../utilities/Constants";
export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl("/")],
    config: {
      Root: {
        path: "",
        screens: {
          GetStarted: SCREEN_KEYS.GET_STARTED
        }
      }
    }
  });
}
