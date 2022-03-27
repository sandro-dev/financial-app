import styled from "styled-components";

export const Container = styled.div`
  display: flex;

`;
export const Content = styled.div`
  width: 70rem;
  margin: 2rem auto;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      padding: 1rem 2rem;
      font-weight: 400;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      background: var(--white);
      padding: 1rem 2rem;
      border: 0;
      color: var(--text-body);
      margin: 1rem;            

      &:first-child {
        color: var(--text-title);
        font-weight: 500;
        border-top-left-radius: 0.75rem;
        border-bottom-left-radius: 0.75rem;
      }


      &:last-child {
        border-top-right-radius: 0.75rem;
        border-bottom-right-radius: 0.75rem;
      }
      
    }

    td.credit {
      color: var(--green);
    }

    td.debit {
      color: var(--red);
    }

  }

`;
