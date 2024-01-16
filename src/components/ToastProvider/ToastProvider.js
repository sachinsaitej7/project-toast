import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [messages, setMessages] = React.useState([]);

  return (
    <ToastContext.Provider
      value={{
        messages,
        setMessages,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
