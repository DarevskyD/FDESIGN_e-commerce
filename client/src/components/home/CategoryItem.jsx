import { ItemContainer, Image, Info, Title } from '../../styles/home/CategoryItem.styled';
import { Button } from '../../styles/universal/Button.styled';

const CategoryItem = ({ item }) => {
  const { img, title } = item;

  return (
    <ItemContainer>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </ItemContainer>
  );
};

export default CategoryItem;
