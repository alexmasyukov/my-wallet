import styled, { css } from 'styled-components'

export const Container = styled.div`
  grid-area: CT;

  padding: 25px;
  height: calc(100vh - 70px);
  overflow-y: scroll;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};

    ::-webkit-scrollbar {
      width: 14px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.tetrionary};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${theme.colors.secondary};
    }
  `}
`
