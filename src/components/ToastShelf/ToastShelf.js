import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

const useEscapeKey = (handler) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handler();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);
};

function ToastShelf() {
  const { messages, setMessages } = React.useContext(ToastContext);
  useEscapeKey(() => setMessages([]));

  const handleDeleteMessage = (id) => {
    setMessages((prev) => {
      return prev.filter((m) => m.id !== id);
    });
  };

  return (
    <ol className={styles.wrapper}>
      {messages.map((message) => {
        return (
          <li key={message.id} className={styles.toastWrapper}>
            <Toast
              type={message.type}
              message={message.value}
              onClose={() => handleDeleteMessage(message.id)}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
