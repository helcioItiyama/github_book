import styled, { keyframes } from 'styled-components';

const goUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const Repositories = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 8px;
  min-height: 70px;
  border-radius: 10px;
  margin-bottom: 16px;
  box-shadow: 2px 2px 4px #999999;
  animation: ${goUp} 1s;

  div {
    max-width: 150px;
    margin-bottom: 5px;

    > div {
      display: flex;
      align-items: flex-start;

      h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
      }

      button {
        border: none;
        background: transparent;
        margin-left: 10px;

        svg {
          font-size: 18px;
        }
      }
    }

    h4 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #999999;
      font-size: 12px;
    }
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 12px;

    svg {
      margin-left: 4px;
    }
  }

  @media (min-width: 430px) {
    padding: 8px 10px;

    div {
      > div {
        h3 {
          font-size: 16px;
        }

        button {
          svg {
            font-size: 20px;
          }
        }
      }

      h4 {
        font-size: 14px;
      }
    }

    a {
      font-size: 16px;

      svg {
        margin-left: 8px;
      }
    }
  }

  @media (min-width: 604px) {
    padding: 8px 15px;

    div {
      max-width: 300px;
      > div {
        h3 {
          font-size: 18px;
        }
      }

      h4 {
        font-size: 16px;
      }
    }

    a {
      svg {
        margin-left: 10px;
      }
    }
  }

  @media (min-width: 760px) {
    padding: 8px 20px;
    margin-bottom: 20px;

    div {
      max-width: 400px;

      > div {
        button {
          margin-left: 10px;

          svg {
            font-size: 25px;
          }
        }
      }
    }

    a {
      font-size: 18px;

      svg {
        margin-left: 10px;
      }
    }
  }

  @media (min-width: 1120px) {
    div {
      max-width: 700px;
    }
  }
`;

export const Span = styled.span`
  color: #999999;
`;
