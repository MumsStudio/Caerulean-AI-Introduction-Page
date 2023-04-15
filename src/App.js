import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: #3a7bd5;
  margin-bottom: 20px;
`;

const Subheader = styled.h2`
  font-size: 1.5rem;
  color: #4b4b4b;
  margin-bottom: 30px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #4b4b4b;
  max-width: 800px;
  text-align: center;
`;

const GetStartedButton = styled.button`
  background-color: #3a7bd5;
  color: white;
  font-size: 1.1rem;
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #285e8e;
  }
`;

function App() {
  return (
    <Container>
      <Header>Caerulean.ai</Header>
      <Subheader>The future of open machine learning platforms! </Subheader>
      <Description>
        We revolutionize the way you manage, develop, and deploy AI models by streamlining MLOps and machine learning version control. Our platform provides an intuitive interface and seamless integration with popular tools, making it easier than ever to collaborate on projects, track model changes, and optimize performance. Say goodbye to tedious manual processes and hello to faster innovation with Caerulean.ai, where cutting-edge technology meets simplicity and efficiency. Unleash your AI's full potential and join the Caerulean revolution today!
      </Description>
      <GetStartedButton onClick={() => alert('Get Started functionality not implemented yet.')}>
        Get Started
      </GetStartedButton>
    </Container>
  );
}

export default App;