import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Container } from '../../styles/universal/Container.styled';
import {
  Wrapper,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from '../../styles/home/Newsletter.styled';
import { theme } from '../../styles/Theme';

const Newsletter = () => {
  return (
    <Container bg={theme.colors.lightBg}>
      <Wrapper>
        <Title>Newsletter</Title>
        <Description>Get timely updates for your favorite products</Description>
        <InputContainer>
          <Input placeholder="Send your mail" />
          <Button>
            <SendOutlinedIcon />
          </Button>
        </InputContainer>
      </Wrapper>
    </Container>
  );
};

export default Newsletter;
