import styled from 'styled-components'

export const Heading = styled.h1`
  color: pink;
  font-size: 50px;
`
export const Button = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  cursor: pointer;
 
  color: #ffffff;
  border-radius:5px;
  color: ${props => props.color}
  border-radius: 4px;
  border: 2px solid #0070c1;
  outline: ${props => (props.outline ? 'black' : 'orange')}
  background-color: ${props => props.bgColor};
`
