import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import useNotification from "./hooks/useNotification";
import Button from "./components/Button/Button";
import { AiFillDownCircle } from "react-icons/ai";

function App() {
  const [count, setCount] = useState(0);

  const openNotification = useNotification();

  return (
    <div style={{ padding: "5rem", border: "1px solid black" }}>
      <Button
        onClick={() =>
          openNotification({
            title: "Hehe",
            horizontal: "right",
            icon: <AiFillDownCircle display="block" fontSize="3rem" />,
            closingTimer: 1000000,
          })
        }
      >
        Blabla
      </Button>
    </div>
  );
}

export default App;
