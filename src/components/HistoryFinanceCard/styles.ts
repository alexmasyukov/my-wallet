import styled from 'styled-components'

interface TagProps {
  color: string
}

export const Container = styled.div`
  background-color: ${props => props.theme.colors.tetrionary};
  list-style: none;
  border-radius: 7px;
  margin: 10px 0px;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-left: 10px;
  }

  > div span {
    font-size: 18px;
    font-weight: 500;
  }
`

export const Tag = styled.div<TagProps>`
  width: 10px;
  height: 60%;

  background-color: ${props => props.color};
  position: absolute;
  left: 0;
  && {
    padding-left: 0px;
  }
`
