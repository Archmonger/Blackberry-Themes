# Blackberry OG Themes
CSS changes to many popular home theater services. Flat and minimal, cleans up unneeded clutter, and fixes many UI issues on desktop and mobile. 

**Installation:**
For services that don't allow native CSS themes, you can edit your Nginx configuration to add in the CSS. One method is to download the CSS to your root directory and href it.
```
sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://mydomain.com/css/PlexMobile.css"> </head>';
sub_filter_once on;
```

**Screenshots:**
Images are available within the repo's `Screenshots` folder.

**Last Tested Version:**
<br/>Plex: 1.13.5.5332
<br/>Ombi: 3.0.3477
<br/>Synclounge: 2.0.0
<br/>Filebrowser: 1.9.0
