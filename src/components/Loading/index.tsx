import React from 'react';

import { Container, Circle, Shadow } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <Circle />
      <Circle />
      <Circle />
      <Shadow />
      <Shadow />
      <Shadow />
      <span>Carregando</span>
    </Container>
  );
};

export default Loading;
