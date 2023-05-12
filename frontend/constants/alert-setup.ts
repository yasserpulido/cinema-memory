import { AlertSetup } from "@/types";

export const ALERT_SETUP: { success: AlertSetup; error: AlertSetup } = {
  success: {
    type: "success",
    text: "Success",
  },
  error: {
    type: "error",
    text: "Error",
  },
};