import { sendEmail } from "./emailService.js";

const EmailNotification = {
  send(data) {
    sendEmail(data.email, data.product);
  },
};

const WebNotification = {
  send(data) {
    console.log(`Displaying web notification: ${data.message}`);
  },
};

const NotificationFactory = {
  createNotification(type) {
    switch (type) {
      case "email":
        return EmailNotification;
      case "web":
        return WebNotification;
      default:
        throw new Error("Invalid notification type");
    }
  },
};

export default NotificationFactory;
