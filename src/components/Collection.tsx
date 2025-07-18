import type React from "react";
import { newsCards } from "../hardcode";
import type { CardVariant } from "../utility";
import Card from "./Card";

interface CollectionProps {
  title: string,
  vertical: boolean,
  cardVariant: CardVariant,
}

const Collection: React.FC<CollectionProps> = ({ title, vertical, cardVariant }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="font-medium text-3xl flex items-center gap-2">
        <div className="w-[3px] h-8 bg-red-500 rounded-full"></div>
        <span>{title}</span>
      </div>
      {
        vertical ?
          <div className="flex flex-col w-fit gap-5">
            {newsCards.map((card, index) => (
              <Card key={index} title={card.title} imgSrc={card.imgSrc} variant={cardVariant} />
            ))}
          </div>
          :
          <div className="grid grid-cols-2 w-fit gap-5">
            {newsCards.map((card, index) => (
              <Card key={index} title={card.title} imgSrc={card.imgSrc} variant={cardVariant} />
            ))}
          </div>

      }
    </div>
  )
}

export default Collection;
