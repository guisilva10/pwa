const showNotification = (title: string, options?: NotificationOptions) => {
  // Verificar se as notificações são suportadas pelo navegador
  if (!("Notification" in window)) {
    console.log("Este navegador não suporta notificações.");
    return;
  }

  // Verificar se as notificações estão habilitadas
  if (Notification.permission === "granted") {
    // Criar e exibir a notificação
    new Notification(title, options);
  } else if (Notification.permission !== "denied") {
    // Pedir permissão para exibir notificações
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        // Criar e exibir a notificação
        new Notification(title, options);
      }
    });
  }
};

export default showNotification;