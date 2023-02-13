import { Title } from '../../styles/home/Announcement.styled';
import { Container } from '../../styles/universal/Container.styled';
import { theme } from '../../styles/Theme';

const Announcement = () => {
  return (
    <Container bg={theme.colors.primary} padding="10px 0" zindex="3" position="relative">
      <Title>Super Deal! Free shipping on Orders Over $100</Title>
    </Container>
  );
};

export default Announcement;
