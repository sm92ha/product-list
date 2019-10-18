import styled from "styled-components";

export const CardMain = styled.div`
  width: 350px;
  border: 0.5px solid gray;
  border-radius: 5px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  :hover {
    transform: scale(1.03, 1.03);
    transition: transform 0.3s;
  }
`;

export const Image = styled.img`
  margin-top: 10px;
  width: 300px;
  max-height: 200px;
`;

export const ProductName = styled.div`
  margin-top: 10px;
  font-size: 16pt;
  font-weight: 800;
`;

export const ProductDesc = styled.div`
  margin: 10px;
`;

export const ProductPrice = styled.div`
  align-self: flex-end;
  margin: 10px;
`;

export const Availability = styled.div`
  margin: 10px;
  color: ${props => (props.availability ? "black" : "red")};
`;
