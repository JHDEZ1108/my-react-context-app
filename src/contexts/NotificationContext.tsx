import { createContext } from "react";

interface NotificationContextType {
  message: string | null;
  showNotification: (msg: string) => void;
  hideNotification: () => void;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);