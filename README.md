# Epic screenshot

Epic screenshot is a Chrome extension for taking screenshots of video on any site.

Chrome web store: [link](https://chrome.google.com/webstore/detail/epic-screenshot/okpnppgjobiijpfknhoacmpmjkoobhid)

**This extension is deprecated, I recommend using [Video Screenshot extension](https://chrome.google.com/webstore/detail/video-screenshot/ppkojackhibeogijphhfnamhemklmial) which is better.**

## Details

Press `Ctrl+Shift+S` or `Cmd+Shift+S` or `Alt+Shift+S` to take the screenshot.

On some sites, these combos may not work, instead you can use `Ctrl+Shift+.` or `Cmd+Shift+.` or `Alt+Shift+.` or `Ctrl+Shift+,` or `Cmd+Shift+,` or `Alt+Shift+,`.

Works in full-screen. Quality of the screenshot is the same as of the video.
If multiple videos are playing on the page, the one with the largest width and height (actually with x height) will be screenshotted.

Known issues:
It may not work on some sites such as Netflix.com or Tiktok.com due to security reasons.


## Setup
```
npm i
```

## Develop
```
npm run build
```
Chrome > Extensions > Load unpacked

Read about [developing extensions](https://developer.chrome.com/docs/extensions/mv3/getstarted/).

## Publish
```
npm run pack
```

Read about [publishing extensions](https://developer.chrome.com/docs/webstore/publish/).

## Related works

Better ones:
- https://chrome.google.com/webstore/detail/video-screenshot/ppkojackhibeogijphhfnamhemklmial Looks great, works also on netflix, has more features

Worse ones:
- https://chrome.google.com/webstore/detail/video-screenshot/cenfemgbpgfagommeifcbjcpaeefnnao (does not work in full screen)
- https://chrome.google.com/webstore/detail/videoshot-capture-video-s/deophkhmpgfkfgaalnibkmimmcjpdbhm (no longer installable)
- https://chrome.google.com/webstore/detail/capture-video-element/ikeochnpamfhkpmnineadmccfnaicacl (does not work in full screen, auto-uploads to Gyazo website instead of saving to disk)
- https://chrome.google.com/webstore/detail/video-screenshot/okbncahhjihmnjpiadepoioodfnfanjk (not in english)
- https://chrome.google.com/webstore/detail/video-screenshot/gmehbdfomfohmlajndnopdkmcnlonjmp (does not work in full screen, contains player controls)

Worse, Youtube only:
- https://chrome.google.com/webstore/detail/youtube-image-downloader/bjchdihmmgfbfheblpmfpaojmjchdioi
- https://chrome.google.com/webstore/detail/screenshot-youtube/gjoijpfmdhbjkkgnmahganhoinjjpohk
- https://chrome.google.com/webstore/detail/youtube-screenshot/admjdaoijfccdllogfnddnllkghmkpfb
- https://chrome.google.com/webstore/detail/youtube-screenshot-button/ehehmcocpegbmagfhajbmeofolnpdfla
