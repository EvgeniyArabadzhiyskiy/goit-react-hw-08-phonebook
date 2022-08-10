import { Box } from 'components/Box/Box';
import Section from 'components/Section/Section';
import { SectionText, SectionTitle } from 'pages/HomePage/HomePage.styled';

const About = () => {
  return (
    <Section textAlign="center">
      <Box bg="#9c4b4bb1">
        <SectionTitle>YOU MADE THE RIGHT CHOICE</SectionTitle>
        <SectionText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quisquam
          dolore quos sint possimus, similique ipsum adipisci magnam autem!
          Ipsum, dicta reprehenderit ut labore minus nihil sit fugit assumenda
          dolorem repellat autem eum ratione ducimus blanditiis distinctio,
          similique nesciunt recusandae libero quam accusamus est at! Sint dicta
          rerum aliquid minus voluptas expedita eaque autem architecto est
          voluptates, natus modi voluptatum!
        </SectionText>
      </Box>
    </Section>
  );
};

export default About;
