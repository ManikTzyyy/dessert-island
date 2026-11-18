import { IconBrandWhatsapp } from "@tabler/icons-react";

const Button = () => {
  return (
    <button className="text-sm text-white rounded-full py-1 bg-lime-400 hover:bg-lime-600 flex gap-2 justify-center items-center">
      <span>
        <IconBrandWhatsapp />
      </span>
      Order Now!
    </button>
  );
};

const FloatingButton = () => {
  return (
    <button className="bg-white px-4 py-4 rounded-full shadow-lg">
      <IconBrandWhatsapp />
    </button>
  );
};

export { Button, FloatingButton };
