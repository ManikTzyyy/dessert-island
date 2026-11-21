import { useState } from "react";
import { numberFormat } from "../utils/numberFormat";
import { Button } from "./Button";
import { IconX } from "@tabler/icons-react";

const ProductCard = ({
  name = "",
  img = "",
  price = 0,
  desc = "",
  categories = [],
}) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="w-full h-32  shrink-0 relative overflow-hidden">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col justify-between gap-1 px-1 py-2 h-full">
        <div className="flex gap-2 text-stone-400 overflow-x-scroll">
          {categories.map((e) => (
            <span className="border rounded-full px-2 text-sm" key={e}>
              {e}
            </span>
          ))}
        </div>
        <span className="text-xl md:text-3xl font-bold text-stone-700">
          Rp {price}
        </span>

        <div className="flex flex-col pb-1">
          <span className="text-lg md:text-xl text-orange-500 font-black truncate">
            {name}
          </span>
          <span className="text-xs text-stone-400 truncate">{desc}</span>
        </div>
      </div>
    </div>
  );
};

const CardLoading = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="w-full h-32  shrink-0 relative bg-stone-200 skeleton "></div>
      <div className="flex flex-col justify-between px-1 py-2 gap-2">
        <div className="flex gap-2">
          <span className="bg-stone-200 px-2 text-sm w-20 h-5 skeleton"></span>
        </div>
        <span className="bg-stone-200 px-2 text-sm w-32 h-5 rounded-xs skeleton"></span>
        <div className="flex flex-col pb-1">
          <span className="bg-stone-200 px-2 text-sm w-24 h-5 rounded-xs skeleton"></span>
        </div>
        <span className="bg-stone-200 px-2 text-sm w-full h-6 rounded-full skeleton"></span>
      </div>
    </div>
  );
};

const CardDialog = ({ show, onClose, data }) => {
  if (!show) return null;
  const categories = data.category || [];
  const images = data.gallery || [];

  const [mainImage, setMainImage] = useState(data.image);

  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full h-screen p-8 bg-stone-900/20 backdrop-blur-sm flex justify-center items-center`}
    >
      <div className="bg-white w-full md:w-[40vh]  rounded-lg relative">
        <div className="relative aspect-square rounded-t-lg overflow-hidden">
          <img src={mainImage} className="h-full w-full object-cover" />
        </div>
        <button className="group absolute top-3 right-3" onClick={onClose}>
          <div className=" text-stone-900 bg-white p-2 rounded-full group-hover:bg-stone-100">
            <IconX size={30} />
          </div>
        </button>

        <div className="px-2 py-2">
          <div className="flex gap-2 overflow-x-scroll">
            {images.map((e) => {
              return (
                <div
                  role="button"
                  onClick={() => {
                    setMainImage(e.url);
                  }}
                  key={e.id}
                  className="group aspect-square h-20 rounded-lg overflow-hidden hover:bg-stone-800 hover:cursor-pointer shrink-0"
                >
                  <img
                    src={e.url}
                    alt=""
                    className="group-hover:brightness-60 w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
          <div className="pt-1">
            <div className="text-3xl md:text-5xl font-bold text-stone-700">
              Rp {numberFormat(data.price || 0)}
            </div>
            <div className="text-2xl md:text-4xl text-orange-500 font-black">
              {data.name}
            </div>
          </div>

          <div className="pb-2">
            <p className="text-sm text-stone-400">{data.description}</p>
            <div className="flex gap-2 text-stone-400 overflow-x-scroll">
              {categories.map((e) => {
                return (
                  <span key={e} className="border rounded-full px-2 text-sm">
                    {e}
                  </span>
                );
              })}
            </div>
          </div>
          <Button menu={data.name} />
        </div>
      </div>
    </div>
  );
};

export { ProductCard, CardLoading, CardDialog };
