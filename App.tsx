import { GluestackUIProvider, Text, Box, Center, Image, VStack, ScrollView } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import Swiper from "react-native-swiper";
import { Dimensions } from "react-native";  //폰의 넓이만큼
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import MySwiper from "./components/MySwiper";
import React from "react";
import CardList from "./CardList";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <ScrollView pt={30} width='100%' height='100%' bg='$backgroundDark900'>
          <Center width='100%' height={330}>
            <MySwiper />
          </Center>
          <VStack bg='$backgroundDark900'>
            <CardList/>
          </VStack>
        </ScrollView>
      </GluestackUIProvider>
    </QueryClientProvider >
  );
}
