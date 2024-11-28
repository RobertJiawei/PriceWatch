import NotificationFactory from "./notificationFactory.js";

const NotificationService = {
  sendNotification(notificationType, data) {
    const notification =
      NotificationFactory.createNotification(notificationType);
    notification.send(data);
  },
};

export default NotificationService;
