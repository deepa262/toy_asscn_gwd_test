 $(function(){
  // WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.flashAdImpressionTrack('banner-ad')");
  // WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideTimeSeconds(20)");

  $("#pi").on("click", function(){
    console.log("pi button clicked");
          window.open("http://enstilar.com/pdf/enstilar-pi.pdf");
     WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('https://www.regeneron.com/sites/default/files/Dupixent_FPI.pdf', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");

  });
          
  var pressTimer;

  $("#overall_mask").on("touchend", function(){
    clearTimeout(pressTimer);
    return false;
  }).on("touchstart", function(){
    pressTimer = window.setTimeout(function(){
      WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideActivateLauncherPanel('100', '700')");
    },1000)
    return false;
  });

});

function startScrolling(waitTime){
  delayScrollingStart = waitTime;
  setTimeout(function autoScroll(delayScrollingStart){
    ascroll = setInterval(function(){
      elem = $("#isi")[0];
      if (elem.scrollTop != 3200){
        elem.scrollTop += 1;
      }
    }, 28);
  }, delayScrollingStart);
}

// Begin non-ISI animation code


function frame1eyeAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame1_eye, 0.3, {opacity:0})
}
function frame1systemAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame1_system, 0.4, {opacity:0})
}
function frame2Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame2, 0.5, {opacity:0})
}
function frame2handsAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame2_hands, 0.4, {opacity:0}, '+=0.7')
}
function frame2handsupAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame2_handsup, 0.3, {opacity:0})
}
function textcolorAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time, repeat:2});
  tl
  .from(textcolor, 1, {opacity:0}, '-=1')
 .to(textcolor, 1, {opacity:1}, '-=2')
}
function frame3Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame3, 0.5, {opacity:0}, '-=1.2')
}

function animate(){
   startScrolling(5000);
    frame1eyeAppear(6);
    frame1systemAppear(8);
   frame2Appear(10);
    frame2handsAppear(12);
    frame2handsupAppear(13);
    textcolorAppear(14);
    frame3Appear(20);
}
// End non-ISI animation code

function onWallboardIdleSlideDisplay(){
  console.log("onWallboardIdleSlideDisplay");
}

function onWallboardIdleSlideTimerStart(){
  console.log("onWallboardIdleSlideTimerStart");
}

function onWallboardIdleSlideTimerStop(){
  clearInterval(ascroll);
}

animate();
