import { GluestackUIProvider, Text, Box, Center, Image } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import Swiper from "react-native-swiper";
import { Dimensions } from "react-native";  //폰의 넓이
import { useQuery } from "@tanstack/react-query";

const fetchWebtoons = async () => {
  const res = await fetch('https://korea-webtoon-api.herokuapp.com'); //await 확장자: 함수를 기다려서 api를 호출해서 완료될때까지 기다리겠다.
  return res.json();
};

export default function MySwiper() {
  const { data } = useQuery({
    queryKey: ['korea-webtoon-api.herokuapp.com'],
    queryFn: fetchWebtoons,
  });

  return (
    <Swiper dotColor='gray' activeDotColor="green">
      {data
        ? data.webtoons.map((item: any) => (
          <Center key={item} bg='$green200' width={Dimensions.get('window').width} height='100%'>
            <Image
              alt='webtoon'
              size='2xl'
              source={{
                uri: item.img,
              }}
            />
            <Text
            paddingTop={30}
            fontSize={25}
            fontWeight="bold">
              {item.title}
            </Text>
            <Text
            paddingTop={10}>
              
              {item.author}
            </Text>


          </Center>
        ))
        : []}
    </Swiper>
  );
}
