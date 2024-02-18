import { GluestackUIProvider, Text, Box, Center, Image } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import Swiper from "react-native-swiper";
import { Dimensions } from "react-native";  //폰의 넓이만큼
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import MySwiper from "./components/MySwiper";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <GluestackUIProvider config={config}>
      <Center width='100%' height='100%'>
        <MySwiper/>
      </Center>
    </GluestackUIProvider>
    </QueryClientProvider>
  );
}
