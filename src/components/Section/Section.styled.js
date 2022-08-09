import styled from 'styled-components';

export const SectionWrap = styled.section`
  margin: 0 auto;
  padding: 0 16px;
  text-align: ${props => props.textAlign};

  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.2),
      rgba(47, 48, 58, 0.2)
    ),
    url(${p => p.svg});

  background-color: #b1aeae89;
  background-color: ${props => props.bg};
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.space[4]}px;
`;
