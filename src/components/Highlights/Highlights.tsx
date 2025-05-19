import type { CardProps } from './Card';
import Card from './Card';

const Specials: CardProps[] = [
  {
    title: "Greek Salad",
    price: "$5.99",
    description: "QUero dancarcomvoce",
    img: "image",
    button: "Order Delivery",
  },
];
const Highlights = () => {
  return (
    <>
      {Specials.map((eachSpecial, index) => (
        <Card
          key={index}
          title={eachSpecial.title}
          price={eachSpecial.price}
          description={eachSpecial.description}
          img={eachSpecial.img}
        />
      ))}
    </>
  );
};

export default Highlights;
