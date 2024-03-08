"use client";
import React from "react";
import useGet from "../../custom hooks/GetCommerce";
import { useParams } from "next/navigation";

const Title = () => {
  const params = useParams();
  const title = useGet("cat", params.content);
  return (
    <h2 className="text-center text-4xl font-semibold mb-10">
      {title.length != 0 ? title.name : null}
    </h2>
  );
};

export default Title;
