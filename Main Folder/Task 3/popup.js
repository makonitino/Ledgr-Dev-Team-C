document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("switch");

    // load saved state from storage
    chrome.storage.local.get("enabled", (data) => {
        const isEnabled = data.enabled ?? true; // default ON
        toggleSwitch.checked = isEnabled;

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: isEnabled ? "enable" : "disable" });
        });
    });

    toggleSwitch.addEventListener("change", () => {
        const isEnabled = toggleSwitch.checked;
        chrome.storage.local.set({ enabled: isEnabled }); // save state

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: isEnabled ? "enable" : "disable" });
        });
    });
});
