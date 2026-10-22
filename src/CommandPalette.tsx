import { useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Search } from "./icons";

export type Command = {
  id: string;
  label: string;
  group: string;
  hint?: string;
  run: () => void;
};

/** Paleta de comandos (⌘K / Ctrl K) com busca, navegação por setas e Enter. */
export function CommandPalette({ open, onClose, commands }: {
  open: boolean;
  onClose: () => void;
  commands: Command[];
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.label} ${c.group}`.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      setQuery("");
      setActive(0);
      dialog.showModal();
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    document
      .getElementById(`cmd-${results[active]?.id}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active, results]);

  const run = (cmd?: Command) => {
    if (!cmd) return;
    onClose();
    cmd.run();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % Math.max(results.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + results.length) % Math.max(results.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(results[active]);
    }
  };

  let lastGroup = "";

  return (
    <dialog
      ref={dialogRef}
      className="cmdk"
      aria-label="Paleta de comandos"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="cmdk-inner">
        <label className="cmdk-search">
          <Search />
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Buscar seções, projetos, ações…"
            role="combobox"
            aria-expanded="true"
            aria-controls="cmdk-list"
            aria-activedescendant={results[active] ? `cmd-${results[active].id}` : undefined}
          />
          <kbd>esc</kbd>
        </label>
        <ul className="cmdk-list" id="cmdk-list" role="listbox">
          {results.length === 0 && <li className="cmdk-empty">Nada encontrado para “{query}”.</li>}
          {results.map((c, i) => {
            const showGroup = c.group !== lastGroup;
            lastGroup = c.group;
            return (
              <li key={c.id} role="presentation">
                {showGroup && <span className="cmdk-group">{c.group}</span>}
                <div
                  id={`cmd-${c.id}`}
                  role="option"
                  aria-selected={i === active}
                  className="cmdk-item"
                  onMouseMove={() => setActive(i)}
                  onClick={() => run(c)}
                >
                  <span>{c.label}</span>
                  {c.hint && <span className="cmdk-hint">{c.hint}</span>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </dialog>
  );
}
