import React, { useContext, useState } from "react";

const NotificationContext = React.createContext();

export function useNotification() {
  return useContext(NotificationContext);
}

export function NotificationProvider({ children }) {
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const value = {
    message,
    setMessage,
    showNotification,
    setShowNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationProvider;
