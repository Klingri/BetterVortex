// 1. Clone and append profile info row
const originalElement = document.querySelector('.profile-info-row');

if (originalElement) {
  const clonedElement = originalElement.cloneNode(true);
  clonedElement.removeAttribute('id');
  document.body.appendChild(clonedElement);
}

// 2. Add dismiss button to the alert
const alertBox = document.querySelector('.notice');

if (alertBox) {
  const deleteAlertBtn = document.createElement('button');
  deleteAlertBtn.className = 'vpro-nav-btn';
  deleteAlertBtn.textContent = 'Dismiss Alert'; // textContent is faster than innerText

  deleteAlertBtn.addEventListener('click', () => {
    alertBox.remove();
  }, { once: true }); // Automatically removes listener after click

  alertBox.appendChild(deleteAlertBtn);
}

// 3. Avatar click navigation with safety check
const avatarBox = document.querySelector('.avatar-render-box');

if (avatarBox) {
  avatarBox.style.cursor = 'pointer'; // Visual cue that it's clickable
  avatarBox.addEventListener('click', () => {
    window.location.href = 'https://playvortex.io/catalog';
  });
}

// 4. Friends shortcut click navigation with safety check
const friendsTitle = document.querySelector('#friends-title');

if (friendsTitle) {
  friendsTitle.style.cursor = 'pointer'; // Visual cue that it's clickable
  friendsTitle.addEventListener('click', () => {
    window.location.href = 'https://playvortex.io/social?user=&tab=friends';
  });
}
