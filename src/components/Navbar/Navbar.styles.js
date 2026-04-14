import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  transition: background 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease;
  background: transparent;

  ${props => props.$scrolled && css`
    background: rgba(2, 4, 10, 0.93);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(30, 144, 255, 0.18);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
    padding: 0.75rem 3rem;
  `}

  @media (max-width: 768px) {
    padding: 0.85rem 1.5rem;
    ${props => props.$scrolled && css`
      padding: 0.7rem 1.5rem;
    `}
  }
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
  background: rgba(2, 4, 10, 0.55);
  border: 1px solid rgba(30, 144, 255, 0.18);
  border-radius: 10px;
  padding: 4px 10px 4px 4px;
  transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(30, 144, 255, 0.5);
    background: rgba(2, 4, 10, 0.8);
    box-shadow: 0 0 18px rgba(30, 144, 255, 0.2);
  }

  @media (max-width: 768px) {
    padding: 3px 8px 3px 3px;
  }
`;

export const LogoImg = styled.img`
  height: 52px;
  width: 52px;
  object-fit: contain;
  display: block;
  mix-blend-mode: screen;
  filter: brightness(1.15) drop-shadow(0 0 8px rgba(30, 144, 255, 0.4));
  transition: filter 0.3s ease, transform 0.3s ease;

  ${LogoLink}:hover & {
    filter: brightness(1.25) drop-shadow(0 0 14px rgba(30, 144, 255, 0.7));
    transform: scale(1.06);
  }

  @media (max-width: 768px) {
    height: 44px;
    width: 44px;
  }
`;

export const LogoName = styled.span`
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  line-height: 1;
  color: #FFFFFF;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: transparent;
  padding: 4px;
  cursor: pointer;
  border: none;
  outline: none;

  span {
    display: block;
    width: 26px;
    height: 2px;
    background: #FFFFFF;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center;

    &:nth-child(1) {
      ${props => props.$open && css`transform: translateY(7px) rotate(45deg);`}
    }
    &:nth-child(2) {
      ${props => props.$open && css`opacity: 0; transform: scaleX(0);`}
    }
    &:nth-child(3) {
      ${props => props.$open && css`transform: translateY(-7px) rotate(-45deg);`}
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.$open ? '0' : '-100%'};
    height: 100vh;
    width: 260px;
    background: rgba(2, 4, 10, 0.97);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    flex-direction: column;
    justify-content: center;
    gap: 2.2rem;
    border-left: 1px solid rgba(30, 144, 255, 0.2);
    transition: right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0;
  }
`;

export const NavLink = styled.a`
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.82);
  transition: color 0.25s ease;
  position: relative;
  padding-bottom: 4px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #1E90FF;
    border-radius: 1px;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #FFFFFF;
    &::after {
      width: 100%;
    }
  }

  ${props => props.$cta && css`
    background: #1E90FF !important;
    color: #FFFFFF !important;
    padding: 0.48rem 1.25rem !important;
    border-radius: 5px;
    box-shadow: 0 0 16px rgba(30, 144, 255, 0.35);
    transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease !important;

    &:hover {
      background: #5aadff !important;
      box-shadow: 0 0 28px rgba(30, 144, 255, 0.55) !important;
      transform: translateY(-1px);
    }

    &::after {
      display: none !important;
    }
  `}

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
