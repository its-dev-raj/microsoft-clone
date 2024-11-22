import React from "react";
import micro from "/photos/micro.jpg";

export const Navbar = ({ text }) => {
  const arr = [
    { name: "raj", age: 22 },
    { name: "das", age: 32 },
    { name: "dushyant", age: 77 },
  ];
  function myFunction(raj) { 
    alert(`Hellow ${raj?.name} your age is   ${raj?.age}`);
  }

  const help = "bro whatup"

  return (
    <>
      <h1>{help}</h1>
      <div className="container flex flex-col w-full h-20 px-10 py-6">
        <div className="left flex  gap-4">
          <img className="image flex w-[150px] " src={micro} alt="microsoft" />
          <div className=" flex justify-center gap-10 align-center ">
            {["Microsoft 365", "teams", "office", "co-pilot"].map(
              (item, idx) => {
               return <p className="">{item} </p>}
              
            )}
          </div>
        </div>
        <div className="right flex">
          {arr.map((item, index) => {
            return (
              <div
                key={index}
                className="size-40 rounded-full text-center border text-2xl"
              >
                {" "}
                {item.name}
                <h1 onClick={() => myFunction(item)} className="text-lg">
                  {item.age}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
