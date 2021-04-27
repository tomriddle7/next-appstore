import styled from "styled-components";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  position: absolute;
  top:0;right:0;bottom:0;left:0;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-flex;
  -webkit-align-item: center;
  -webkit-justify-content: center;
`;

const Loader = () => {
  return (
    <Container>
    <FontAwesomeIcon icon={faSpinner} size="6x" pulse />
  </Container>
  );
}

export default Loader