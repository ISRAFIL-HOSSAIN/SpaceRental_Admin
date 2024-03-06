import React from "react";
import { FaRegStar } from "react-icons/fa";
import { PiMapPin } from "react-icons/pi";
import { FaHeart } from "react-icons/fa6";
import { noimage, profile } from "../../assets";
import { spliceString } from "../../utils/CommonFunction";

const StoreCard = ({ data }) => {
  console.log({ data });
  return (
    <div className="min-w-[360px] max-w-[360px] mx-auto h-[320px] relative ">
      <div className="w-[350px] h-[320px]  left-0 top-0 absolute items-center justify-center flex bg-white rounded-3xl shadow border border-yellow-400 ">
        {data?.coverImage ? (
          <img
            className="w-full h-[200px] top-[5px] absolute rounded-3xl object-cover p-2"
            src={data?.coverImage}
          />
        ) : (
          <div className="w-[325px] h-[185px] flex justify-center items-center top-[5px] absolute rounded-3xl bg-gray-300 m-2  ">
            <img
              className="w-24 h-24 rounded-3xl object-cover p-2"
              src={noimage}
            />
          </div>
        )}
      </div>

      <div className="w-32 h-[37px] p-2 left-[204px] top-[24px] absolute bg-white rounded-lg justify-around items-center  inline-flex">
        <div className="justify-start items-center gap-1 flex">
          <FaRegStar className="text-yellow-500" />
          <div className="text-zinc-800 text-sm font-semibold font-sanse leading-[21px]">
            {data?.averageRating}
          </div>
        </div>
        <div className="text-gray-400 text-xs font-medium font-sanse leading-[14px]">
          {data?.reviewCount} reviews
        </div>
      </div>
      <div className="w-[292px] h-[21px] left-[12px] top-[240px] absolute justify-start items-center gap-2 inline-flex">
        <PiMapPin />
        <div className="text-gray-400 text-[12px] font-medium font-sanse leading-[18px]">
          {spliceString(data?.location, 45) || "N/A"}
        </div>
      </div>
      <div className="w-[350px] h-[27px] left-[16px] top-[277px] absolute ">
        <div className="left-0 top-[3px] absolute text-zinc-800 text-sm font-medium font-sanse leading-[21px]">
          {data?.accessMethod}
        </div>
        <div className="w-[76px] h-[27px] left-[220px] top-0 absolute justify-start items-center gap-1 inline-flex">
          <div className="text-zinc-800 text-lg font-extrabold font-sanse leading-[27px]">
            ${data?.pricePerMonth}
          </div>
          <div className="text-gray-400 text-xs font-medium font-sanse leading-[18px]">
            /month
          </div>
        </div>
      </div>
      <div className="w-[350px] h-6 left-[6px] top-[210px] absolute">
        <div className="w-7 h-7 left-[300px] top-0 absolute">
          {" "}
          <FaHeart size={24} className="text-red-500 p-1" />
        </div>
        <div className="left-3 top-0 sm:text-sm md:text-md lg:text-[16px] absolute text-zinc-800 text-base font-semibold font-sanse leading-normal">
          {spliceString(data?.name, 22) || "N/A"}
        </div>

        <div className="w-[58px] h-[22px] left-[226px] top-[1px] absolute">
          <img
            className="w-[22px] h-[22px] left-[36px] top-0 absolute rounded-full border border-white"
            src="https://via.placeholder.com/22x22"
          />
          <img
            className="w-[22px] h-[22px] left-[24px] top-0 absolute rounded-full border border-white"
            src="https://via.placeholder.com/22x22"
          />
          <img
            className="w-[22px] h-[22px] left-[12px] top-0 absolute rounded-full border border-white"
            src="https://via.placeholder.com/22x22"
          />
          <img
            className="w-[22px] h-[22px] left-0 top-0 absolute rounded-full border border-white"
            src="https://via.placeholder.com/22x22"
          />
        </div>
      </div>
      <div className="w-[105px] h-[34px] px-4 py-2 left-[24px] top-[24px] absolute bg-cyan-200 rounded-lg justify-center items-center gap-2 inline-flex">
        <img
          className="w-[18px] h-[18px] rounded-full"
          src={data?.ownerProfilePicture || profile}
        />
        <div className="text-zinc-800 text-xs font-semibold font-sanse leading-[18px]">
          Certified
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
