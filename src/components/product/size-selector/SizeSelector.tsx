import type { Size } from "@/interfaces";
import { clsx } from "clsx";

interface Props {
  selectedSize: Size;
  availableSize: Size[];
}

export const SizeSelector = ({ selectedSize, availableSize }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Condición</h3>

      <div className="flex">
        {availableSize.map((size) => (
          <button
            className={clsx("mx-2 hover:underline text-lg", {
              underline: size === selectedSize,
            })}
            key={size}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
