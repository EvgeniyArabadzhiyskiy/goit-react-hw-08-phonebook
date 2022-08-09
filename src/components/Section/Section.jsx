import PropTypes from 'prop-types';
import Flag from '../../images/img123.jpg';
import MySvg from '../../images/fon.svg';
import { SectionTitle, SectionWrap } from './Section.styled';
import Container from 'components/Container/Container';

const Section = ({ title, children, ...sectionProps }) => {
  return (
    <SectionWrap img={Flag} svg={MySvg} {...sectionProps}>
      <Container>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </Container>
    </SectionWrap>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
