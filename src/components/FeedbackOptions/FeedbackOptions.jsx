import PropTypes from 'prop-types';
import { FeedbackList, FeedbackItem, FeedbackButton } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
{
    return (
        <FeedbackList >
            {options.map(option => (
                <FeedbackItem key={option}>
                    <FeedbackButton
                        type="button"
                        name={option}
                        onClick={onLeaveFeedback}
                    >
                        {option}
                    </FeedbackButton>
                </FeedbackItem>))
            }
        </FeedbackList>   
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions