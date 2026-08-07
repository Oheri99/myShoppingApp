import { useState } from "react";
import type { ShoppingItem } from "../types";

interface Props {
  items: ShoppingItem[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, name: string) => void;
}

function ShoppingList({ items, onToggle, onDelete, onEdit }: Props) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const startEditing = (item: ShoppingItem) => {
    setEditingId(item.id);
    setEditingText(item.name);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId !== null && editingText.trim()) {
      onEdit(editingId, editingText.trim());
      setEditingId(null);
      setEditingText("");
    }
  };

  return items.length === 0 ? (
    <div className="empty-state">
      <p>Your shopping list is empty.</p>
      <p>Add an item above to get started.</p>
    </div>
  ) : (
    <ul className="shopping-list">
      {items.map((item) => (
        <li className="shopping-item" key={item.id}>
          {editingId === item.id ? (
            <form className="edit-form" onSubmit={handleEditSubmit}>
              <input
                className="edit-input"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                placeholder="Edit item"
              />
              <button className="edit-button" type="submit">
                Save
              </button>
              <button
                className="cancel-button"
                type="button"
                onClick={() => setEditingId(null)}
              >
                Cancel
              </button>
            </form>
          ) : (
            <>
              <button
                className={`toggle-button ${item.completed ? "completed" : "pending"}`}
                type="button"
                onClick={() => onToggle(item.id)}
                aria-label={item.completed ? `Mark ${item.name} as incomplete` : `Mark ${item.name} as complete`}
              >
                {item.completed ? "☑" : "☐"}
              </button>
              <span className={`item-name ${item.completed ? "completed" : ""}`}>
                {item.name}
              </span>
              <div className="item-actions">
                <button className="action-button edit" type="button" onClick={() => startEditing(item)}>
                  Edit
                </button>
                <button className="action-button delete" type="button" onClick={() => onDelete(item.id)}>
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;
