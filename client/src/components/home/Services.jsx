import React from 'react'
import styled from 'styled-components'
import { services } from '../../constants/services'
import Title from '../utils/Title'

// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const Services = () => {
  return (
    <ServicesWrapper className='body-container extra-margin'>
      <Title title='Our Services' />
      <div className='icons'>
        {services.map(service => (
          <EachService key={service.alt}>
            <img src={service.src} alt={service.alt} />
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
            <div className='blob'></div>
          </EachService>
        ))}
      </div>
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.section`
  .icons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 5rem auto;
  }
`

const EachService = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 1rem;
  
  img {
    width: 5rem;
    margin-bottom: 2rem;
  }

  h4 {
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .blob {
    position: absolute;
    width: 5rem;
    left: 5rem;
    height: 4rem;
    background-color: var(--accent-light);
    opacity: 0.2;
    border-radius: 45%;
    z-index:-1;
  }
`
export default Services
