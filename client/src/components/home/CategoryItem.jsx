import { Link } from 'react-router-dom';
import { ItemContainer, Image, Info, Title } from '../../styles/home/CategoryItem.styled';
import { Button } from '../../styles/universal/Button.styled';

const CategoryItem = ({ category }) => {
  const { img, title, categ } = category;  

  return (
    <ItemContainer>
      <Link to={`/products/${categ}`}>
        <Image src={img} />
        <Info>
          <Title>{title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </ItemContainer>
  );
};

export default CategoryItem;
