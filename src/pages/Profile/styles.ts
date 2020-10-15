import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;

  section {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      box-shadow: 0px 0px 8px #000;
      margin-right: 15px;
    }

    h3 {
      font-size: 14px;
      margin-bottom: 10px;
    }

    ul {
      list-style: none;
      display: flex;
      align-items: flex-start;

      li {
        & + li {
          margin-left: 8px;
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
          font-size: 16px;
        }

        span {
          display: block;
          font-size: 8px;
          margin-top: 4px;
        }
      }
    }
  }

  @media (min-width: 380px) {
    section {
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        box-shadow: 0px 0px 8px #000;
        margin-right: 20px;
      }

      h3 {
        font-size: 16px;
        margin-bottom: 15px;
      }

      ul {
        li {
          & + li {
            margin-left: 10px;
          }

          span {
            font-size: 10px;
          }
        }
      }
    }
  }

  @media (min-width: 426px) {
    section {
      img {
        margin-right: 30px;
      }

      h3 {
        font-size: 18px;
      }

      ul {
        li {
          & + li {
            margin-left: 10px;
          }

          strong {
            font-size: 16px;
          }

          span {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media (min-width: 528px) {
    padding: 20px 40px;

    section {
      img {
        width: 100px;
        height: 100px;
      }

      h3 {
        font-size: 22px;
        margin-bottom: 25px;
      }

      ul {
        li {
          & + li {
            margin-left: 20px;
          }

          strong {
            font-size: 18px;
          }
        }
      }
    }
  }

  @media (min-width: 766px) {
    padding: 40px 80px;

    section {
      margin-bottom: 50px;

      img {
        width: 120px;
        height: 120px;
        margin-right: 60px;
      }

      h3 {
        font-size: 30px;
      }

      ul {
        li {
          & + li {
            margin-left: 40px;
          }

          strong {
            font-size: 20px;
          }

          span {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media (min-width: 880px) {
    padding: 40px 100px;

    section {
      img {
        width: 130px;
        height: 130px;
      }

      ul {
        li {
          & + li {
            margin-left: 50px;
          }

          span {
            font-size: 16px;
          }
        }
      }
    }
  }

  @media (min-width: 1020px) {
    padding: 40px 120px;

    section {
      h3 {
        margin-bottom: 30px;
      }

      ul {
        li {
          & + li {
            margin-left: 80px;
          }

          strong {
            font-size: 24px;
          }
        }
      }
    }
  }

  @media (min-width: 1120px) {
    padding: 40px 120px;

    section {
      img {
        width: 150px;
        height: 150px;
        margin-right: 80px;
      }

      ul {
        li {
          & + li {
            margin-left: 100px;
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
