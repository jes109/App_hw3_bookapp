import React from 'react';
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { SafeAreaProvider} from "react-native-safe-area-context";

import Navigation from './src/Navigation';

const App = () => {
  return (
   <SafeAreaProvider>
      <GluestackUIProvider  config={config}>
        <Navigation/> 
      </GluestackUIProvider>
   </SafeAreaProvider>
  );
}

export default App;