import "./App.css";

import SelectionZone, {
  SelectableItem,
  CollisionType,
} from "@huyngth/react-selection";
import { DUMMY_DATA, TData } from "./constants";
import { useState } from "react";
import { cn } from "./utils";

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

function App() {
  const [selectedItems, setSelectedItems] = useState<TData[]>([]);
  const [collisionType, setCollisionType] =
    useState<CollisionType>("intersect");

  return (
    <>
      <h1 className="text-center font-bold">React Selection</h1>
      <div className="flex gap-2 flex-col items-start">
        <h4 className="font-bold">Collision type: </h4>
        {collisionChoices.map(({ value, label, description }) => (
          <div className="ml-5 flex gap-2">
            <input
              className="font-semibold"
              key={value}
              id={value}
              type="radio"
              value={value}
              checked={collisionType === value}
              onChange={(e) =>
                setCollisionType(e.target.value as CollisionType)
              }
            />
            <label htmlFor={value} className="font-semibold">
              {label}
            </label>{" "}
            - <p>{description}</p>
          </div>
        ))}
      </div>
      <SelectionZone
        className="grid grid-cols-12 gap-2 p-2 w-full"
        items={DUMMY_DATA}
        onSelectReturn={(items) => {
          setSelectedItems(items);
        }}
        collisionType={collisionType}
      >
        {DUMMY_DATA.map((item) => {
          const selected = selectedItems.includes(item);
          return (
            <SelectableItem
              key={item.ID}
              id={item.ID}
              className={cn("aspect-square bg-red-200 col-span-1", {
                "bg-green-300": selected,
              })}
            />
          );
        })}
      </SelectionZone>
    </>
  );
}

export default App;
