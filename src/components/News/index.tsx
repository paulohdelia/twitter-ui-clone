import React from 'react';

import { Container } from './styles';

const News: React.FC = () => {
  return (
    <Container>
      <span>Tecnologia</span>
      <strong>
        O <a href="https://www.freecodecamp.org/">Free Code Camp</a> possui mais
        de 6000 cursos e 10 certificações, tudo por um total de R$00,00
      </strong>
    </Container>
  );
};

export default News;
