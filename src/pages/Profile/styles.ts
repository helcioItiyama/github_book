import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 180px;

  section {
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      box-shadow: 0px 0px 8px #000;
      margin-right: 80px;
    }

    h3 {
      font-size: 30px;
      margin-bottom: 30px;
    }

    ul {
      list-style: none;
      display: flex;

      li {
        & + li {
          margin-left: 100px;
        }

        button {
          border: none;
          background: transparent;

          &:hover {
            color: #023e8a;
          }
        }

        strong {
          display: block;
          text-align: center;
          font-size: 24px;
        }

        span {
          display: block;
          font-size: 16px;
          margin-top: 4px;
        }
      }
    }
  }
`;
