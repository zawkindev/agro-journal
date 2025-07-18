import type React from "react"
import { CardVariant } from "../utility";

interface CardLayoutProps {
  key: number,
  title: string,
  imgSrc: string,
}

interface CardProps extends CardLayoutProps {
  variant: CardVariant;
}

const NormalCard: React.FC<CardLayoutProps> = ({ key, title, imgSrc }) => (
  <div key={key} className="w-[376px] h-[263px] relative rounded-md overflow-hidden">
    <div className="absolute bottom-0 backdrop-blur-xl w-full">
      <p className="font-semibold text-white p-3">{title}</p>
    </div>
    <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
  </div>
);

const WideCard: React.FC<CardLayoutProps> = ({ key, title, imgSrc }) => (
  <div key={key} className="min-w-[383] h-[120px] rounded-md overflow-hidden">
    <div className="w-full">
      <p className="font-semibold text-white p-3">{title}</p>
    </div>
    <img src={imgSrc} alt={title} className="w-[150px] h-full object-cover" />
  </div>
);

const BlurryCard: React.FC<CardLayoutProps> = ({ key, title, imgSrc }) => (
  <div key={key} className="w-[376px] h-[263px] relative rounded-md overflow-hidden">
    <div className="absolute bottom-0 backdrop-blur-xl w-full">
      <p className="font-semibold text-white p-3">{title}</p>
    </div>
    <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
  </div>
);


const Card: React.FC<CardProps> = ({ variant, ...props }) => {

  const variantMap = {
    [CardVariant.Normal]: NormalCard,
    [CardVariant.Wide]: WideCard,
    [CardVariant.Blurry]: BlurryCard,
  }

  const Component = variantMap[variant]

  return <Component {...props} />
}

export default Card
