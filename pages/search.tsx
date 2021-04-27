import React, { useState } from 'react'
import useSWR, { mutate } from 'swr'
import styled from 'styled-components'
import Loader from '../components/Loader'
import Header from '../components/Header'
import Room from '../components/Room'

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  border-radius: 16px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  background-color: #2a2a2d;
  padding: 10px;
`;

const SearchDiv = styled.div`
  width: 34px;
  display: flex;
  flex-direction: row;
`;

const SearchLens = styled.span`
  color: #808084;
  fill: currentColor;
  line-height: 24px;
  position: relative;
  height: 34px;
  width: 34px;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
  color: #808084;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 600;
`;

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerm1, setSearchTerm1] = useState('');
  const [appResults, setAppResults] = useState([]);

  const { data, error } = useSWR(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${searchTerm1}&country=kr&entity=software`, url => {
    return fetch(url).then(res => res.json())
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchTerm.trim().length > 0) {
      setLoading(true);
      setSearchTerm1(searchTerm);
      mutate(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${searchTerm1}&country=kr&entity=software`);
      setAppResults(data.results);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <SearchDiv>
          <SearchLens>
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
              </path>
            </svg>
          </SearchLens>
        </SearchDiv>
        <div>
          <Input
            placeholder="게임, 앱, 스토리 등"
            value={searchTerm}
            onChange={e => { setSearchTerm(e.target.value) }}
          />
        </div>
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {appResults && appResults.length > 0 && (
            <>
              <Title>검색결과</Title>
              {appResults.map(p => (
                <Room key={parseInt(p.trackId)} id={p.trackId} isGame={p.primaryGenreName === "Games" ? true : false} name={p.trackName} genresName={p.primaryGenreName} url={p.trackViewUrl} artworkUrl100={p.artworkUrl100} />
              ))}
            </>
          )}
        </>
      )}
      <Header />
    </Container>
  )
}
export default Search