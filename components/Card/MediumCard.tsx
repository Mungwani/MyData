import { GluestackUIProvider, Text, Box, Center, Image, VStack, HStack, Icon, StarIcon } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import Swiper from "react-native-swiper";
import { Dimensions } from "react-native";  //폰의 넓이
import { Webtoon } from "../../types";
import React from "react";


interface MediumCardProp {
    webtoon: Webtoon;
}

export default function MediumCard({ webtoon }: MediumCardProp) {

    return (
        <HStack pt={30} borderWidth='$1' borderBlockColor="$backgroundDark800">
            <Image
                size='xl'

                alt='webtoon'
                source={{
                    uri: webtoon.img,
                }}
            />

            <VStack justifyContent="center" pl='$5'>
                <Text size='lg' color='white' fontWeight='$bold'>
                    {webtoon.title}
                </Text>
                <Text size='sm' color='white'>
                    {webtoon.author}
                </Text>
                <HStack gap = '$1'>
                    <Icon pt='$5' size = 'xs' as={StarIcon} color='$yellow600' fill='$yellow300'></Icon>
                    <Text size='xs' color='white' >
                        {webtoon.fanCount}
                    </Text>
                </HStack>
            </VStack>

        </HStack>

    );
}
