import { GluestackUIProvider, Text, Box, Center, Image, VStack } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import Swiper from "react-native-swiper";
import { Dimensions } from "react-native";  //폰의 넓이
import { Webtoon } from "../../types";
import React from "react";

interface LargeViewProp {
    webtoon: Webtoon;
}

export default function LargeView({ webtoon }: LargeViewProp) {

    return (
        <Swiper>


            <VStack
                width={Dimensions.get('window').width}
                height='100%'
                justifyContent="flex-end"
                alignItems="center"
                pl={30}
                pb={45}
            >

                <Image
                    position='absolute'
                    alt='webtoon'
                    size='full'
                    source={{
                        uri: webtoon.img,
                    }}
                />


                <Text size='xl' color='white' fontWeight='$bold'
                textShadowColor='black' 
                textShadowOffset={{width:2, height:2}} //외곽선 위치 radius - 두께
                textShadowRadius={3}>
                     {webtoon.title} </Text>
                <Text size='md' color='white' fontWeight='$bold'> {webtoon.author}</Text>
            </VStack>

        </Swiper>

    );
}
