# Blackberry Flat Themepack (BBF)
CSS changes to many popular home theater services. Flat and minimal, cleans up unneeded clutter, and fixes many UI issues on desktop/mobile. In the case of Plex, it creates a whole new mobile interface (WebUI and video player), and modifies the desktop UI to better fit within OrganizrV2. For those who do not want OrganizrV2 specific view enhancements in `bbf_plex.css`, such as hiding the user icon, please use [Improved Plex Mobile CSS](https://github.com/Archmonger/Improved-Plex-Mobile-CSS).

## **Screenshots**<br/>
Images are available within the `Screenshots` folder.

## **Custom Icons for OrganizrV2**<br/>
Custom icons are available within the `Icons` folder. These are NOT required, but may prove useful.

## **Upcoming Themes**<br/>
Current Queue: Jackett, OrganizrV2, Tautulli, Transmission, Sonarr/Radarr/Lidarr/*-arr*, Unraid, Flood (rTorrent WebUI), Rutorrent, Deluge Desktop Client.

## **Installation**<br/>
### Plex, Synclounge, Deluge<br/>
For services that don't allow native CSS themes, you can edit your Nginx configuration to inject CSS. For automatic updating, you can use this repository's Github Pages address. This can be accomplished with sub_filter (http_sub_module). Replace the `XXXXX` with the name of the service you are using.
```
proxy_set_header Accept-Encoding "";
sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://archmonger.github.io/Blackberry-Flat/bbf_XXXXX.css"> </head>';
sub_filter_once on;
```
### Ombi<br/>
1) Navigate to Settings > Configuration > Customization > Custom CSS Link<br/>
2) Paste in `https://archmonger.github.io/Blackberry-Flat/bbf_ombi.css`<br/>
3) Make sure to have `Preset Themes` set to `Please Select` (disabled).<br/>
4) Clear your browser cache. If using Cloudflare for your domain, make sure to clear Cloudflare cache as well.

## **More Information**<br/>
**What is "in Organizr":** Most BBF themes come in a In Organizr variant, which allows them to seemlessly fit in to the Organizr theme `BBF_Organizr.css` without appearing as if they are an iFramed service. This is accomplished by removing logos, modifying the navbar, as well as other miscellaneous in-site tweaks depending on the specific service. On rare occasions, some functionality may be removed in order to maintain theme consistency. For example in the case of Ombi, this can be seen with the removal of the login screen's rotating backgrounds, or the deletion of the loading bar.

| Service | Last Tested Version | Requires Nginx Subfilter |
| ------------- | :-------------: | :-------------: |
| Plex | 1.13.8.5395 | YES |
| Ombi | 3.0.3919 | NO |
| Synclounge | 2.0.0 | YES |
| Filebrowser | 1.9.0  | NO |
| Deluge WebUI | 1.3.15  | YES |

## **Credits**<br/>
Calendar day 15 icon made by [Freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)
<br/>Multiple users silhouette made by [Freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)
