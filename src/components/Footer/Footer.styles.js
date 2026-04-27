import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #02040A;
  border-top: 1px solid rgba(30, 144, 255, 0.18);
  color: rgba(255,255,255,0.55);
  font-size: 0.9rem;
`;

export const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 3.5rem 2rem 2rem;
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 1.5rem;
  }
`;

export const FooterBrand = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FooterLogo = styled.span`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--color-white);
`;

export const LogoAccent = styled.span`
  color: var(--color-blue);
`;

export const FooterTagline = styled.p`
  font-size: 0.85rem;
  color: rgba(255,255,255,0.4);
  line-height: 1.5;
`;

export const FooterSection = styled.div`
  min-width: 150px;
`;

export const FooterTitle = styled.h4`
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0 0 1rem;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  li {
    color: rgba(255,255,255,0.5);
    font-size: 1rem;
    line-height: 1.4;

    a {
      color: rgba(255,255,255,0.5);
      transition: color 0.2s ease;
      font-size: 1rem;
      text-decoration: none;

      &:hover {
        color: var(--color-blue-light);
      }
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.07);
  padding: 1.2rem 2rem;
  text-align: center;

  p {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.3);
  }
`;
