import { theme } from '../../styles/Theme';

import { Container } from '../../styles/universal/Container.styled';
import { SignButton } from '../../styles/universal/Button.styled';

import {
  Wrapper,
  FormContainer,
  Title,
  Form,
  Input,  
  Link,
} from '../../styles/register/SignIn.styled';

const LogIn = () => {
  return (
    <Container bg={theme.colors.lightS}>
      <Wrapper>
        <Title>SIGN IN</Title>
        <FormContainer>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <SignButton>SIGN IN</SignButton>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT?</Link>
          </Form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default LogIn;
