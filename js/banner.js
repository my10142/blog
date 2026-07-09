// Inject video banner on homepage
(function() {
  function injectBanner() {
    var header = document.getElementById('page-header');
    if (!header || document.getElementById('banner-video')) return;

    var video = document.createElement('video');
    video.id = 'banner-video';
    video.src = '/blog/media/banner.mp4';
    video.poster = '/blog/img/banner-poster.jpg';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    video.load();
    var playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(function() {
        video.controls = false;
      });
    }

    var overlay = document.createElement('div');
    overlay.id = 'banner-overlay';

    header.insertBefore(overlay, header.firstChild);
    header.insertBefore(video, header.firstChild);
  }

  document.addEventListener('DOMContentLoaded', injectBanner);
  document.addEventListener('pjax:complete', injectBanner);
})();
