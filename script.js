
const pages = {
  home: {
    title: "Welcome to the Garden!",
    subtitle: "Let's make your community bloom. 🌸"
  },
  welcome: {
    title: "Welcome Messages",
    subtitle: "Make every new member feel at home. 🌷"
  },
  commands: {
    title: "Garden Commands",
    subtitle: "Discover what Gigi can do. 🎀"
  },
  settings: {
    title: "Garden Settings",
    subtitle: "Make this little corner your own. 💗"
  }
};

function showPage(pageName) {
  const page = pages[pageName];

  if (!page) return;

  document.getElementById("page-title").textContent = page.title;
  document.querySelector(".subtitle").textContent = page.subtitle;

  document.querySelectorAll(".nav").forEach(function(button) {
    button.classList.toggle(
      "active",
      button.dataset.page === pageName
    );
  });

  document.querySelectorAll(".page-panel").forEach(function(panel) {
    panel.hidden = true;
  });

  document.getElementById(pageName + "-panel").hidden = false;

  document.getElementById("garden-footer").hidden = pageName !== "home";
}

document.querySelectorAll(".nav").forEach(function(button) {
  button.addEventListener("click", function() {
    showPage(button.dataset.page);
  });
});

document.querySelectorAll("[data-go]").forEach(function(button) {
  button.addEventListener("click", function() {
    showPage(button.dataset.go);
  });
});

// Live welcome-message preview
const welcomeText = document.getElementById("welcome-text");
const welcomePreview = document.getElementById("welcome-preview");

welcomeText.addEventListener("input", function() {
  welcomePreview.textContent = welcomeText.value;
});

// Save welcome settings in this page
document.getElementById("welcome-save").addEventListener("click", function() {
  const enabled = document.getElementById("welcome-enabled").checked;
  const channel = document.getElementById("welcome-channel").value.trim();

  document.getElementById("welcome-status").textContent =
    "🌷 Settings prepared! Messages: " +
    (enabled ? "enabled" : "disabled") +
    ". Channel: " +
    (channel || "not specified") +
    ".";
});

// Save dashboard appearance settings
document.getElementById("settings-save").addEventListener("click", function() {
  const name = document.getElementById("garden-name").value.trim();
  const theme = document.getElementById("garden-theme").value;

  document.getElementById("settings-status").textContent =
    "🌸 Settings updated for " +
    (name || "your garden") +
    "! Theme: " +
    theme +
    ".";
});

// Discord login placeholder
document.getElementById("discord-login").addEventListener("click", function() {
  alert("🌸 Discord login will be connected when you set up the bot's authentication.");
});

// Open the Dashboard first
showPage("home");
const pages = {
  home: {
    title: "Welcome to the Garden!",
    subtitle: "Let's make your community bloom. 🌸"
  },
  welcome: {
    title: "Welcome Messages",
    subtitle: "Make every new member feel at home. 🌷"
  },
  commands: {
    title: "Garden Commands",
    subtitle: "Discover what Gigi can do. 🎀"
  },
  settings: {
    title: "Garden Settings",
    subtitle: "Make this little corner your own. 💗"
  }
};

function showPage(pageName) {
  const page = pages[pageName];

  if (!page) return;

  document.getElementById("page-title").textContent = page.title;
  document.querySelector(".subtitle").textContent = page.subtitle;

  document.querySelectorAll(".nav").forEach(function(button) {
    button.classList.toggle(
      "active",
      button.dataset.page === pageName
    );
  });

  document.querySelectorAll(".page-panel").forEach(function(panel) {
    panel.hidden = true;
  });

  document.getElementById(pageName + "-panel").hidden = false;

  document.getElementById("garden-footer").hidden = pageName !== "home";
}

document.querySelectorAll(".nav").forEach(function(button) {
  button.addEventListener("click", function() {
    showPage(button.dataset.page);
  });
});

document.querySelectorAll("[data-go]").forEach(function(button) {
  button.addEventListener("click", function() {
    showPage(button.dataset.go);
  });
});

// Live welcome-message preview
const welcomeText = document.getElementById("welcome-text");
const welcomePreview = document.getElementById("welcome-preview");

welcomeText.addEventListener("input", function() {
  welcomePreview.textContent = welcomeText.value;
});

// Save welcome settings in this page
document.getElementById("welcome-save").addEventListener("click", function() {
  const enabled = document.getElementById("welcome-enabled").checked;
  const channel = document.getElementById("welcome-channel").value.trim();

  document.getElementById("welcome-status").textContent =
    "🌷 Settings prepared! Messages: " +
    (enabled ? "enabled" : "disabled") +
    ". Channel: " +
    (channel || "not specified") +
    ".";
});

// Save dashboard appearance settings
document.getElementById("settings-save").addEventListener("click", function() {
  const name = document.getElementById("garden-name").value.trim();
  const theme = document.getElementById("garden-theme").value;

  document.getElementById("settings-status").textContent =
    "🌸 Settings updated for " +
    (name || "your garden") +
    "! Theme: " +
    theme +
    ".";
});

// Discord login placeholder
document.getElementById("discord-login").addEventListener("click", function() {
  alert("🌸 Discord login will be connected when you set up the bot's authentication.");
});

// Open the Dashboard first
showPage("home");
