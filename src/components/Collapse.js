import { useState } from "react";

export default ({ children }) => {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <div className={!opened ? "hidden" : ""}>{children}</div>
      <button className="collapser" onClick={() => setOpened(!opened)}>
        {opened ? "Bezár" : "Módosítás"}
      </button>
    </div>
  );
};
