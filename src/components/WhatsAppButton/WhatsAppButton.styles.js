import styled, { keyframes, css } from 'styled-components';

const pulseGreen = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
  70% { box-shadow: 0 0 0 6px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
`;

const typingDots = keyframes`
  0%, 80%, 100% { transform: scale(0); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; }
`;

export const FloatContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

export const MainBtn = styled.a`
  background-color: #25D366;
  color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6px 16px rgba(37, 211, 102, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  z-index: 2;
  text-decoration: none;

  &:hover {
    transform: scale(1.1) rotate(-5deg);
    box-shadow: 0px 8px 24px rgba(37, 211, 102, 0.5);
  }

  svg {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 768px) {
    width: 54px;
    height: 54px;
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export const Popup = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 5px 20px rgba(0,0,0,0.15);
  width: 260px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px) scale(0.9);
  transform-origin: bottom right;
  pointer-events: none;
  transition: opacity 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
              transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${props => props.$visible && css`
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
  `}
`;

export const PopupHeader = styled.div`
  background: #02040A;
  color: #ffffff;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PopupBrand = styled.div`
  font-family: var(--font-heading, sans-serif);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PopupDot = styled.span`
  width: 8px;
  height: 8px;
  background-color: #25D366;
  border-radius: 50%;
  animation: ${pulseGreen} 2s infinite;
`;

export const PopupClose = styled.button`
  background: transparent;
  color: rgba(255,255,255,0.7);
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

export const PopupBody = styled.a`
  padding: 15px;
  display: flex;
  flex-direction: column;
  background-color: #ECE5DD;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  text-decoration: none;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.95);
  }
`;

export const Bubble = styled.div`
  background: #ffffff;
  border-radius: 12px;
  border-top-left-radius: 2px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  width: fit-content;
`;

export const TypingText = styled.span`
  font-family: var(--font-body, sans-serif);
  font-size: 0.85rem;
  color: #555;
  font-style: italic;
`;

export const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    width: 6px;
    height: 6px;
    background: #a0a0a0;
    border-radius: 50%;
    animation: ${typingDots} 1.4s infinite ease-in-out both;

    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
    &:nth-child(3) { animation-delay: 0s; }
  }
`;
