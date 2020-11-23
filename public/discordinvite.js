/* eslint-disable no-undef */
chrome.runtime.onInstalled.addListener(function (object) {
  chrome.tabs.create({
    url: 'https://discord.gg/HPecVXeQrF',
    active: true
  });
});
