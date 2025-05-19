import Button from '../Button';

export type CardProps = {
  title: string;
  price: string;
  description: string;
  img: string;
  button?: string;
};

const Card = ({ title, price, img, description, button }: CardProps) => {
  return (
    <>
      <div className="card">
        <img src={img} alt="" />
        <p>{price}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        {button ? <Button label={button} /> : <></>}
      </div>
    </>
  );
};

export default Card;
