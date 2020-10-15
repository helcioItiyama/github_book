import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import ProfileDisplay from '../../components/ProfileDisplay';

import { Container } from './styles';

const SavedDevs: React.FC = () => {
  const { devs } = useSelector((state: ApplicationState) => state.devReducer);

  return (
    <Container>
      <h2>Desenvolvedores Salvos</h2>
      <ProfileDisplay data={devs} />
    </Container>
  );
};

export default SavedDevs;
