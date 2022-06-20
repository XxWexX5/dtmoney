import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  thead {
    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
  }

  tbody {
    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
        border-top-left-radius: 0.3rem;
        border-bottom-left-radius: 0.3rem;
      }
      &:last-child {
        border-bottom-right-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
