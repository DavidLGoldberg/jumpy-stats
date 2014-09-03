# jumpy-stats
Sample code to OCR my project's stats inspired by John Resig's talk on Japanese art that I saw at etsy.

## Background
I have been saving little cmd-shift-4 mac screenshots of the upper right hand corner of my screen after periodically checking atom.io/packages/jumpy when I'm bored.

!() image here...

I check for # of downloads and # of stars.

I thought I would *maybe* manually plot them, but OCR is cooler.
YES, I of course first thought about curl or wget for this data.  That's not fun, and this isn't mission critical data here.

## Format of image
The snapshot includes the day of the week and time.

It optionally includes some garbage text for bookmarks, open tabs, and my name if I'm signed in at the time.

## Install
```
brew install tesseract --all-languages
npm install nodecr
```

## Run ocr utility on an image
```
node ocr.js <path-to-image>
```
