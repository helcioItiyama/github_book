import styled from 'styled-components';

export const Container = styled.header`
  background: #023e8a;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 8px #000000;

  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

    svg {
      font-size: 40px;
    }

    h1 {
      color: #fff;
      margin-left: 4px;
      font-size: 20px;
    }
  }

  div {
    display: flex;
    align-items: flex-end;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
      text-decoration: none;
      transition: color 0.8s;
      font-size: 14px;

      &:hover {
        color: #219ebc;
      }

      svg {
        margin-bottom: 5px;
        font-size: 20px;
      }
      & + a {
        margin-left: 10px;
      }
    }
  }

  @media (min-width: 372px) {
    div {
      a {
        & + a {
          margin-left: 20px;
        }
      }
    }
  }

  @media (min-width: 427px) {
    div {
      a {
        font-size: 16px;

        & + a {
          margin-left: 30px;
        }
      }
    }
  }

  @media (min-width: 764px) {
    padding: 20px 40px;

    > a {
      flex-direction: row;

      h1 {
        margin-left: 10px;
        font-size: 30px;
      }
    }
    div {
      a {
        & + a {
          margin-left: 40px;
        }
      }
    }
  }

  @media (min-width: 850px) {
    padding: 20px 60px;

    div {
      a {
        svg {
          font-size: 25px;
        }

        & + a {
          margin-left: 40px;
        }
      }
    }
  }
`;
