import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1120px;
  margin: 0rem auto;
  padding: 2rem 1rem 10rem 1rem;

  img {
    width: 11rem;
  }
`;

export const Button = styled.button`
  background: var(--blue-light);
  color: var(--white);
  border-radius: 0.25rem;
  padding: 1rem 2rem;
  font-size: 1rem;

  transition: ease-in 0.2s;

  :hover {
    filter: brightness(0.9);
  }

`;