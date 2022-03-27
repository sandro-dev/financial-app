import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: -4rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;

  width: 70rem;
  margin: 0 auto;

`;

export const Box = styled.div`
  padding: 2rem;
  background: var(--white);
  border-radius: 0.25rem;
  
  header {
    display: flex;
    justify-content: space-between;
  }
  
  strong {
    display: block;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2rem;
  }

  :last-child {
    background: var(--green);
    color: var(--white);
  }

`;