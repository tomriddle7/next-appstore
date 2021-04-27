import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { faClipboard, faRocket, faLayerGroup, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Head = styled.header`
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  padding-inline-start: 0px;
`;

const Item = styled.li<{ current: boolean }>`
  width: 25vw;
  height: 50px;
  text-align: center;
  color: ${props => (props.current ? "#0b84fe" : "ffffff")};
  transition: color 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  const router = useRouter();
  
  return (
    <Head>
      <List>
        <Item current={router.pathname === '/'}>
          <Link href='/'><a><FontAwesomeIcon icon={faClipboard} />Home</a></Link>
        </Item>
        <Item current={router.pathname === '/app'}>
          <Link href='/app'><a><FontAwesomeIcon icon={faLayerGroup} />App</a></Link>
        </Item>
        <Item current={router.pathname === '/game'}>
          <Link href='/game'><a><FontAwesomeIcon icon={faRocket} />Game</a></Link>
        </Item>
        <Item current={router.pathname === '/search'}>
          <Link href='/search'><a><FontAwesomeIcon icon={faSearch} />Search</a></Link>
        </Item>
      </List>
    </Head>
  );
}

export default Header