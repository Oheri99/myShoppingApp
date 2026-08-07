import { useEffect, useState } from "react";
import ShoppingList from "./components/ShoppingList";
import AddItem from "./components/AddItem";
import type { ShoppingItem } from "./types";

const STORAGE_KEY = "shopping-list-items";

function App() {

  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        setItems([]);
      }
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, isHydrated]);

  const addItem = (name: string) => {
    const newItem: ShoppingItem = {
      id: Date.now(),
      name,
      completed: false,
    };

    setItems([...items, newItem]);
  };

  const toggleCompleted = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (id: number, name: string) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, name } : item))
    );
  };

  return (
    <main className="app-shell">
      <div className="app-card">
        <h1>Shopping List</h1>
        <p className="app-subtitle">
          Add items, mark them complete, edit or remove them, and your list will persist in localStorage.
        </p>

        <AddItem addItem={addItem} />

        <ShoppingList
          items={items}
          onToggle={toggleCompleted}
          onDelete={deleteItem}
          onEdit={editItem}
        />
      </div>
    </main>
  );
}

export default App;