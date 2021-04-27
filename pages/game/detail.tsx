import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr';
import styled from 'styled-components'
import Loader from '../../components/Loader'
import Header from '../../components/Header'
import AppDetail from '../../components/AppDetail'

const Detail = () => {
  const router = useRouter();
  const query = router.query;

  const { data, error } = useSWR(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${query.id}&country=KR`, url => {
    return fetch(url).then(res => res.json())
  });

  return data && data.results && data.results.length > 0 ? (
    <>
      <Head>
        <title>{data.results[0].trackName} | Next-Store</title>
        <meta name="thumbnail" content={data.results[0].artworkUrl100}></meta>
      </Head>
      <AppDetail results={data.results[0]} />
      <Header />
    </>
  ) : (
    <Loader />
  )
}
export default Detail