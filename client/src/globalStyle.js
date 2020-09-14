import styled from "styled-components"

export const FormWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding: ${props => props.auth ? '0 1rem' : '5rem'};

  h2 {
    margin: 1.5rem 0;
  }

  @media (min-width: 996px) {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
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
    background-color: var(--background-clr);
    padding: 0 1rem;
    font-size: 0.9rem;
  }
`

export const ProfilePageWrapper = styled.div`
  margin: 5rem 0;
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