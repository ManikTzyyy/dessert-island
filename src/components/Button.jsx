import { IconBrandWhatsapp } from "@tabler/icons-react";

const Button = ({ menu }) => {
  const PHONE = import.meta.env.VITE_PHONE;

  const msg = `Hi, saya mau order:
${menu}`;

  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`}
      target="_blank"
    >
      <button className="text-sm text-white rounded-full py-1 bg-lime-400 hover:bg-lime-600 flex gap-2 justify-center items-center w-full">
        <span>
          <IconBrandWhatsapp />
        </span>
        Order Now!
      </button>
    </a>
  );
};

const FloatingButton = () => {
  const PHONE = import.meta.env.VITE_PHONE;
  return (
    <a href={`https://wa.me/${PHONE}`} target="_blank">
      <button className="bg-white px-4 py-4 rounded-full shadow-lg">
        <IconBrandWhatsapp />
      </button>
    </a>
  );
};

export { Button, FloatingButton };
