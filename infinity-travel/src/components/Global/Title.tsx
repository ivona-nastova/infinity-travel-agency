import React from "react";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-center text-32 text-center my-8">
      <div className="w-35">
        <hr />
      </div>
      <h2 className="mx-4">{title}</h2>
      <div className="w-35">
        <hr />
      </div>
    </div>
  );
};

export default Title;
