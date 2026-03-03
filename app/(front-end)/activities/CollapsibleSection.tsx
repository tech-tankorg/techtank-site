import React, { useState } from "react";

type Props = {
  title: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
};

export default function CollapsibleSection({ title, children, defaultOpen = false }: Props) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  return (
    <div className="overflow-hidden border-t border-black">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-3 hover:bg-gray-200 transition text-left"
      >
        <h3 className="">{title}</h3>
        <span className="">{open ? "−" : "+"}</span>
      </button>

      {open && <div className="p-4 text-gray-700">{children}</div>}
      
    </div>
  );
}