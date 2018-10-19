# Blackberry Flat Themepack (BBF)
CSS changes to many popular home theater services. Flat and minimal, cleans up unneeded clutter, and fixes many UI issues on desktop/mobile. In the case of Plex, it creates a whole new mobile interface (WebUI and video player), and modifies the desktop UI to better fit within OrganizrV2. For those who do not want OrganizrV2 specific view enhancements in `bbf_plex.css`, such as hiding the user icon, please use [Improved Plex Mobile CSS](https://github.com/Archmonger/Improved-Plex-Mobile-CSS).

## **Screenshots**<br/>
Images are available within the `Screenshots` folder.

**Custom Icons for OrganizrV2**<br/>
Custom icons are available within the `Icons` folder. These are NOT required, but may prove useful.

## **More Information**

| Service | Last Tested Version | Requires Nginx Subfilter |
| ------------- | :-------------: | :-------------: |
| Plex | 1.13.8.5395 | YES |
| Ombi | 3.0.3477 | NO |
| Synclounge | 2.0.0 | YES |
| Filebrowser | 1.9.0  | NO |

## **Upcoming Themes**<br/>
Deluge, Jackett, Flood (rTorrent WebUI), OrganizrV2, Tautulli, Sonarr/Radarr/Lidarr, Unraid.

## **Installation**<br/>
### Plex, Synclounge<br/>
For services that don't allow native CSS themes, you can edit your Nginx configuration to inject CSS. One method is to download the CSS to your root directory or css subfolder and href it. This can be accomplished with sub_filter (http_sub_module). 
```
proxy_set_header Accept-Encoding "";
sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://mydomain.com/css/bbf_plex.css"> </head>';
sub_filter_once on;
```
### Ombi<br/>
Settings > Configuration > Customization > Preset Themes > omBlur BROKEN
Replace `url=https://raw.githubusercontent.com/leram84/layer.Cake/master/ombi/css/omBlur.css">`
with `url=https://github.com/Archmonger/Blackberry-Flat/raw/master/bbf_ombi.css">`

**Credits**<br/>
Calendar day 15 icon made by [Freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)
<br/>Multiple users silhouette made by [Freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)
