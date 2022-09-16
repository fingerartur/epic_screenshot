# Known issues

## 1 - CORS problem when video comes from another domain
Due to cross-origin video, JS throws error when trying to paint video frame to canvas.

```
Error: The canvas has been tainted by cross-origin data
```

E.g. tiktok.com

## 2 - Iframe players
Video element cannot be found, because it is hidden inside an iframe,

([Video Screenshot extension](https://chrome.google.com/webstore/detail/video-screenshot/ppkojackhibeogijphhfnamhemklmial) does not have this problem)


## 3 - black screenshot
Screenshot is taken, but is it completely black always. Cause unknown.

E.g. netfix.com

([Video Screenshot extension](https://chrome.google.com/webstore/detail/video-screenshot/ppkojackhibeogijphhfnamhemklmial) does not have this problem)

## Sites that work well
youtube.com, twitch.com, vimeo.com, instagram.com, facebook.com
