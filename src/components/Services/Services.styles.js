import styled, { css } from 'styled-components';

export const ServicesSection = styled.section`
  position: relative;
  background: #02040A;
  padding: 6rem 2rem;
  overflow: hidden;
`;

export const ServicesBgPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(30,144,255,0.08) 1px, transparent 1px);
  background-size: 28px 28px;
  z-index: 0;
`;

export const ServicesContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

export const ServicesHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 3.5rem;
`;

export const ServicesTag = styled.span`
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-blue);
  background: rgba(30, 144, 255, 0.1);
  border: 1px solid rgba(30, 144, 255, 0.25);
  padding: 0.3rem 0.85rem;
  border-radius: 50px;
`;

export const ServicesTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;
`;

export const TitleLine = styled.div`
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-blue), var(--color-blue-light));
  border-radius: 2px;
`;

export const ServicesSubtitle = styled.p`
  color: rgba(255,255,255,0.6);
  font-size: 1rem;
  line-height: 1.6;

  strong {
    color: var(--color-white);
    font-weight: 600;
  }
`;

export const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

/* Service Card Styles */
export const IconWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  width: 52px;
  height: 52px;
  color: var(--color-blue-light);
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const IconGlow = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(30, 144, 255, 0.15);
  filter: blur(10px);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const CardName = styled.h3`
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-blue);
  margin: 0;
  line-height: 1.2;
`;

export const CardDesc = styled.p`
  font-size: 0.78rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.5;
`;

export const Card = styled.div`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px;
  padding: 2rem 1.5rem;
  width: 180px;
  flex: 0 0 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(30,144,255,0.08), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 14px;
  }

  &:hover {
    border-color: rgba(30, 144, 255, 0.4);
    transform: translateY(-6px);
    box-shadow: 0 10px 30px rgba(30, 144, 255, 0.15);

    &::before {
      opacity: 1;
    }

    ${Icon} {
      color: var(--color-blue);
    }

    ${IconGlow} {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    flex: 0 0 calc(50% - 0.5rem);
    width: calc(50% - 0.5rem);
  }

  @media (max-width: 400px) {
    flex: 0 0 100%;
    width: 100%;
  }
`;
