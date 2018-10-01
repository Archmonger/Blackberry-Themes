# Blackberry OG Themes
CSS changes to many popular home theater services. Flat and minimal, cleans up unneeded clutter, and fixes many UI issues on desktop. In the case of Plex, it creates a whole new mobile interface (WebUI and video player), and modifies the desktop UI to better fit within OrganizrV2. For those who do not want OrganizrV2 specific view enhancements in `bbog_plex.css`, such as hiding the user icon, please use [Improved Plex Mobile CSS](https://github.com/Archmonger/Improved-Plex-Mobile-CSS).

**Installation**
<br/>For services that don't allow native CSS themes, you can edit your Nginx configuration to add in the CSS. One method is to download the CSS to your root directory and href it. This can be accomplished with sub_filter (http_sub_module). 
```
sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://mydomain.com/css/PlexMobile.css"> </head>';
sub_filter_once on;
```
Another option available is to use [rawgit.com](https://rawgit.com) to host the CSS file for you.

**Screenshots**
<br/>Images are available within the `Screenshots` folder.

**Custom Icons for OrganizrV2**
<br/>Custom icons are available within the `Icons` folder. These are NOT required, but may prove useful.

**More Information**

| Service | Last Tested Version | Requires Nginx Subfilter |
| ------------- | :-------------: | :-------------: |
| Plex | 1.13.8.5395 | YES |
| Ombi | 3.0.3477 | NO |
| Synclounge | 2.0.0 | YES |
| Filebrowser | 1.9.0  | NO |

**Credits**
<br/>Calendar day 15 icon made by [Freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)
<br/>Multiple users silhouette made by [Freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)
