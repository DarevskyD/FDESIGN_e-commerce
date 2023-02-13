import SearchIcon from '@mui/icons-material/Search';

import { Container } from '../../styles/universal/Container.styled';
import { Wrapper, SearchContainer, Input } from '../../styles/home/Search.styled';

const Search = () => {
  return (
    <Container padding="10px 0">
      <Wrapper>
        <SearchContainer>
          <SearchIcon sx={{ fontSize: '30px' }} />
          <Input placeholder="Search..." />
        </SearchContainer>
      </Wrapper>
    </Container>
  );
};

export default Search;
