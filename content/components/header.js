// 1. Select DOM elements once and verify they exist
const navBar = document.querySelector('.navbar');

if (navBar) {
  // 2. Configuration array for easy maintenance
  const navButtons = [
    { text: 'BTVortex Settings', url: 'https://playvortex.io/settings' },
    { text: 'BTVortex GitHub', url: 'https://github.com/Klingri/BetterVortex' },
    { text: 'BTVortex Update', url: 'https://github.com/Klingri/BetterVortex/releases' },
    { text: 'Friends', url: 'https://playvortex.io/social?user=&tab=friends' },
    { text: 'Notifications', url: 'https://playvortex.io' }
  ];

  // 3. Optimized button creation using a DocumentFragment (reduces repaints)
  const fragment = document.createDocumentFragment();

  navButtons.forEach(({ text, url }) => {
    const btn = document.createElement('a');
    btn.className = 'vpro-nav-btn';
    btn.href = url;
    btn.textContent = text; // Safer than innerText
    fragment.appendChild(btn);
  });

  // 4. Append version text to the navbar
  const navText = document.createElement('h6');
  navText.className = 'nav-text';
  navText.textContent = 'BetterVortex v3.0';
  navText.style.color = '#FFF';

  fragment.appendChild(navText);
  navBar.appendChild(fragment);
}

// 5. Fixed selector: Comma-separate classes within a single string literal
const alertButton = document.querySelector('.navbar-actions, .navbar-pill-btn, .vpro-nav-btn, .btn-secondary');

if (alertButton) {
  alertButton.addEventListener('click', () => {
    // Optional: using window.confirm yields a real "Are you sure?" Cancel/OK prompt
    if (confirm("Are you sure you want to click this button?")) {
      // User clicked OK
    }
  });
}

const pageTitle = document.querySelector('.page-title');

if (pageTitle) {
  const settingsButton = document.createElement('button');
  settingsButton.innerText = 'BetterVortex Settings';
  settingsButton.className = 'vpro-nav-btn';
  pageTitle.appendChild(settingsButton);

  settingsButton.addEventListener('click', () => {
    // 1. Remove existing pages safely
    document.querySelectorAll('.page').forEach(item => item.remove());

    // 2. Create container and inject structure using a template string
    const settingsPage = document.createElement('div');
    settingsPage.className = 'settings-page';

    settingsPage.innerHTML = `
      <nav class="settings-navbar">
        <button class="vpro-set-btn">Go Back</button>
      </nav>
      <div class="settings-wrapper">
        <div class="setting-box">
          <p class="setting-txt">Test Setting</p>
          <!--<button id="setting-btn">On</button>-->
        </div>
      </div>
      <div id="v-thm-mn">
        <div class="m-tp">Theme Settings</div>
        <div class="m-body">
          ${['Background', 'Accent', 'Text', 'Border']
        .map(lbl => `<div class="ed-r"><label>\${lbl}</label><input id="e-\${lbl.toLowerCase()}" type="text"></div>`)
        .join('')}
          <button id="v-appl" style="width:100%;margin:5px 0;border:none;border-radius:0;background:#111;color:white;">Apply Changes</button>
          <div style="display:flex;gap:2px;">
            <input id="v-nm-inp" type="text" placeholder="Theme Name" style="flex:1;border:none;border-radius:0;">
            <button id="v-sv-bttn" style="border:none;border-radius:0;background:#111;color:white;">Save Theme</button>
          </div>
        </div>
        <div class="m-bt">
          <div class="cl-hd" id="h-prst">▼ Presets</div>
          <div class="cl-cntnt" id="c-prst" style="display: flex;"></div>
          <div style="height:4px"></div>
          <div class="cl-hd" id="h-usr">▼ My Themes</div>
          <div class="cl-cntnt" id="c-usr" style="display: flex;"></div>
        </div>
      </div>
      <h2 class="settings-text">BetterVortex Settings // Work in Progress</h2>
    `;

    document.body.appendChild(settingsPage);
  });
}

const clanTitle = document.querySelector('.page-title');
const clanButton = document.createElement('button');

clanButton.innerText = 'BetterVortex Clans';
clanButton.className = 'vpro-nav-btn';
clanTitle.appendChild(clanButton);

