import styled from 'styled-components';

const DogStyles = styled.div`
  display: block;
  height: 250px;
  width: 250px;
  border-radius: 10px;
  background: #c4c4c4;
  position: relative;
  .dog__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: none;
    border-radius: 10px;
  }
  .dog__name {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 65px;
    border-radius: 0 0 10px 10px;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;

export default function Dog() {
  return (
    <DogStyles>
      <div className="dog__img"></div>
      <div className="dog__name">
        <h2>Name</h2>
      </div>
    </DogStyles>
  );
}
