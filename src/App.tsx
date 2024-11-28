import "./App.css";

import SelectionZone, {
  SelectableItem,
  CollisionType,
} from "@huyngth/react-selection";
import { DUMMY_DATA, TData } from "./constants";
import { useState } from "react";
import { cn } from "./utils";
import { OptionsBar } from "./components/OptionsBar";

function App() {
  const [selectedItems, setSelectedItems] = useState<TData[]>([]);
  const [collisionType, setCollisionType] =
    useState<CollisionType>("intersect");

  return (
    <main className="h-dvh max-h-dvh overflow-auto px-4 pb-2 flex flex-col">
      <h1 className="text-center font-bold">React Selection</h1>
      <h4>(Hold left mouse button and drag to select)</h4>

      <div className="flex gap-2 flex-1 overflow-hidden">
        <div className="overflow-auto h-full max-h-full flex-1 border-2 border-solid rounded-xl">
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
                  className={cn("aspect-square bg-red-200 col-span-1 rounded", {
                    "bg-green-300": selected,
                  })}
                />
              );
            })}
          </SelectionZone>
        </div>

        <OptionsBar
          collisionType={collisionType}
          setCollisionType={setCollisionType}
          className="w-[300px] max-w-[300px] border-2 border-solid rounded-xl p-2"
        />
      </div>
    </main>
  );
}

export default App;
