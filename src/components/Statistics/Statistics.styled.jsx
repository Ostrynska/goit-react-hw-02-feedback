import styled from "styled-components"

export const StatisticList = styled.ul` 
    margin: auto;
    margin-top: ${p => p.theme.space[2]}px;
    padding-top: 30px;
    padding-right: 64px;
    padding-left: 64px;
    padding-bottom: 30px;
    background-color: ${p => p.theme.colors.primary};
    box-shadow: ${p => p.theme.shadows.accent};
    border: none;
    width: 300px;
    display: ${p => p.theme.display.grid};
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
`

export const StatisticItem = styled.li`
    font-weight: ${p => p.theme.fontWeights.bold};
    :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
   }
`

export const StatisticValue = styled.span`
    display: ${p => p.theme.display.flex};
    justify-content: center;
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.background};
`