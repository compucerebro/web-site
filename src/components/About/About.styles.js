import styled from 'styled-components';

export const AboutSection = styled.section`
  position: relative;
  background: #02040A;
  padding: 6rem 2rem;
  overflow: hidden;
`;

export const AboutBgPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(30,144,255,0.08) 1px, transparent 1px);
  background-size: 28px 28px;
  z-index: 0;
`;

export const AboutContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
`;

export const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

export const AboutTag = styled.span`
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

export const AboutTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;
`;

export const AboutLine = styled.div`
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-blue), var(--color-blue-light));
  border-radius: 2px;
`;

export const AboutText = styled.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.8;
  margin-bottom: 3rem;
`;

export const AboutBrand = styled.span`
  color: var(--color-blue);
  font-weight: 600;
`;

export const AboutStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 2rem 3rem;
  backdrop-filter: blur(6px);

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }
`;

export const AboutStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
`;

export const AboutStatNum = styled.span`
  font-family: var(--font-heading);
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--color-blue);
  line-height: 1;
`;

export const AboutStatLabel = styled.span`
  font-size: 0.8rem;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.3px;
`;

export const AboutStatDivider = styled.div`
  width: 1px;
  height: 50px;
  background: rgba(255,255,255,0.1);

  @media (max-width: 600px) {
    width: 60px;
    height: 1px;
  }
`;
