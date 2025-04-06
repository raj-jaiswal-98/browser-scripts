async function withdrawInvitations() {
  const invitations = Array.from(
    document.querySelectorAll("li.invitation-card")
  );

  for (let invitation of invitations) {
    const withdrawButton = invitation.querySelector(
      "span.artdeco-button__text"
    );

    if (withdrawButton) {
      withdrawButton.click();
      const confirmButton = await new Promise((resolve) => {
        const interval = setInterval(() => {
          const button = document.querySelector(
            'button[class*="primary"] > span.artdeco-button__text'
          );
          if (button) {
            clearInterval(interval);
            resolve(button);
          }
        }, 100); // Check every 100ms
      });

      confirmButton.click();
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 2500 + 500)
      );
    }
  }
}

withdrawInvitations();