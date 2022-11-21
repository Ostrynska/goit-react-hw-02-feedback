import styled from 'styled-components'

export const FeedbackList = styled.ul`
    display: ${p => p.theme.display.flex};
    justify-content: center;
    margin-top: ${p => p.theme.space[5]}px;
`

export const FeedbackItem = styled.li`
    &:not(:first-child){
        margin-left: ${p => p.theme.space[5]}px;
    }
`
export const FeedbackButton = styled.button`
    display: ${p => p.theme.display.flex};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: ${p => p.theme.fontSizes[2]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    width: 100px;
    height: 40px;
    border: none;
    border-radius: ${p => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.secondary};
    box-shadow: ${p => p.theme.shadows.normal};
    color: ${p => p.theme.colors.primary};
    text-transform: uppercase;
    transition: ${p => p.theme.transition};
    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease-in-out 0s;
        background-color: ${p => p.theme.colors.accent};
        color: ${p => p.theme.colors.text};
        box-shadow: ${p => p.theme.shadows.accent};
    }
`