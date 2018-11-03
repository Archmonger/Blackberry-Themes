# Blackberry Flat Themepack (BBF)
CSS changes to many popular home theater services. Flat and minimal, cleans up unneeded clutter, and fixes many UI issues on desktop/mobile. In the case of Plex, it creates a whole new mobile interface (WebUI and video player), and modifies the desktop UI to better fit within OrganizrV2.<br/>

## **Theme Requests**<br/>
Requests can be made through [Feathub](https://feathub.com/Archmonger/Blackberry-Flat)! <br/>

## **Screenshots**<br/>
Images are available within the `Screenshots` folder.<br/>

## **Upcoming**<br/>
**Theme Queue:** OrganizrV2, Tautulli, Transmission, Sonarr/Radarr/Lidarr/Logarr/*-arr*, Unraid, Flood (rTorrent WebUI), Rutorrent, Nextcloud, Deluge Desktop Client.<br/>
**Mobile Queue:** Jackett mobile, Deluge mobile, Rework on Plex mobile.<br/>

## **Installation**<br/>
### Plex, Synclounge, Deluge, Jackett<br/>
For services that don't allow native CSS themes, you can edit your Nginx configuration to inject CSS. For automatic updating, you can use this repository's Github Pages address. This can be accomplished with sub_filter (http_sub_module). Replace the `XXXXX` with the name of the service you are using.<br/>
```
proxy_set_header Accept-Encoding "";
sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://archmonger.github.io/Blackberry-Flat/bbf_XXXXX.css"> </head>';
sub_filter_once on;
```
### **Ombi**<br/>
1) Navigate to Settings > Configuration > Customization > Custom CSS Link.<br/>
2) Paste in `https://archmonger.github.io/Blackberry-Flat/bbf_ombi.css`.<br/>
3) Make sure to have `Preset Themes` set to `Please Select` (disabled).<br/>

### **Filebrowser**<br/>
To allow for automatic theme updating it is recommended you use the subfilter instructions found in the `Plex` instructions above. But, if you would rather use Filebrowser's integrated CSS options then perform the following:<br/>
1) Navigate to Settings > Global Settings > Custom Stylesheet.<br/>
2) Copy the code from `https://raw.githubusercontent.com/Archmonger/Blackberry-Flat/master/bbf_filebrowser.css` into your clipboard.<br/>
3) Paste.<br/>

## **Organizr Ontop of Burry**<br/>
To allow for automatic theme updating it is recommended you use the subfilter instructions found in the `Plex` instructions above. This requires you to run Organizr within a reverse proxy. But, if you would rather use Organizr's integrated CSS options then perform the following:<br/>
1) Navigate to Settings > Customize > Marketplace.<br/>
2) Install Plex Theme by Grant Burry.<br/>
3) Navigate to Settings > Customize > Colors & Themes > Theme.<br/>
4) Select `Plex`<br/>
5) Navigate to Settings > Customize > Custom CSS.<br/>
6) Copy the code from `https://raw.githubusercontent.com/Archmonger/Blackberry-Flat/master/bbf_organizr_ontop_of_burry.css` into your clipboard.<br/>
7) Paste.<br/>
_Note: Make sure NOT to change i=40 to i=60, as Burry recommends. If you have done so already, please revert. Docker users must use `organizrtools/organizr-v2:latest` and install Burry's theme from the marketplace._<br/>

## **More Information**<br/>
**What is "in Organizr"**<br/>
Most BBF themes come in a In Organizr variant, which allows them to seemlessly fit in to the Organizr theme `BBF_Organizr.css` without appearing as if they are an iFramed service. This is accomplished by removing logos, modifying the navbar, as well as other miscellaneous in-site tweaks depending on the specific service. On rare occasions, some functionality may be removed in order to maintain theme consistency and be optimized for SSO-only usage. For example in the case of Ombi, this can be seen with the removal of the login screen's rotating backgrounds, the deletion of the loading bar, and removal of the log out menu.<br/>

**Subfilter is set up exactly as above, but themes are not working!**<br/>
Subfilter will not function while gzip is enabled. Please confirm whether or not gzip is enabled within nginx. If so, disable gzip.<br/>
_Note to Deluge users when subdir reverse proxying on a Windows host machine:_ Deluge on Windows currently has issues with reverse proxies. The only known solution is to copy the code found in `bbf_deluge.css` to the end of deluge's default CSS file. This can be found in `%Program Files (x86)%\Deluge\deluge-1.3.15-py2.7.egg\deluge\ui\web\css`.<br/>

**Other themes not working?**<br/>
Please clear browser cache. If using Cloudflare, also clear Cloudflare cache.<br/>

**BBF Plex**<br/>
For those who do not want OrganizrV2 specific view enhancements in `bbf_plex.css`, such as hiding the user icon, please use [Improved Plex Mobile CSS](https://github.com/Archmonger/Improved-Plex-Mobile-CSS).<br/>

**Custom Icons for OrganizrV2**<br/>
Custom icons are available within the `Icons` folder. These are NOT required, but may prove useful.<br/>

**Last Tested**<br/>

| Service | Last Tested Version | Requires Nginx Subfilter |
| ------------- | :-------------: | :-------------: |
| Plex | 1.13.8.5395 | YES |
| Ombi | 3.0.3919 | NO |
| Synclounge | 2.0.0 | YES |
| Filebrowser | 1.9.0 | NO |
| Deluge WebUI | 1.3.15 | YES |
| Jackett | 0.10.398.0 | YES |
| Organizr | 2.0.0-beta.800 | NO |

## **Feathub Requests**<br/>
[![Feature Requests](http://feathub.com/Archmonger/Blackberry-Flat?format=svg)](http://feathub.com/Archmonger/Blackberry-Flat)<br/>

## **Credits**<br/>
Calendar day 15 icon made by [Freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)<br/>
Multiple users silhouette made by [Freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)<br/>
Raindrop made by [Freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)<br/>
