// ==UserScript==
// @name         Sort menu for arist channels on YouTube
// @namespace    https://github.com/adeleine1412
// @version      1.8
// @description  add the sort menu to artist channels, as it is hidden from them
// @author       adeleine
// @match        https://www.youtube.com/*
// @license      MIT
// @resource     css https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/css/style.min.css
// @resource     html https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/html/sort-menu.html
// @updateURL    https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/index.js
// @downloadURL  https://github.com/adeleine1412/youtube-artist-sort-menu/raw/master/index.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  // Load latest styles from the repository
  GM_addStyle(GM_getResourceText("css"));

  // Note selction and observer options
  const targetNode = document.querySelector('body');
  const config = { attributes: true, childList: true, subtree: true };

  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {

      // Skip if it has the default sort-menu (non-artist channels)
      if (document.querySelector('#sort-menu').innerHTML == "") {

        // Create new element and append html code from the github rebo
        let sort_menu = document.querySelector('#sort-menu');
        let html = document.createElement('div');
        html.innerHTML = GM_getResourceText("html");
        sort_menu.appendChild(html);

        // Click event to hide dropdown when clicking outside of it
        window.addEventListener('click', function (e) {
          document.querySelector('.adeleine-sort-menu-wrapper>.dropdown').classList.remove('active');
        });

        // Show the dropdown and stop propagation to the event above
        document.querySelector('.adeleine-sort-menu').addEventListener('click', function (e) {
          e.stopPropagation();
          document.querySelector('.adeleine-sort-menu-wrapper>.dropdown').classList.toggle('active');
        });
      }
    }
  };

  // Create an observer instance linked to the callback function and start observing
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);

})();
