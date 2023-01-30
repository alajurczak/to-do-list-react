import { StyledSection, Header, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent, optionalContent }) => (
    <StyledSection>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
            {optionalContent}
        </Header>
        {body}
    </StyledSection>
);

export default Section;