import styled from "styled-components"

export const FormWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding: ${props => props.auth ? '0 1rem' : '2rem'};

  h2 {
    margin: 1.5rem 0;
  }

  @media (min-width: 996px) {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
    padding: ${props => props.auth ? '0 1rem' : '5rem'};
  }
`

export const ButtonWrapper = styled.div`
  display: ${props => props.auth ? 'inline-block' : 'block'};
  margin: 2rem 0;
`

export const Button = styled.button`
  cursor: pointer;
  padding: 0.8rem;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--accent-clr);
  margin: 1rem 0;
  background-color: ${props => props.dark ? 'var(--accent-clr)' : 'transparent'};
  color: ${props => props.dark ? '#fff' : '000'};
  text-transform: uppercase;
`

export const Hr = styled.div`
  height: 1px;
  width: 100%;
  background-color: silver;
`

export const AuthHr = styled.div`
  height: 1px;
  width: 80%;
  margin: 0.2rem auto;
  background-color: silver;
  position: relative;

  span {
    position: absolute;
    left: calc(50% - 1.5rem);
    top: -0.8rem;
    background-color: #fff;
    padding: 0 1rem;
    font-size: 0.9rem;
  }
`

export const ProfilePageWrapper = styled.div`
  padding: 5rem 1rem;
  background: #f4f4f4;
`

export const ProfileBox = styled.div`
  max-width: 1170px;
  margin: auto;
  display: flex;
`

export const TourFormWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;

  @media (min-width: 996px) {
    width: 100%;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 2.5rem;
`

export const Input = styled.input`
  border: ${props => props.error ? '1px solid tomato' : 'var(--border)'};
  border-radius: 5px;
  padding: 0.7rem 1.5rem;
  background-color:  transparent;
  display: block;
  width: 100%;
  position: relative;

  &[type=password] {
    letter-spacing: 0.2rem;
  }
`

export const Textarea = styled.textarea`
  border: ${props => props.error ? '1px solid tomato' : 'var(--border)'};
  border-radius: 5px;
  padding: 0.7rem 1.5rem;
  background-color:  transparent;
  display: block;
  width: 100%;
  position: relative;
`
export const Label = styled.label`
  position: absolute;
  left: 1.3rem;
  top: -0.9rem;
  padding: 0 0.5rem;
  background:  ${props => props.white ? '#fff' : 'var(--background-clr)'};
  z-index:3;
`

export const Error = styled.span`
  color: tomato;
  font-size: 0.8rem;
  position: absolute;
`

export const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 2rem;  
  padding: 3rem 1rem;

  @media(min-width:768px) {
    padding: 5rem 1rem;
  }
`

export const BackButton = styled.div`
  margin-bottom: 2rem;

  a{
    color: var(--accent-clr);
  }
`