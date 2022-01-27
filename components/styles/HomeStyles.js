import styled from 'styled-components';

const HomeStyles = styled.main`
  h1 {
    text-transform: uppercase;
    padding: 20px 0px;
    font-size: 40px;
  }
  .container {
    max-width: calc(375px - 60px);
    margin: 0 auto;
  }
  .header {
    margin-top: 10px;
  }
  .dogs {
    margin-top: 40px;
    div + div {
      margin-top: 30px;
    }
  }
`;

export default HomeStyles;
