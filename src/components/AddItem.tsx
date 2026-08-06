import { useState } from "react";

interface Props {
  addItem: (name: string) => void;
}

function AddItem({ addItem }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim()) {
      addItem(text);
      setText("");
    }
  };

  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
      <input
        className="add-item-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add shopping item"
      />
      <button className="add-item-button">Add</button>
    </form>
  );
}

export default AddItem;
