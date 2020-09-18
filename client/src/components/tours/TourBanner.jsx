import React from 'react'
import { connect } from 'react-redux';
import { processPayment } from '../../redux/actions/checkoutAction';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components';
import history from '../../history';

const stripePromise = loadStripe('pk_test_51HRLnVLvko24kY0Nr99KNbtMFmDxl640uBpsdgKwEVgZXb7Evf0kVOo3RZrWdXCmyYPZziPE3S5HeyExG2eAPooL00Z62Uw8nQ');

const TourBanner = ({ id, duration, processPayment, isSignedIn }) => {

  const handlePayment = async () => {
    if (!isSignedIn) {
      history.push('/login')
    } else {
      processPayment(id, stripePromise);
    }
  }

  return (
    <Elements stripe={stripePromise}>
      <BannerWrapper>
        <BannerText>
          <h2>What are you waiting for? </h2>
          <p>{duration} Days. 1 Adventure. Infinite memories. Make it yours today!</p>
        </BannerText>

        <BannerButton onClick={handlePayment}>
          {!isSignedIn
            ? <button>Login to Book Tour Now</button>
            : <button>Book Tour Now</button>
          }
        </BannerButton>
      </BannerWrapper>
    </Elements>
  )
}

const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  background: var(--accent-clr);
  border-radius: 1rem;
  width: 80%;
  margin: 0 auto 5rem;

  @media (max-width: 996px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  @media (max-width: 768px){
    width: 100%;
  }
`

const BannerText = styled.div`
  color: white;

  h2 {
    font-size: 2.5rem;

    @media (max-width: 1100px) {
      font-size: 2rem;
  }
  }
`

const BannerButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  button {
    text-transform: uppercase;
    padding: 1rem 2rem;
    border-radius: 2rem;
    background-color: #fff;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 996px) {
    justify-content: center;
    margin-top: 2rem;
  }
`

export default connect(null, { processPayment })(TourBanner)