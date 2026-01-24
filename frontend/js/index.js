const HomeButton = document.getElementById("goHome");
HomeButton.addEventListener('click', function() {
    // Redirect the user to the desired URL
    window.location.href = "./index.html";
});

const LogoutButton = document.getElementById("logout");
LogoutButton.addEventListener('click', function() {
    // Redirect the user to the desired URL
    window.location.href = "./splashScreen.html";
});


const WorkButton = document.getElementById("work");
WorkButton.addEventListener('click', function() {
    // Redirect the user to the desired URL
    window.location.href = "./work.html";
});


// --- World Chat (frontend-only UI) ---
const chatArea = document.getElementById("chat-area");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

// TEMP: you’ll replace these with real account data later
const currentUser = {
  username: document.getElementById("username")?.textContent?.trim() || "Guest",
  isAdmin: true,           // toggle for testing
  countryCode: "CA"        // placeholder for future flags
};

// Optional: convert country code to emoji flag (works for ISO 2-letter codes)
function countryCodeToFlagEmoji(code) {
  if (!code || code.length !== 2) return "";
  const upper = code.toUpperCase();
  const A = 0x1F1E6;
  const first = upper.charCodeAt(0) - 65 + A;
  const second = upper.charCodeAt(1) - 65 + A;
  return String.fromCodePoint(first, second);
}

function formatTimestamp(date = new Date()) {
  // Example: 07:32 PM
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function appendChatMessage({ username, isAdmin, countryCode, text, time }) {
  const wrapper = document.createElement("div");
  wrapper.className = "chat-msg";

  const meta = document.createElement("div");
  meta.className = "chat-meta";

  const adminIcon = isAdmin ? "👑" : "";
  const flag = countryCodeToFlagEmoji(countryCode);

  meta.textContent = `${adminIcon} ${flag} ${username} [${time}]:`.replace(/\s+/g, " ").trim();

  const msg = document.createElement("div");
  msg.className = "chat-text";
  msg.textContent = text; // textContent = safe (prevents HTML injection)

  wrapper.appendChild(meta);
  wrapper.appendChild(msg);

  chatArea.appendChild(wrapper);

  // auto-scroll to newest message
  chatArea.scrollTop = chatArea.scrollHeight;
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = chatInput.value.trim();
  if (!text) return;

  appendChatMessage({
    username: currentUser.username,
    isAdmin: currentUser.isAdmin,
    countryCode: currentUser.countryCode,
    text,
    time: formatTimestamp()
  });

  chatInput.value = "";
  chatInput.focus();
});

// Optional: add a starter/system message
appendChatMessage({
  username: "System",
  isAdmin: false,
  countryCode: "",
  text: "Welcome to World Chat. Be chill. No NSFW.",
  time: formatTimestamp()
});

