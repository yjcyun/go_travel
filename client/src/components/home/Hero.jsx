import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../nav/Header'

const Hero = () => {
  return (
    <HeroWrapper>
      <Header home />
      <Content className='body-container'>
        <h1>Start your adventure</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, est!</p>
        <Link to='/tours'><button>Explore</button></Link>
      </Content>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  background:  
    linear-gradient(
      rgba(0,0,0,0.8), 
      rgba(0,0,0,0.7)
    ), url('/background-2.jpg');
  background-repeat: no-repeat;
  background-position: center;
  height: calc(100vh - 3rem);

  @media(min-width: 768px) {
    height: calc(100vh - 3rem);
  }
`

const Content = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  height: calc(80vh - 5rem);
  color: #fff;
  text-align: center;
  
  h1{
    text-transform: uppercase;
    font-size: 2.5rem;
    line-height: 1;
    margin: 1rem auto;
  }

  p{
    font-size: 0.9rem;
    width: 80%;
    margin: 0 auto;
  }

  a {
    margin-top: 4rem;
  }

  button {
    padding: 0.7rem 2rem;
    cursor: pointer;
    background-color: var(--accent-clr);
    font-size: 1rem;
    border: none;
    color: #fff;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4rem;
    }

    p{
      font-size: 1.1rem;
    }

    button {
      padding: 1rem 3rem;
      font-size: 1.4rem;
    }
  }
`

export default Hero
