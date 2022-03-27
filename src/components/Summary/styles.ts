import styled from "styled-components";

export const Container = styled.section`
  margin-top: -4rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  
  max-width: 1120px;
  margin: 0 auto;
`;

export const Box = styled.div`
  padding: 2rem 4rem;
  background: var(--white);
  border-radius: 0.25rem;

  
  header {
    display: flex;
    justify-content: space-between;
  }
  
  strong {
    display: flex;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2rem;
  }

  :last-child {
    background: var(--green);
    color: var(--white);
  }

`;