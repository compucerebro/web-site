import styled, { css } from 'styled-components';

export const ProductsSection = styled.section`
  background: #f8f9fa;
  padding: 6rem 2rem;
  text-align: center;
`;

export const ProductsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 3.5rem;
`;

export const ProductsTag = styled.span`
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

export const ProductsTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #111;
  margin: 0;
`;

export const TitleLine = styled.div`
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-blue), var(--color-blue-light));
  border-radius: 2px;
`;

export const ProductsSubtitle = styled.p`
  font-size: 0.95rem;
  color: var(--color-blue);
  max-width: 400px;
  line-height: 1.6;
`;

/* Carousel Styles */
export const CarouselContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto 2.5rem;
`;

export const SideCardWrapper = styled.div`
  flex: 0 0 250px;
  opacity: 0.45;
  transform: scale(0.9);
  cursor: pointer;
  transition: var(--transition);
  filter: grayscale(0.3);

  &:hover {
    opacity: 0.65;
    transform: scale(0.92);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const CenterCardWrapper = styled.div`
  flex: 0 0 350px;
  z-index: 1;

  @media (max-width: 900px) {
    flex: 0 0 min(350px, 90vw);
  }
`;

/* Product Card Styles */
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
`;

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  position: relative;

  ${props => props.$isActive && css`
    box-shadow: 0 12px 40px rgba(30, 144, 255, 0.2), 0 4px 16px rgba(0,0,0,0.1);
    transform: translateY(-4px);
  `}

  &:hover ${CardImage} {
    transform: scale(1.05);
  }
`;

export const CardBadge = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
  background: var(--color-blue);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 0.25rem 0.65rem;
  border-radius: 50px;
`;

export const ImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: #f0f2f5;
`;

export const CardBody = styled.div`
  padding: 1.25rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  text-align: left;
`;

export const CardTag = styled.span`
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-blue);
`;

export const CardName = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 800;
  color: #111;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: 0;
`;

export const CardDesc = styled.p`
  font-size: 0.85rem;
  color: #666;
  line-height: 1.6;
  flex: 1;
`;

export const CardBtn = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  background: var(--color-blue);
  color: #fff;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0.55rem 1.2rem;
  border-radius: 4px;
  text-align: center;
  transition: var(--transition);
  box-shadow: 0 4px 14px rgba(30,144,255,0.25);

  &:hover {
    background: var(--color-blue-light);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(30,144,255,0.4);
  }
`;

/* Control Styles */
export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

export const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  border: 1.5px solid #ccc;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    border-color: var(--color-blue);
    color: var(--color-blue);
    background: rgba(30, 144, 255, 0.06);
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const DotLoader = styled.button`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #ccc;
  border: none;
  cursor: pointer;
  transition: var(--transition);

  ${props => props.$active && css`
    background: var(--color-blue);
    transform: scale(1.3);
  `}
`;
