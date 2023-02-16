import { Link } from 'react-router-dom';

import { theme } from '../../styles/Theme';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { Info, Container, Image, Icon } from '../../styles/home/ProductItem.styled';

const ProductItem = ({ product }) => {
  const { img, _id } = product;

  return (
    <Container>
      <Image src={img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${_id}`}>
            <SearchOutlinedIcon style={{ color: theme.colors.primary }} />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
