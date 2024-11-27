# React Selection Demo

Demo repository showcasing the [@huyngth/react-selection](https://www.npmjs.com/package/@huyngth/react-selection?activeTab=readme) library functionality.

## Features Demonstrated

- Basic selection functionality
- Collision detection modes
- Custom styling examples
- TypeScript integration
- Performance optimization patterns

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
