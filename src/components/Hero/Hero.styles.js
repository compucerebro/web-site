import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
`;

export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #02040A;
  padding: 6rem 2rem 4rem;
  text-align: center;
`;

export const HeroBgPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(30,144,255,0.09) 1px, transparent 1px);
  background-size: 28px 28px;
  z-index: 0;
`;

export const HeroBgImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 55%;
  height: 65%;
  z-index: 1;
  background: 
    linear-gradient(135deg, rgba(30,144,255,0.08) 0%, transparent 50%),
    url('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&q=80') center/cover no-repeat;
  clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);

  @media (max-width: 768px) {
    opacity: 0.4;
    width: 100%;
    clip-path: none;
  }
`;

export const KeyboardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, var(--color-dark) 10%, rgba(17,17,17,0.55) 60%, rgba(17,17,17,0.2) 100%),
              linear-gradient(to bottom, rgba(17,17,17,0.2) 0%, var(--color-dark) 90%);
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center bottom, rgba(30,144,255,0.08) 0%, transparent 70%);
  z-index: 1;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 820px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(30, 144, 255, 0.12);
  border: 1px solid rgba(30, 144, 255, 0.3);
  color: var(--color-blue-light);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 0.4rem 0.9rem;
  border-radius: 50px;
  text-transform: uppercase;
`;

export const BadgeDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  background: var(--color-blue);
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-heading);
  font-size: clamp(3.5rem, 9vw, 7rem);
  font-weight: 800;
  letter-spacing: 4px;
  color: var(--color-white);
  line-height: 1;
  text-transform: uppercase;
  text-shadow: 0 0 60px rgba(30, 144, 255, 0.2);
  margin: 0;
  animation: ${fadeInUp} 0.8s ease both;
`;

export const HeroSubtitle = styled.p`
  font-family: var(--font-heading);
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  font-weight: 400;
  color: var(--color-blue);
  letter-spacing: 1px;
  margin: 0;
  animation: ${fadeInUp} 0.9s 0.1s ease both;
`;

export const HeroDescription = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: rgba(255,255,255,0.65);
  line-height: 1.7;
  max-width: 560px;
  margin: 0.5rem 0;
  animation: ${fadeInUp} 0.9s 0.2s ease both;
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  animation: ${fadeInUp} 0.9s 0.3s ease both;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 280px;
  }
`;

export const HeroBtn = styled.a`
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  transition: var(--transition);
  cursor: pointer;
  text-align: center;

  ${props => props.$primary ? `
    background: var(--color-blue);
    color: var(--color-white);
    box-shadow: 0 0 20px rgba(30, 144, 255, 0.4);

    &:hover {
      background: var(--color-blue-light);
      box-shadow: 0 0 35px rgba(30, 144, 255, 0.6);
      transform: translateY(-2px);
    }
  ` : `
    background: transparent;
    color: var(--color-white);
    border: 1px solid rgba(255,255,255,0.25);

    &:hover {
      border-color: var(--color-blue);
      color: var(--color-blue-light);
      transform: translateY(-2px);
    }
  `}
`;

export const ScrollArrow = styled.button`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background: transparent;
  color: rgba(255,255,255,0.5);
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  animation: ${bounce} 2s infinite;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    border-color: var(--color-blue);
    color: var(--color-blue);
  }
`;
