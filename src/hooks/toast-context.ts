import { createContext } from "react";

export type ToastType = "success" | "info" | "error";

export type Toast = {
  id: string;
  type: ToastType;
  message: string;
};

export type ToastContextValue = {
  toasts: Toast[];
  addToast: (type: ToastType, message: string) => void;
  removeToast: (id: string) => void;
};

export const ToastContext = createContext<ToastContextValue | null>(null);
