import React, { useState } from 'react'
import useSWR from 'swr';
import styled from 'styled-components'
import Loader from '../../components/Loader'
import Header from '../../components/Header'
import Room from '../../components/Room'
import ToggleSwitch from '../../components/ToggleSwitch'

const Title = styled.h3`
  font-size: 28px;
  font-weight: 600;
`;

const Index = () => {
  const { data: data1, error: error1 } = useSWR(`https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-free/all/25/explicit.json`, url => {
    return fetch(url).then(res => res.json())
  });
  const { data: data2, error: error2 } = useSWR(`https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-paid/all/25/explicit.json`, url => {
    return fetch(url).then(res => res.json())
  });

  const [isToggle, setIsToggle] = useState(false);

  return data1 && data2 ? (
    <>
      <ToggleSwitch
        id="daily"
        name="daily"
        small
        disabled={false}
        checked={isToggle}
        onChange={setIsToggle}
      />
      {data1 && data1.feed.results && data1.feed.results.length > 0 && !isToggle &&
        <>
          <Title>{data1.feed.title}</Title>
          {data1.feed.results.map(p => (
            <Room key={parseInt(p.id)} id={p.id} isGame={false} name={p.name} genresName={p.genres[0].name} url={p.url} artworkUrl100={p.artworkUrl100} />
          ))}
        </>}
      {data2 && data2.feed.results && data2.feed.results.length > 0 && isToggle &&
        <>
          <Title>{data2.feed.title}</Title>
          {data2.feed.results.map(p => (
            <Room key={parseInt(p.id)} id={p.id} isGame={false} name={p.name} genresName={p.genres[0].name} url={p.url} artworkUrl100={p.artworkUrl100} />
          ))}
        </>}
      <Header />
    </>
  ) : (
    <Loader />
  )
}
export default Index