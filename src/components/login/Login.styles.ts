import styled from 'styled-components'

const Form = styled.div`
  padding: 50px 120px;
  box-shadow: 5px 5px 10px;
  border-radius: 10px;
`

const Header = styled.h1`
  margin-top: 0;
  font-size: 2em;
  font-weight: bold;
`

const Label = styled.label`
  font-weight: 500;
  font-size: 1em;
  display: flex;
  align-items: center;
  padding: 0 5px;
  margin-top: 15px;
`

const Input = styled.input.attrs((props: { type: string }) => ({
  type: props.type,
  size: 30,
}))`
  margin: 10px 0;
  height: 25px;
  font-size: 15px;
`

const Submit = styled.button`
  border: 1px solid black;
  border-radius: 3px;
  display: block;
  background-color: #000000;
  color: white;
  margin-top: 10px;
  padding: 2px 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #00000096;
  }
`

export const LoginStyles = {
  Form,
  Header,
  Label,
  Input,
  Submit,
}
