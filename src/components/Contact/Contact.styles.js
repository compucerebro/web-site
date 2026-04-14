import styled from 'styled-components';

export const ContactSection = styled.section`
  background: #fff;
  display: flex;
  flex-direction: column;
`;

/* Map Styles */
export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(20%) contrast(1.05);
  }

  @media (max-width: 600px) {
    height: 240px;
  }
`;

export const MapOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to top, #fff, transparent);
  pointer-events: none;
`;

export const MapLink = styled.a`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(6px);
  border: 1px solid #ddd;
  color: var(--color-blue);
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 50px;
  transition: var(--transition);
  z-index: 5;

  &:hover {
    background: var(--color-blue);
    color: #fff;
    border-color: var(--color-blue);
  }
`;

/* Body Info Styles */
export const ContactBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  padding: 3.5rem 6rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 900px) {
    padding: 3rem 2rem;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 600px) {
    padding: 2.5rem 1.5rem;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContactTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #111;
  margin: 0 0 0.5rem;
`;

export const ContactSub = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

export const ContactBrand = styled.span`
  color: var(--color-blue);
  font-weight: 600;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const DetailIcon = styled.div`
  width: 44px;
  height: 44px;
  min-width: 44px;
  border: 1.5px solid #e0e0e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444;
  transition: var(--transition);

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover ${DetailIcon} {
    border-color: var(--color-blue);
    color: var(--color-blue);
    background: rgba(30, 144, 255, 0.05);
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;

export const DetailLabel = styled.span`
  font-size: 0.7rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #aaa;
  font-weight: 600;
`;

export const DetailValue = styled.span`
  font-size: 0.95rem;
  color: #222;
  font-weight: 500;
  transition: var(--transition);

  ${props => props.as === 'a' && `
    text-decoration: none;
    &:hover {
      color: var(--color-blue);
    }
  `}
`;

/* CTA Styles */
export const ContactCta = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 1.5rem;

  @media (max-width: 900px) {
    padding-top: 0;
  }
`;

export const WhatsAppBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: #25D366;
  color: #fff;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 0.8rem 1.4rem;
  border-radius: 8px;
  transition: var(--transition);
  box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3);
  white-space: nowrap;
  text-decoration: none;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: #128C7E;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
  }
`;
