# Blackberry Flat Theme Pack (BBF)
CSS changes to many popular web services. Flat and minimal, cleans up unneeded clutter, and fixes many UI issues on desktop/mobile. Custom Icons for Organizr are available within the `Icons` folder. These are not required, but may prove useful.<br/>

## FAQ<br/>
[How do I use Blackberry Flat?](https://github.com/Archmonger/Blackberry-Flat#how-do-i-use-blackberry-flat)<br/>
[What is "in Organizr"?](https://github.com/Archmonger/Blackberry-Flat#what-is-in-organizr)<br/>
[My subfilter is set up exactly as above, but themes are not working?](https://github.com/Archmonger/Blackberry-Flat#my-subfilter-is-set-up-exactly-as-above-but-themes-are-not-working)<br/>
[My non-subfilter related themes are not working?](https://github.com/Archmonger/Blackberry-Flat#my-non-subfilter-related-themes-are-not-working)<br/>
[What does Blackberry Flat Plex do?](https://github.com/Archmonger/Blackberry-Flat#what-does-blackberry-flat-plex-do)<br/>
[Where can I make theme and icon requests?](https://github.com/Archmonger/Blackberry-Flat#where-can-i-make-theme-and-icon-requests)<br/>
[Where are the screenshots?](https://github.com/Archmonger/Blackberry-Flat#where-are-the-screenshots)<br/>
[What themes are upcoming?](https://github.com/Archmonger/Blackberry-Flat#what-themes-are-upcoming)<br/>
[How can I make my own BBF icons for Organizr?](https://github.com/Archmonger/Blackberry-Flat#how-can-i-make-my-own-bbf-icons-for-organizr)<br/>

## Recommended Configuration: Organizr Media Portal<br/>
A standard configuration that ties together all plex-related services into one visibily native package by utilizing Organizr SSO. Focuses on optimized usability and simplicity for users which have access to your Plex library.
* *OrganizrV2:* Depending on stylistic preference, use either [BBF Organizr](https://github.com/Archmonger/Blackberry-Flat#organizr-v2) or [BBF Organizr On Top of Burry](https://github.com/Archmonger/Blackberry-Flat#organizr-v2-on-top-of-burry), alongside [BBF Organizr Custom Icons](https://github.com/Archmonger/Blackberry-Flat#organizr-custom-icons). Set up Organizr SSO for Plex and Ombi. Utilize the Organizr homepage (Settings > Tab Editor > Homepage Items) as a dedicated calendar tab with Plex Now Playing underneath the calendar. Ensure that plex backend authentication is turned on (Settings >  System Settings > Main > Authentication > Authentication Backend). If you consider adding more elements to the homepage, consider making them only viewable by Co-Admins or Admins. This is to avoid unnecessary duplication of user-viewable data (ex. Recently added on both the Plex tab and Calendar tab).<br/>
* *Plex:* Use [BBF Plex in Organizr](https://github.com/Archmonger/Blackberry-Flat#non-integrated-themes). Make this the first Organizr tab, and set it to be the default tab. Have this tab be user viewable.<br/>
* *Ombi:* Use [BBF Ombi in Organizr](https://github.com/Archmonger/Blackberry-Flat#ombi). Have this tab be user viewable.<br/>
* *Synclounge:* Use [BBF Synclounge in Organizr](https://github.com/Archmonger/Blackberry-Flat#non-integrated-themes). Have this tab be user viewable.<br/>
* *Donate:* Use [BBF Organizr Custom Icons](https://github.com/Archmonger/Blackberry-Flat#organizr-custom-icons) to choose a donation button (Bitcoin/Paypal/Donate/Donate_Alternate). Set Organizr to open your donation link in a new window. Have this tab be user viewable.
* *Jackett:* Use [BBF Jackett](https://github.com/Archmonger/Blackberry-Flat#non-integrated-themes). Have this tab be viewable by ADMINS ONLY.<br/>
* *Deluge:* Use [BBF Deluge in Organizr](https://github.com/Archmonger/Blackberry-Flat#non-integrated-themes). Have this tab be viewable by ADMINS ONLY.<br/>
* *Filebrowser:* Use [BBF Filebrowser in Organizr](https://github.com/Archmonger/Blackberry-Flat#filebrowser). Have this tab be viewable by ADMINS ONLY.<br/>
*  *Tautulli:* Use [BBF Tautulli in Organizr](https://github.com/Archmonger/Blackberry-Flat#non-integrated-themes). Have this tab be viewable by ADMINS ONLY.<br/>

## Alternate Configuration: Standalone Themes<br/>
For those that do not wish to transform Organizr into a media portal, all themes exist without In Organizr optimizations. These non-"In Organizr" versions do not remove any UI elements or features, and simply focus on theming the original page to a traditional plex-like style for more typical applications. See [installation instructions](https://github.com/Archmonger/Blackberry-Flat#installation) or look through the [Blackberry Flat repository](https://github.com/Archmonger/Blackberry-Flat) to view what themes are available.<br/>
These themes are still visually compatible with `bbf_organizr.css` and `bbf_organizr_on_top_of_burry.css`.<br/>

## Installation<br/>
### [Non-Integrated Themes](http://nginx.org/en/docs/http/ngx_http_sub_module.html)<br/>
#### [Plex](https://www.plex.tv/), [Synclounge](https://github.com/samcm/synclounge), [Deluge](https://deluge-torrent.org/), [Jackett](https://github.com/Jackett/Jackett), [Tautulli](https://tautulli.com/)<br/>
For services that don't allow native CSS themes you must use [Nginx](https://nginx.org/en/download.html) to run these services behind a reverse proxy, then edit your configuration to inject CSS. This can be accomplished with sub_filter (http_sub_module). Replace the `XXXXX` with the name of the theme you are using, which can be found by looking through this repository. `In Organizr` variants are available for most CSS files.<br/>
```
proxy_set_header Accept-Encoding "";
sub_filter '</head>' '<link rel="stylesheet" type="text/css" href="https://archmonger.github.io/Blackberry-Flat/bbf_XXXXX.css"> </head>';
sub_filter_once on;
```
### [Ombi](https://github.com/tidusjar/Ombi)<br/>
1) Navigate to Settings > Configuration > Customization > Custom CSS.<br/>
2) Paste in `@import "https://archmonger.github.io/Blackberry-Flat/bbf_ombi.css";`. If using Organizr, change `bbf_ombi.css` to `bbf_ombi_in_organizr.css`.<br/>

_Note: Make sure to have Settings > Configuration > Customization > Preset Themes set to `Please Select` (disabled)._<br/>

### [Filebrowser](https://filebrowser.github.io/)<br/>
1) Navigate to Settings > Profile Settings > Custom Stylesheet.<br/>
2) Paste in `@import "https://archmonger.github.io/Blackberry-Flat/bbf_filebrowser.css";` at the **top** of the text box. If using Organizr, change `bbf_filebrowser.css` to `bbf_filebrowser_in_organizr.css`.<br/>

### [Organizr V2](https://github.com/causefx/Organizr)
1) Navigate to Settings > Customize > Custom CSS.<br/>
2) Paste in `@import "https://archmonger.github.io/Blackberry-Flat/bbf_organizr.css";` at the **top** of the text box.<br/>
3) Navigate to Settings > Customize > Colors and Themes.<br/>
4) Ensure Theme is set to `Organizr` and Style is set to `Dark`.<br/>

**_Optional:_ Better Styling**<br/>
1) Navigate to Settings > Customize > Login Page.<br/>
2) Enable `Minimal Login Screen`.<br/>
3) Navigate to Settings > Customize > Options.<br/>
4) Enable `Alternate Homepage Titles`.<br/>
5) Navigate to Settings > Customize > Notifications.<br/>
6) Change type to `lzi`.<br/>
7) Consider using [BBF Organizr Custom Icons](https://github.com/Archmonger/Blackberry-Flat#organizr-custom-icons).

### [Organizr V2 On Top of Burry](https://github.com/Burry/organizr-v2-plex-theme)<br/>
1) Navigate to Settings > Customize > Marketplace.<br/>
2) Install `Plex Theme` by Grant Burry.<br/>
3) Navigate to Settings > Customize > Colors & Themes > Theme.<br/>
4) Select `Plex`.<br/>
5) Navigate to Settings > Customize > Custom CSS.<br/>
6) Paste in `@import "https://archmonger.github.io/Blackberry-Flat/bbf_organizr_on_top_of_burry.css";` at the **top** of the text box. <br/>

