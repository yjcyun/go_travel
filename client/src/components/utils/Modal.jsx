import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { TiWarningOutline } from 'react-icons/ti'

const Modal = ({ title, content, actions, onDismiss}) => {
  return ReactDOM.createPortal(
    <ModalOverlay
      onClick={onDismiss}
    >
      <ModalBody onClick={e => e.stopPropagation()}>
        <ModalTitle>
          <TiWarningOutline /> {title}
        </ModalTitle>
        <ModalContent>
          {content}
        </ModalContent>
        <ModalActions>
          {actions}
        </ModalActions>
      </ModalBody>
    </ModalOverlay>,
    document.getElementById('modal')
  )
}

const ModalOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0,0,0,0.7);
  left: 0;
  top: 0;
`;

const ModalBody = styled.div`
  position: absolute;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalTitle = styled.h3`
  padding-bottom: 0.5rem;
  background-color: var(--light-bg-color);
  padding: 1rem;
`;

const ModalContent = styled.p`
  text-align: center;
  padding: 3rem 0;
`;

const ModalActions = styled.div`
  text-align: right;
  background-color: var(--light-bg-color);
  padding: 1rem;
`;

export default Modal