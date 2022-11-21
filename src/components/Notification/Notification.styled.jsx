import styled from 'styled-components'

export const Notifications = styled.p`
    text-align: center;
    margin: auto;
    margin-top: ${p => p.theme.space[2]}px;
    padding: ${p => p.theme.space[6]}px;
    background-color: ${p => p.theme.colors.primary};
    box-shadow: ${p => p.theme.shadows.accent};
    border: none;
    width: 300px;
    display: ${p => p.theme.display.flex};
    align-items: center;
    justify-content: center;
`
