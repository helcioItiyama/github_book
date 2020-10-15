import styled, { keyframes, css } from 'styled-components';

interface ContainerProps {
  position: boolean;
  searchError: boolean;
  typeError: boolean;
}

const positionIn = keyframes`
  from {
    margin-top: 0;
  }
  to {
    margin-top: 200px;
  }
`;

const positionOut = keyframes`
  from {
    margin-top: 200px;
  }
  to {
    margin-top: 0;
  }
`;

export const Container = styled.section<ContainerProps>`
  padding: 20px;
  width: 100%;
  height: 90vh;

  h2 {
    margin-top: 20px;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    div {
      display: flex;
      flex-direction: column;

      label {
        position: relative;
        margin-bottom: 20px;

        svg {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 10px;
        }

        input {
          width: 100%;
          height: 36px;
          padding: 0 40px;
          border: ${props => props.searchError && '3px solid #c83349'};

          &::placeholder {
            color: #999999;
          }
        }

        select {
          width: 100%;
          height: 36px;
          padding: 0 10px;
          font-size: 16px;
          border: ${props => props.typeError && '3px solid #c83349'};
        }
      }

      > span {
        display: block;
        color: #c83349;
      }
    }

    button {
      width: 100%;
      height: 36px;
      background: #023e8a;
      color: #fff;
      transition: background 0.8s;

      &:hover {
        background: #219ebc;
      }
    }
  }

  @media (min-width: 528px) {
    padding: 20px 40px;
  }

  @media (min-width: 766px) {
    padding: 40px 80px;

    h2 {
      font-size: 26px;
    }
  }

  @media (min-width: 870px) {
    form {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      div {
        label {
          margin-bottom: 4px;
          input {
            width: 350px;
          }

          select {
            width: 200px;
          }
        }
      }
      button {
        width: 100px;
      }
    }
  }

  @media (min-width: 880px) {
    padding: 40px 100px;

    h2 {
      margin-bottom: 50px;
      font-size: 30px;
    }

    form {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      div {
        label {
          input {
            width: 350px;
          }

          select {
            width: 200px;
          }
        }
      }
      button {
        width: 100px;
      }
    }
  }

  @media (min-width: 1020px) {
    padding: 40px 120px;

    h2 {
      margin-top: 200px;
      animation: ${positionIn} 1s;
      ${props =>
        props.position &&
        css`
          margin-top: 0;
          animation: ${positionOut} 1s;
        `}
    }

    form {
      div {
        label {
          input {
            width: 400px;
          }
        }
      }
    }
  }

  @media (min-width: 1120px) {
    padding: 40px 120px;

    form {
      div {
        label {
          input {
            width: 500px;
          }
        }
      }
    }
  }

  @media (min-width: 1220px) {
    padding: 40px 160px;
  }

  @media (min-width: 1300px) {
    padding: 40px 180px;
  }
`;