_Note: Make sure NOT to change i=40 to i=60, as Burry recommends. If you have done so already, please revert. Docker users must use `organizrtools/organizr-v2:latest` and install Burry's theme from the marketplace._<br/>

### [Organizr](https://github.com/causefx/Organizr) [Custom Icons](https://github.com/Archmonger/Blackberry-Flat/tree/master/Icons)<br/>
1) Navigate to Settings > Tab Editor > Tabs<br/>
2) On each individual tab, click `Edit`.<br/>
3) For `Tab Image`, paste in `https://archmonger.github.io/Blackberry-Flat/Icons/bbf_XXXXX.png`. Replace the `XXXXX` with the name of the icon you are using, which can be found by looking through this repository's [Icons](https://github.com/Archmonger/Blackberry-Flat/tree/master/Icons) folder. A preview image containing all icons is available within this repository's [Screenshots](https://github.com/Archmonger/Blackberry-Flat/blob/master/Screenshots) folder.<br/>

**_Optional:_ Stylized Sidenav Logout Button**<br/>
1) Navigate to Settings > Customize > Custom CSS.<br/>
2) Paste in `@import "https://archmonger.github.io/Blackberry-Flat/Extras/bbf_organizr_logout_button.css";` at the **top** of the text box. <br/>

## FAQ<br/>
### How do I use Blackberry Flat?<br/>
Installation instructions for all supported services can be found [here](https://github.com/Archmonger/Blackberry-Flat#installation).

### What is "in Organizr"?<br/>
Most BBF themes come in a In Organizr variant, which allows them to seemlessly fit in to the Organizr theme `bbf_organizr.css` and `bbf_organizr_on_top_of_burry.css` without appearing as if they are an iFramed service. This is accomplished by removing logos, modifying the navbar to a standard size, optimize the interface for SSO usage, as well as other miscellaneous in-site tweaks depending on the specific service.<br/>
On occasion, some functionality may be removed in order to maintain theme consistency and be optimized for SSO-only usage. For example in the case of Ombi, this can be seen with the removal of the login screen's rotating backgrounds, smaller navbar, deletion of the loading bar, removal of the current user's username, and removal of the log out menu.<br/>
In contrast, non-"In Organizr" versions do not remove any UI elements or features, and simply focus on theming the original page to a traditional plex-like style for more typical applications.<br/>

### My subfilter is set up exactly as above, but themes are not working?<br/>
Subfilter will not function while gzip is enabled. Please confirm whether or not gzip is enabled within nginx. If so, disable gzip.<br/>
_Note to Deluge users when subdir reverse proxying on a Windows host machine:_ Deluge on Windows currently has issues with reverse proxies. If you wish to keep deluge on your domains subdir, you will need to copy the code found in `bbf_deluge.css` to the end of deluge's default CSS file. This can be found in `C:\Program Files (x86)\Deluge\deluge-1.3.15-py2.7.egg\deluge\ui\web\css`. Alternatively, you can move Deluge to a subdomain and use subfilter as demonstrated in the [installation instructions](https://github.com/Archmonger/Blackberry-Flat#non-integrated-themes) above.<br/>

### My non-subfilter related themes are not working?<br/>
Please clear browser cache. If using Cloudflare, also clear Cloudflare cache.<br/>

### What does Blackberry Flat Plex do?<br/>
While most themes aim to plexify the user interface, that would be irrational in the case of Blackberry Flat Plex. The focus of BBF Plex is to clean up clutter from within the Plex UI, modify the navbar to better fit BBF, and create a functional mobile site. For those who do not want enhancements found in BBF Plex, such as removing the Newscast or removing navbar transparency, please use [Improved Plex Mobile CSS](https://github.com/Archmonger/Improved-Plex-Mobile-CSS).<br/>

### Where can I make theme and icon requests?<br/>
Requests can be made through [Feathub](https://feathub.com/Archmonger/Blackberry-Flat)! <br/>

### Where are the screenshots?<br/>
Images are available within the [Screenshots](https://github.com/Archmonger/Blackberry-Flat/tree/master/Screenshots) folder.<br/>

### What themes are upcoming?<br/>
BBF will focus on previously queued themes, then will transition to popularity based feathub requests.<br/>
_Theme Queue:_ Sonarr/Radarr/Lidarr/Logarr/*-arr*, Discord Titanbot.<br/>
_Icon Queue:_ Handled when requested on Feathub.

### How can I make my own BBF icons for Organizr?<br/>
A photoshop document file (PSD) is provided for users who wish to make their own icons, as opposed to requesting for an icon to be created on [Feathub](https://feathub.com/Archmonger/Blackberry-Flat). This can be found in the Blackberry Flat repository's [Extras](https://github.com/Archmonger/Blackberry-Flat/tree/master/Extras) folder.<br/>

## More Information<br/>

### Last Tested<br/>

| Service | Last Tested Version | Requires Nginx Subfilter |
| ------------- | :-------------: | :-------------: |
| Plex | 1.14.1.5488 | YES |
| Ombi | 3.0.4119 | NO |
| Synclounge | 2.0.0 | YES |
| Filebrowser | 1.9.0 | NO |
| Deluge WebUI | 1.3.15 | YES |
| Jackett | 0.10.566.0 | YES |
| Organizr | 2.0.0-beta.800 | NO |
| Tautulli | 2.1.18 | YES |

### Feathub Requests<br/>
[![Feature Requests](http://feathub.com/Archmonger/Blackberry-Flat?format=svg)](http://feathub.com/Archmonger/Blackberry-Flat)<br/>

### **Credits**<br/>
Special thanks to [@Leram84](https://github.com/leram84) and [@goldenpipes](https://github.com/goldenpipes)<br/>
Jacket, Calendar day 15 icon, Security Camera, Piggy bank with Dollar Coins, Multiple users silhouette, Television, Submarine, Crane, Books stack of three, Home Icon Silhouette, Avocado, Newsletter, 3D, Open book, Open book top view, Music, Headphones with music, and Raindrop made by [Freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)<br/>
Folder made by [Kiranshastry](https://www.flaticon.com/authors/kiranshastry) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)<br/>
Headphones made by [Pixel Buddha](https://www.flaticon.com/authors/pixel-buddha) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)<br/>
Down arrow, Bitcoin Logo, and Utorrent made by [Dave Gandy](https://www.flaticon.com/authors/dave-gandy) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)<br/>
RSS symbol made by [Pixel Perfect](https://www.flaticon.com/authors/pixel-perfect) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)<br/>
Screwdriver and Wrench Crossed made by [Elegant Themes](https://www.flaticon.com/authors/elegant-themes) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)<br/>
Sofa and Cloud made by [Smashicons](https://www.flaticon.com/authors/smashicons) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)<br/>
Video Camera and Support made by [Good Ware](https://www.flaticon.com/authors/good-ware) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)<br/>
Wireless connection made by [srip](https://www.flaticon.com/authors/srip) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)<br/>
Toolbox and Desktop Computer made by [itim2101](https://www.flaticon.com/authors/itim2101) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)<br/>
Expand Button made by [Google](https://www.flaticon.com/authors/google) from www.flaticon.com is licensed by [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)<br/>
Check, Comment, Sign Out Alt, Cog, and Cogs made by [fontawesome](https://fontawesome.com/) from www.fontawesome.com is licensed by [CC 4.0 BY](https://creativecommons.org/licenses/by/4.0/)<br/>
Blur Light and Blur Noise made by [Plex](https://www.plex.tv/)<br/>
All logos found within `Archmonger/Blackberry-Flat/Icons` belong to their respective owners and Archmonger does not claim copyright, trademark, or ownership of these logos. Archmonger claims no endorsement or affiliation to the services, repositories, teams, groups, and/or companies referenced within `Archmonger/Blackberry-Flat`.<br/>
