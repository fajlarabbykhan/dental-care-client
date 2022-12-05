import React from "react";
import quote from "../../assets/icons/quote.svg";
import p1 from "../../assets/images/people1.png";
import p2 from "../../assets/images/people2.png";
import p3 from "../../assets/images/people3.png";
import Review from "./Review";
const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Fajla Rabby Khan",
      img: p1,
      location: "Dhaka",
    },
    {
      _id: 2,
      name: "Fajla Rabby Khan",
      img: p2,
      location: "Dhaka",
    },
    {
      _id: 3,
      name: "Fajla Rabby Khan",
      img: p3,
      location: "Dhaka",
    },
  ];
  return (
    <section className="px-12 mt-20">
      <div className="flex justify-between mb-6">
        <div>
          <p className="text-xl text-primary font-bold">Testimonials</p>
          <p className="text-3xl ">What our client say</p>
        </div>
        <div>
          <img src={quote} alt="" className="w-24 lg-48" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
