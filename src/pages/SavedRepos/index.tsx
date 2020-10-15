import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import ReposDisplay from '../../components/ReposDisplay';

import { Container } from './styles';

const SavedRepos: React.FC = () => {
  const { repos } = useSelector((state: ApplicationState) => state.repoReducer);

  return (
    <Container>
      <h2>Repositórios Salvos</h2>
      <ReposDisplay repos={repos} />
    </Container>
  );
};

export default SavedRepos;
