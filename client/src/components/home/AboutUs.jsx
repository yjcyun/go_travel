import React from 'react'
import styled from 'styled-components'
import Title from '../utils/Title'

const AboutUs = () => {
  return (
    <AboutUsWrapper className='body-container extra-margin'>
      <div className='about-text'>
        <Title title='About Us' />
        <h3>We are Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aliquid magni.</h3>
        <p>Our team Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dignissimos neque quis, tempore aliquam expedita unde similique libero et totam ipsum praesentium necessitatibus, facilis provident ducimus quas! Aliquam, odit cupiditate. Dolores, dignissimos neque quis, tempore aliquam expedita unde similique libero et totam ipsum praesentium necessitatibus, facilis provident ducimus quas! Aliquam, odit cupiditate.</p>
        <p>Read more <span>&#8594;</span></p>
      </div>
      <div className='about-image'>
        <img src='/tours/tour-1-4.jpg' alt='background-1' />
      </div>
    </AboutUsWrapper>
  )
}

const AboutUsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
  grid-gap: 2rem;

  .about-text h3 {
    margin: 2rem 0;
    font-weight: 500;
  }

  .about-text p:last-child{
    margin: 1rem 0;
    font-weight: 500;
    color: var(--accent-clr);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    grid-gap: 5rem;

    .about-text {
      padding-right: 3rem;
    }
  }
`

export default AboutUs
