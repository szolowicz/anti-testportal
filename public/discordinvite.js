/* eslint-disable no-undef */
chrome.runtime.onInstalled.addListener((object) => {
  chrome.tabs.create({
    url: 'https://discord.gg/HPecVXeQrF',
    active: true
  });
});
