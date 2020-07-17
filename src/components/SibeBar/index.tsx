import React from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SibeBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
      </SearchWrapper>
      <SearchIcon />

      <Body>
        <p>
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia officia
          incidunt atque maiores sint ipsum iusto quo tenetur! Non, praesentium!
          Ullam veniam ipsam ab nam fugiat laborum vel dicta commodi?`.repeat(
            20
          )}
          ;
        </p>
      </Body>
    </Container>
  );
};

export default SibeBar;
