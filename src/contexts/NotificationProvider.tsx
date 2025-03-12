import React, { useState } from "react";
import { NotificationContext } from "./NotificationContext";

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<string | null>(null);

  const hideNotification = () => {
    setMessage(null);
  };

  const showNotification = (msg: string) => {
    setMessage(msg);
    setTimeout(() => {
      hideNotification();
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ message, showNotification, hideNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};