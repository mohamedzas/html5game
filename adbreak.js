if (showad == 1) {
    //window.onload = function () {
    var s = document.createElement("script");
    s.setAttribute("async", "");
    s.setAttribute("data-ad-client", "ca-pub-2622226100196993");
    s.setAttribute("data-ad-frequency-hint", "30s");
    s.setAttribute("data-ad-channel", "4945301071");
    //    s.setAttribute("data-adbreak-test", "on");
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    document.head.appendChild(s);
    //}

    window.adsbygoogle = window.adsbygoogle || [];
    const adBreak = adConfig = function(o) {
        adsbygoogle.push(o);
    }
    adConfig({
        preloadAdBreaks: 'on',
        sound: 'on', // This game has sound
        onReady: () => {
            //        showNextAd()
            //        console.log("ready");
        }, // Called when API has initialised and adBreak() is ready
    });

    function showNextAd() {
        //    console.log("showNextAd")
        adBreak({
            type: 'start',
            name: 'start-game',
            beforeAd: () => {
                pauseGame()
            }, // You may also want to mute thegame's sound.
            afterAd: () => {
                resumeGame()
            }, // resume the game flow.
            adBreakDone: (placementInfo) => {
                console.log("adBreak complete ");
                console.log(placementInfo.breakType);
                console.log(placementInfo.breakName);
                console.log(placementInfo.breakFormat);
                console.log(placementInfo.breakStatus);
            },
        });
    }

    function showRewardAd() {
        //    console.log(1212)
        //    console.log("showRewardAd")
        adBreak({
            type: 'reward',
            name: 'reward',
            beforeAd: () => {
                pauseGame()
            }, // You may also want to mute thegame's sound.
            afterAd: () => {
                resumeGame()
            }, // resume the game flow.
            beforeReward: (showAdFn) => {
                //            showNextAd() 
                showAdFn();
                rewardpauseGame()
            }, // You may also want to mute thegame's sound.
            adDismissed: () => {
                rewardfailedGame()
            },
            adViewed: () => {
                rewardresumeGame()
            }, // resume the game flow.
            adBreakDone: (placementInfo) => {
                console.log("adBreak complete ");
                console.log(placementInfo.breakType);
                console.log(placementInfo.breakName);
                console.log(placementInfo.breakFormat);
                console.log(placementInfo.breakStatus);
            },
        });
    }
} else if (showad == 2) {
    function showNextAd() {
        console.log("paused")
        soundstart = 1
        //        game.scene.scenes[pageNo].scene.pause()
        music.pause()
        clicksound.pause();
        window[preroll.config.loaderObjectName].refetchAd(myResumeGameFunction);
        //        game.scene.scenes[pageNo].scene.pause()
    }
}