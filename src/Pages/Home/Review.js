import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          A review is judgement or discussion of the quality of something.
          Review also means to go over a subject again as part of study or to
          look at something another time. Review has many other senses as both a
          noun and a verb.
        </p>
        <div className=" flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} />
            </div>
          </div>
          <div>
            <p className="text-xl">{review.name}</p>
            <p className="">{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
