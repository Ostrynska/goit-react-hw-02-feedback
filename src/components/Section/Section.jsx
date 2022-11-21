import PropTypes from 'prop-types';
import { SectionTitle, SectionFeedback } from "./Section.styled";

const Section = ({ title,  children}) =>
{
    return (
        <SectionFeedback>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </SectionFeedback>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section