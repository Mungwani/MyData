import Swiper from "react-native-swiper";
import { useQuery } from "@tanstack/react-query";
import { Webtoon } from "../types";
import React from "react";
import LargeView from "./Card/LargeView";

interface WebtoonResponse{
  webtoons: Webtoon[];
}

const fetchWebtoons = async () => {
  const res = await fetch('https://korea-webtoon-api.herokuapp.com'); //await 확장자: 함수를 기다려서 api를 호출해서 완료될때까지 기다리겠다.
  return res.json();
};

export default function MySwiper() {
  const { data } = useQuery<WebtoonResponse>({
    queryKey: ['korea-webtoon-api.herokuapp.com'],
    queryFn: fetchWebtoons,
  });

  return (
    <Swiper>
      {data
        ? data.webtoons.map((webtoon) => 
          <LargeView webtoon={webtoon}/>
        )
        : []}
    </Swiper>
  );
}