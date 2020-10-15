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
  padding: 8px 20px;
  min-height: 70px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 4px #999999;
  animation: ${goUp} 1s;

  div {
    max-width: 700px;
    margin-bottom: 5px;

    > div {
      display: flex;
      align-items: flex-start;

      button {
        border: none;
        background: transparent;
        margin-left: 10px;

        svg {
          font-size: 20px;
        }
      }
    }

    h4 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #999999;
    }
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    svg {
      margin-left: 10px;
    }
  }
`;

export const Span = styled.span`
  color: #999999;
`;
