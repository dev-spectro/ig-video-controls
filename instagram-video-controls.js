// ==UserScript==
// @name         Instagram video player with basic control of volume and skipping.
// @namespace    https://github.com/dev-spectro/ig-video-controls/
// @version      1.0
// @icon         https://www.instagram.com/static/images/ico/favicon-192.png/b407fa101800.png
// @description  Adiciona controles ao player de vídeo do instagram
// @author       Emerlender
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
            console.log('Here you go enjoy your democracy at instagram with full control of player, Trump 2020 KEKW')
            var videoList = document.getElementsByTagName("video");
    setInterval(function(){
            if(videoList[0]){
        videoList[0].setAttribute("controls", "controls");
        videoList[0].style.zIndex = "1";
            }
    }, 1000);
})();

