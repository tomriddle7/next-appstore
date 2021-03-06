import { useRouter } from 'next/router'
import useSWR from 'swr';
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  padding: 20px;
`;

const BackButton = styled("a")`
  cursor: pointer;
  background: #00000000;
  color: #0b84fe;
  text-align: center;
`;

const Summary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

const Icon = styled.div<{ bgUrl: string }>`
  background-image: url(${props => props.bgUrl});
  background-position: center;
  background-size: cover;
  width: 20vw;
  height: 20vw;
  border-radius: 22.37%;
`;

const Scope = styled.div<{ widthPer: string, pxmargin: string }>`
  width: ${props => props.widthPer}vw;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: ${props => props.pxmargin}px;
`;

const StoreButton = styled("a")`
  border-radius: 25px;
  background: #1c1c1e;
  padding: 10px;
  color: #0b84fe;
  text-align: center;
`;

const ScreenShotP = styled.div`
  display: flex;
  justify-content: space-between;
  align-itmes: flex-start;
  flex-direction: column;
  height: 46vw;
  flex-wrap: wrap;
  overflow: auto;
  margin: 10px;
  &:after {
    content: '';
    height: 0;
    border-bottom: 1px #808084 solid;
    left: 24px;
    right: 24px;
    position: absolute;
  }
`;

const ScreenShot = styled.img`
  display: inline;
  width: auto;
  height: 100%;
  margin: 0px 5px;
`;

const Explanation = styled.div`
  line-height: 1.5;
  word-break: break-all;
  &:after {
    content: '';
    height: 0;
    border-bottom: 1px #808084 solid;
    left: 24px;
    right: 24px;
    position: absolute;
  }
`;

const UpdateviewP = styled.div`
  &:after {
    content: '';
    height: 0;
    border-bottom: 1px #808084 solid;
    left: 24px;
    right: 24px;
    position: absolute;
  }
`;

const UpdateDate = styled.div`
  width:100%;
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  margin: 8px 0px;
`;

const UpdateDetail = styled.div`
  width:100%;
  line-height: 1.5;
  margin: 8px 0px;
`;

const OverviewP = styled.div`
  line-height: 1.5;
`;

const Overview = styled.div`
  width:100%;
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  margin: 8px 0px;
  &:after {
    content: '';
    height: 0;
    border-bottom: 1px #808084 solid;
    left: 24px;
    right: 24px;
    position: absolute;
  }
  &:last-child::after {
		border-bottom: 0px #808084 solid;
  }
`;

const View = styled.div<{ widthPer: string, align: string }>`
  width:${props => props.widthPer}%;
  text-align: ${props => props.align};
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
`;

const AppDetail = ({ results }) => {

  const router = useRouter();

  return (
    <Container>
      <BackButton onClick={() => router.back()}>????????????</BackButton>
      <Summary>
        <Scope widthPer={20} pxmargin={0}>
          <Icon bgUrl={results.artworkUrl100}></Icon>
        </Scope>
        <Scope widthPer={50} pxmargin={5}>
          <h1>{results.trackName}</h1>
          <h1>{results.artistName}</h1>
        </Scope>
        <Scope widthPer={30} pxmargin={0}>
          <StoreButton target="_blank" href={results.trackViewUrl}>
            {results.formattedPrice}
          </StoreButton>
          <h1>{results.trackContentRating}</h1>
        </Scope>

      </Summary>
      <ScreenShotP>
        {results.screenshotUrls.map((p, i) => (
          <ScreenShot key={i} src={p} />
        ))}
      </ScreenShotP>
      <Explanation>{results.description.split('\n').map((line: string, i: number) => {
        return (<span key={i}>{line}<br /></span>)
      })}</Explanation>
      <UpdateviewP>
        <Title>????????? ??????</Title>
        <UpdateDate>
          <View widthPer={50} align={"left"}>?????? {results.version}</View>
          <View widthPer={50} align={"right"}>{results.currentVersionReleaseDate.substr(0, 4)}??? {results.currentVersionReleaseDate.substr(5, 2)}??? {results.currentVersionReleaseDate.substr(8, 2)}???</View>
        </UpdateDate>
        <UpdateDetail>{results.releaseNotes.split('\n').map((line: string, i: number) => {
          return (<span key={i}>{line}<br /></span>)
        })}</UpdateDetail>
      </UpdateviewP>
      <OverviewP>
        <Title>??????</Title>
        <Overview>
          <View widthPer={25} align={"left"}>?????????</View>
          <View widthPer={75} align={"right"}>{results.sellerName}</View>
        </Overview>
        <Overview>
          <View widthPer={25} align={"left"}>??????</View>
          <View widthPer={75} align={"right"}>{(results.fileSizeBytes / 1024 / 1024).toFixed(1)}MB</View>
        </Overview>
        <Overview>
          <View widthPer={25} align={"left"}>????????????</View>
          <View widthPer={75} align={"right"}>{results.primaryGenreName}</View>
        </Overview>
        <Overview>
          <View widthPer={25} align={"left"}>??????</View>
          <View widthPer={75} align={"right"}>{results.languageCodesISO2A.join(' | ')}</View>
        </Overview>
        <Overview>
          <View widthPer={25} align={"left"}>?????? ??????</View>
          <View widthPer={75} align={"right"}>{results.contentAdvisoryRating}</View>
        </Overview>
      </OverviewP>
    </Container>
  )
}
export default AppDetail