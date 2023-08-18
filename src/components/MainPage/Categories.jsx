import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Vegetable Chopper",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Dish Drying Rack ",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Mixing Bowls",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Housewares",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Meat Chopper",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Cutting Boards",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Vegetable Slice",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Pots and Pans Set",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "BBQ Gloves",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Kitchen Mat",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Kitchen Utensils Set",
    },
  ];

  return (
    <>
      {/* <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Categories;
