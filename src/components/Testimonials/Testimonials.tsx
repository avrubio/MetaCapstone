import TestimonialCard, { type TestimonialProps } from './TestimonialCard';

const TestimonialList: TestimonialProps[] = [
  {
    rating: "5",
    name: "Bob",
    review: "the food was exceptional!",
    reviwerImg: "pic.com",
  },
  {
    rating: "1",
    name: "Bob",
    review: "the food was exceptional!",
    reviwerImg: "pic.com",
  },
  {
    rating: "2",
    name: "Bob",
    review: "the food was exceptional!",
    reviwerImg: "pic.com",
  },
  {
    rating: "3",
    name: "Bob",
    review: "the food was exceptional!",
    reviwerImg: "pic.com",
  },
];

const Testimonials = () => {
  return (
    <>
      {TestimonialList.map((testimonial, index) => (
        <TestimonialCard
          rating={testimonial.rating}
          name={testimonial.name}
          review={testimonial.review}
          reviwerImg={testimonial.reviwerImg}
        />
      ))}
    </>
  );
};

export default Testimonials;
