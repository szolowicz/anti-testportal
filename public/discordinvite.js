/* eslint-disable no-undef */
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason !== "install") return;

  chrome.tabs.create({
    url: 'https://discord.gg/HPecVXeQrF',
    active: true
  });
});
