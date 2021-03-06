import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #000000;
  padding: 6px 0px;
  background-color: #000000;
  cursor: pointer;
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

const Scope60 = styled.div`
  width:60vw;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0px 10px;
`;

const Scope20 = styled.div`
  width:20vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const Image = styled.div<{ bgUrl: string }>`
  background-image: url(${props => props.bgUrl});
  background-position: center;
  background-size: cover;
  width: 20vw;
  height: 20vw;
  border-radius: 22.37%;
`;

const Button = styled.a`
  border-radius: 25px;
  background: #1c1c1e;
  padding: 10px;
  color: #0b84fe;
  text-align: center;
`;

const Name = styled.span`
  font-size: 14pt;
  color: #ffffff;
`;

const Genre = styled.span`
  font-size: 12pt;
  color: #808084;
`;

const Room = ({ id, isGame, name, genresName, url, artworkUrl100 }) => {
  return (
    <Link href={isGame ? `/game/detail?id=${id}` : `/app/detail?id=${id}`}>
      <Container>
        <Scope20>
          <Image bgUrl={artworkUrl100}></Image>
        </Scope20>
        <Scope60>
          <Name>{name}</Name>
          <Genre>{genresName}</Genre>
        </Scope60>
        <Scope20>
          <Button target="_blank" href={url}>받기</Button>
        </Scope20>
      </Container>
    </Link>
  );
}

export default Room