# Blackberry Flat Themepack (BBF)
CSS changes to many popular home theater services. Flat and minimal, cleans up unneeded clutter, and fixes many UI issues on desktop/mobile. In the case of Plex, it creates a whole new mobile interface (WebUI and video player), and modifies the desktop UI to better fit within OrganizrV2. For those who do not want OrganizrV2 specific view enhancements in `bbf_plex.css`, such as hiding the user icon, please use [Improved Plex Mobile CSS](https://github.com/Archmonger/Improved-Plex-Mobile-CSS).

## **Screenshots**<br/>
Images are available within the `Screenshots` folder.

## **Custom Icons for OrganizrV2**<br/>
Custom icons are available within the `Icons` folder. These are NOT required, but may prove useful.

## **Upcoming Themes**<br/>
Current Queue: Deluge, Jackett, OrganizrV2, Tautulli, Sonarr/Radarr/Lidarr/*-arr*, Unraid, Flood (rTorrent WebUI), Rutorrent.

## **Installation**<br/>
### Plex, Synclounge<br/>
For services that don't allow native CSS themes, you can edit your Nginx configuration to inject CSS. For automatic updating, you can use this repository's Github Pages address. Alteratively, you can download the CSS file to your domain and self-host it. This can be accomplished with sub_filter (http_sub_module). 
```
proxy_set_header Accept-Encoding "";
sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://archmonger.github.io/Blackberry-Flat/bbf_plex.css"> </head>';
sub_filter_once on;
```
### Ombi<br/>
1) Navigate to Settings > Configuration > Customization > Custom CSS Link<br/>
2) Paste in `https://archmonger.github.io/Blackberry-Flat/bbf_ombi.css`<br/>
3) Make sure to have `Preset Themes` set to `Please Select` (disabled).<br/>
4) Clear your browser cache. If using Cloudflare for your domain, make sure to clear Cloudflare cache as well.

## **More Information**

| Service | Last Tested Version | Requires Nginx Subfilter |
| ------------- | :-------------: | :-------------: |
| Plex | 1.13.8.5395 | YES |
| Ombi | 3.0.3919 | NO |
| Synclounge | 2.0.0 | YES |
| Filebrowser | 1.9.0  | NO |

## **Credits**<br/>
Calendar day 15 icon made by [Freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)
<br/>Multiple users silhouette made by [Freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)
