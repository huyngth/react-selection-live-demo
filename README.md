# React Selection Demo

Demo repository showcasing the [@huyngth/react-selection](https://www.npmjs.com/package/@huyngth/react-selection?activeTab=readme) library functionality.

## Features Demonstrated

- Basic selection functionality
- Collision detection modes
- Custom styling examples
- TypeScript integration
- Performance optimization patterns

## Brief look

![React Selection Live Demo](https://github.com/user-attachments/assets/b3efba88-cf34-40fd-9bfa-5c9094e0c1e2)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/huyngth/react-selection-live-demo
cd react-selection-demo

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Visit `http://localhost:5173` to see the demo.

## Examples

### Basic Selection

```tsx
import { SelectionZone, SelectableItem } from "react-selection";

function BasicExample() {
  const [selected, setSelected] = useState([]);

  return (
    <SelectionZone items={data} onSelectReturn={setSelected}>
      {data.map((item) => (
        <SelectableItem id={item.ID} />
      ))}
    </SelectionZone>
  );
}
```

### Collision Detection

```tsx
<SelectionZone
  items={data}
  collisionType="absolutely-inside"
  onSelectReturn={setSelected}
>
  {/* ... */}
</SelectionZone>
```

## Development

```bash
# Run in development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- react-selection

## Warning

#### In case you want to limit the SelectionZone and let it overflow in a window, give it a wrapper!

```tsx
//❌ directly let SelectionZone overflow auto
<SelectionZone
  className="overflow-auto ..."
  /*or*/
  style={{
    overflow: "auto"
  }}
  ...
>
  {/* ... */}
</SelectionZone>
```

```tsx
//✅ wrap SelectionZone with an overflow-auto-wrapper
<div
  className="overflow-auto ..."
  /*or*/
  style={{
    overflow: "auto"
  }}
>
  <SelectionZone
    ...
  >
    {/* ... */}
  </SelectionZone>
</div>
```
