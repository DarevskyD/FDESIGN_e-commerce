import { SitebarContainer, OverlayWrapper } from '../../styles/home/Sitebar.styled';

const Sitebar = ({ toggle }) => {
  return (
    <OverlayWrapper openSitebar={toggle}>
      <SitebarContainer openSitebar={toggle}></SitebarContainer>;
    </OverlayWrapper>
  );
};

export default Sitebar;
