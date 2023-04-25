import React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
// types
import { IMenu } from "./Menu.types";

// styles
import "./Menu.scss";

const Menu: React.FC<IMenu> = ({ btnText, ...rest }) => {
  const [hovered, setHovered] = useState<boolean>();
  const [menuPosition, setMenuPosition] = useState<any>("top");
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const menuRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const offsetTop = menuRef?.current?.offsetTop;
    if (offsetTop) {
      const offsetBot = windowHeight - offsetTop;
      if (offsetBot <= 150) {
        setMenuPosition("top");
      }
    }
  }, [menuRef]);

  const listClasses = useMemo(
    () => (menuPosition === "bottom" ? "menu-list-bot" : "menu-list-top"),
    [menuPosition]
  );

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, [hovered]);

  return (
    <div
      ref={menuRef}
      className="menu"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2>{btnText}</h2>
      {/* {hovered && <div className={`menu-list ${listClasses}`}>blabal</div>} */}
      {hovered && (
        <div
          style={{ [menuPosition]: menuRef?.current?.clientHeight }}
          className={`menu-list ${listClasses}`}
        >
          blabla
        </div>
      )}
    </div>
  );
};

export default Menu;
