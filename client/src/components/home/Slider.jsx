import { useState } from 'react';

import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

import { InfoButton } from '../../styles/universal/Button.styled';
import {
  Container,
  Wrapper,
  Arrow,
  WrapperSlide,
  Slide,
  ImgContainer,
  Image,
  InfoContainer,
  InfoWrapper,
  Title,
  Text,
} from '../../styles/home/Slider.styled';

import { sliderItems } from '../../data';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'right') {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Arrow direction="left" onClick={() => handleClick('left')}>
          <KeyboardArrowLeftOutlinedIcon />
        </Arrow>
        <WrapperSlide slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer bg={item.bgc}>
                <InfoWrapper>
                  <Title>{item.title}</Title>
                  <Text>{item.text}</Text>
                  <InfoButton>SHOW NOW</InfoButton>
                </InfoWrapper>
              </InfoContainer>
            </Slide>
          ))}
        </WrapperSlide>
        <Arrow direction="right" onClick={() => handleClick('right')}>
          <KeyboardArrowRightOutlinedIcon />
        </Arrow>
      </Wrapper>
    </Container>
  );
};

export default Slider;
