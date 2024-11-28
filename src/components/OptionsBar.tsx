import { CollisionType } from "@huyngth/react-selection";
import { Dispatch, SetStateAction } from "react";
import { cn } from "../utils";

const collisionChoices = [
  {
    value: "intersect",
    label: "Intersect (default)",
    description:
      "Selects items that partially or fully overlap with the selection box, similar to Windows File Explorer.",
  },
  {
    value: "absolutely-inside",
    label: "Absolutely inside",
    description:
      "Only selects items that are completely contained within the selection box, providing more precise selection control.",
  },
];

interface Props {
  collisionType: CollisionType;
  setCollisionType: Dispatch<SetStateAction<CollisionType>>;
  className?: string;
}

export const OptionsBar = ({
  collisionType,
  setCollisionType,
  className,
}: Props) => {
  return (
    <div className={cn("flex gap-2 flex-col items-start", className)}>
      <h4 className="font-bold">Collision type</h4>
      {collisionChoices.map(({ value, label }) => (
        <div key={value} className="ml-2 flex gap-2">
          <input
            className="font-semibold"
            key={value}
            id={value}
            type="radio"
            value={value}
            checked={collisionType === value}
            onChange={(e) => setCollisionType(e.target.value as CollisionType)}
          />
          <label htmlFor={value} className="font-semibold">
            {label}
          </label>
        </div>
      ))}

      <div className="h-px w-full bg-gray-200" />

      {collisionChoices.find((choice) => choice.value === collisionType)
        ?.description && (
        <div className="mt-2">
          <p className="text-justify">
            {
              collisionChoices.find((choice) => choice.value === collisionType)
                ?.description
            }
          </p>
        </div>
      )}
    </div>
  );
};
