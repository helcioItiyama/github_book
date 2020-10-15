import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsPeopleCircle } from 'react-icons/bs';
import { RiGitRepositoryFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <AiFillGithub color="#fff" />
        <h1>Github Book</h1>
      </Link>

      <div>
        <Link to="/savedprofiles">
          <BsPeopleCircle />
          Devs
        </Link>
        <Link to="/savedrepositories">
          <RiGitRepositoryFill />
          Repositórios
        </Link>
      </div>
    </Container>
  );
};

export default Header;
