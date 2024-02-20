import { useQuery } from "@tanstack/react-query";
import { VStack } from "@gluestack-ui/themed"
import MediumCard from "./Card/MediumCard";
import { Webtoon } from "./types";
import React from "react";

interface WebtoonResponse{
  webtoons: Webtoon[];
}

const fetchWebtoons = async () => {
  const res = await fetch('https://korea-webtoon-api.herokuapp.com'); //await 확장자: 함수를 기다려서 api를 호출해서 완료될때까지 기다리겠다.
  return res.json();
};

export default function CardList() {
  const { data } = useQuery<WebtoonResponse>({
    queryKey: ['korea-webtoon-api.herokuapp.com'],
    queryFn: fetchWebtoons,
  });

  return (
    <VStack>
      {data
        ? data.webtoons.map((webtoon) => 
          <MediumCard webtoon={webtoon}/>
        )
        : []}
    </VStack>
  );
}