clanButton.addEventListener('click', function () {
  // 1. Remove existing pages
  document.querySelectorAll(".page").forEach(item => item.remove());
  document.querySelectorAll("#v-thm-mn").forEach(item => item.remove());
  // 2. Create container and inject structure using a template string
  const clanPage = document.createElement('div');
  clanPage.className = 'clan-page';

  clanPage.innerHTML = `
    <nav class="clans-navbar">
        <ul class="button-list">
                <li class="stn-nav-btn">Clan1</li>
                <li class="stn-nav-btn">Clan2</li>
                <li class="stn-nav-btn">Clan3</li>
                <li class="stn-nav-btn">Clan4</li>
        </ul>
    </nav>
    <div class="clans-wrapper">
        <div class="clans-header">
                <div class="clan-welcome">
                        <span class="clan-img">Clan Image & Banner</span>
                        <h2 class="clan-title">Clan title</h2>
                        <h4 class="clan-creator">Klingri</h4>
                        <p class="clan-detail">Members:</p>
                        <a class="clan-a">100</a>
                        <p class="clan-detail">Rank:</p>
                        <a class="clan-a">Tester</a>
                        <button class="clan-create">Create Clan</button>
                        <button class="clan-menu">Clan Menu</button>
                </div>

                <div class="clan-submenus">
                    <ul class="clan-submenu-list">
                        <li class="clan-submenu">About</li>
                        <li class="clan-submenu">Store</li>
                        <li class="clan-submenu">Games</li>
                        <li class="clan-submenu">Affiliates</li>
                    
                    </ul>
                </div>

                <div class="clan-shout-box">
                    <h3 class="clan-shout-msg">Shout</h3>
                    <input class="shout-box" placeholder="Enter your shout"></input>
                    <button class="clan-shout-btn">Clan Shout</button>
                </div>

                <div class="clan-descrp-box">
                    <h3 class="clan-descrp-msg">Description</h3>
                    <p class="clan-description">Lorem Ipsum Clan</p>
                </div>

                <div class="members-box">
                    <h3 class="members-msg">Members (100)</h3>
                    <p class="clan-description">Lorem Ipsum Clan</p>
                </div>

        </div>
    
    
    </div>
    <h2 class="settings-text">BetterVortex Clans // Work in Progress</h2>`;

  document.body.appendChild(clanPage)

});

const debugTitle = document.querySelector('.page-title');
if (!debugTitle) return;

const debugButton = document.createElement('button');
debugButton.textContent = 'BetterVortex Debug';
debugButton.className = 'vpro-nav-btn';
debugTitle.appendChild(debugButton);

debugButton.addEventListener('click', () => {
  // 1. Clean up existing pages safely
  document.querySelectorAll('.page, #v-thm-mn').forEach((el) => el.remove());

  // 2. Create and append the debug page container
  const debugPage = Object.assign(document.createElement('div'), {
    className: 'debug-page',
    innerHTML: `
            <nav class="settings-navbar"></nav>
            <div class="settings-wrapper"></div>
            <h2 class="settings-text">BetterVortex Debug // Work in Progress</h2>
        `.trim(),
  });

  document.body.appendChild(debugPage);
});

// Optional: Enable back button functionality if the element exists
const gobackBtn = document.querySelector('.vpro-set-btn');
if (gobackBtn) {
  gobackBtn.addEventListener('click', () => {
    window.location.href = 'https://playvortex.io/settings';
  });
}

// 1. Greeting Dismissal
const greetingTxt = document.querySelector('#home-greeting');

if (greetingTxt) {
  const dismissGreeting = document.createElement('button');
  dismissGreeting.type = 'button';
  dismissGreeting.innerText = 'Dismiss greeting';
  dismissGreeting.className = 'vpro-nav-btn';

  // Place the button right before the greeting text, then remove the greeting text on click
  greetingTxt.before(dismissGreeting);

  dismissGreeting.addEventListener('click', () => {
    greetingTxt.remove();
    dismissGreeting.remove();
  });
}


// 2. Settings Redirect Button (uncommented and fixed)
const myButton = document.querySelector('.vpro-set-btn');

if (myButton) {
  myButton.addEventListener('click', () => {
    window.location.href = 'https://playvortex.io/settings';
  });
}


// 3. Toggle Button Example
const settingBox = document.querySelector('setting-box');

if (settingBox) {
  const settingButton = document.createElement('button');
  settingButton.type = 'button';
  settingButton.className = 'setting-btn';

  let isOn = false;

  const updateButtonText = () => {
    settingButton.textContent = isOn ? 'On' : 'Off';
  };

  updateButtonText();

  settingButton.addEventListener('click', () => {
    isOn = !isOn;
    updateButtonText();
    // Optional: console.log("Button clicked, state is now:", isOn);
  });

  // Actually insert the button into the DOM (e.g., right after settingBox)
  settingBox.after(settingButton);
}
