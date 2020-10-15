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

export const Display = styled.div`
  > div {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 8px;
    border-radius: 10px;
    margin-bottom: 16px;
    box-shadow: 2px 2px 4px #999999;
    animation: ${goUp} 1s;

    > div {
      flex: 1;

      h3 {
        max-width: 115px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
      }
    }

    button {
      border: none;
      background: transparent;

      > svg {
        font-size: 18px;
      }
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    a {
      border: none;
      background: transparent;
      display: flex;
      align-items: center;
      margin-left: 16px;
      font-size: 12px;

      svg {
        margin-left: 4px;
      }
    }
  }

  span {
    color: #999999;
  }

  @media (min-width: 430px) {
    > div {
      padding: 8px 10px;

      > div {
        h3 {
          max-width: 220px;
          font-size: 16px;
        }
      }

      button {
        > svg {
          font-size: 20px;
        }
      }

      img {
        width: 50px;
        height: 50px;
        margin-right: 15px;
      }

      a {
        margin-left: 16px;
        font-size: 16px;

        svg {
          margin-left: 8px;
        }
      }
    }
  }

  @media (min-width: 604px) {
    > div {
      padding: 8px 15px;

      > div {
        h3 {
          font-size: 18px;
        }
      }

      img {
        width: 50px;
        height: 50px;
        margin-right: 20px;
      }

      a {
        margin-left: 30px;

        svg {
          margin-left: 10px;
        }
      }
    }
  }

  @media (min-width: 760px) {
    > div {
      padding: 8px 20px;

      button {
        > svg {
          font-size: 25px;
        }
      }

      img {
        width: 60px;
        height: 60px;
        margin-right: 40px;
      }

      a {
        margin-left: 40px;
        font-size: 18px;
      }
    }
  }
`;

export const Span = styled.span`
  color: #999999;
`;
