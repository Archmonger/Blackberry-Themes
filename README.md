# ![Blackberry Themes Logo](https://archmonger.github.io/Blackberry-Themes/Resources/blackberry_themes_logo.png)
We are a theming group dedicated to creating a consistent UI experience across multiple web services through CSS changes to many popular web apps. Many of our themes come with variants focused on Organizr V2 integration to create a unified visual experience across tabs. These themes are flat and minimal, clean up unneeded clutter, fix many UI issues on desktop, and create functional mobile sites. Individual themes will often come with custom icons for Organizr, which are available within the theme's `Icons` folder. These are not required, but may prove useful.<br/>

Feel free to join us on Discord to become a part of our CSS development team, report bugs, ask for CSS advice, or become a tester!<br/>

[![Discord](https://img.shields.io/badge/discord-join-orange.svg)](https://discord.gg/sfjkDaM)<br/>

### Like what we do? Donate!
[![Beerpay](https://img.shields.io/badge/beerpay-donate-red.svg)](https://beerpay.io/Archmonger/Blackberry-Flat)
[![Paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.me/mgbakhit)

## FAQ<br/>
[How do I use Blackberry Themes?]()<br/>
[What is "in Organizr"?]()<br/>
[My subfilter is set up exactly as above, but themes are not working?]()<br/>
[My non-subfilter related themes are not working?]()<br/>
[What does Blackberry Flat Plex do?]()<br/>
[Where can I make theme and icon requests?]()<br/>
[Where are the screenshots?]()<br/>
[What themes are upcoming?]()<br/>
[How can I make my own BBF icons for Organizr?]()<br/>

## Standard Configurations
### Blackberry Flat Media Portal (Recommended)<br/>
Turn Organizr into a media portal! This is a standard configuration that ties together all plex-related services into one visibily native package by utilizing Organizr SSO. Focuses on optimized usability and simplicity for users which have access to your Plex library, and focuses on bringing Plex styling to all your other media server web applications.
* *OrganizrV2:* Depending on stylistic preference, use either [BBF Organizr](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#organizr-v2) or [BBF Organizr On Top of Burry](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#organizr-v2-on-top-of-burry), alongside [BBF Organizr Custom Icons](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#organizr-custom-icons). Set up Organizr SSO for Plex and Ombi. Utilize the Organizr homepage (Settings > Tab Editor > Homepage Items) as a dedicated calendar tab with Plex Now Playing underneath the calendar. Ensure that plex backend authentication is turned on (Settings >  System Settings > Main > Authentication > Authentication Backend), and do not use Plex oAuth due to stylistic purposes and ease of use. If you consider adding more elements to the homepage, consider making them only viewable by Co-Admins or Admins. This is to avoid unnecessary duplication of user-viewable data (ex. Recently added on both the Plex tab and Calendar tab).<br/>
* *Plex:* Use [BBF Plex in Organizr](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#non-integrated-themes). Make this the first Organizr tab, and set it to be the default tab. Have this tab be user viewable.<br/>
* *Ombi:* Use [BBF Ombi in Organizr](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#ombi). Have this tab be user viewable.<br/>
* *Synclounge:* Use [BBF Synclounge in Organizr](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#non-integrated-themes). Have this tab be user viewable.<br/>
* *Donate:* Use [BBF Organizr Custom Icons](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#organizr-custom-icons) to choose a donation button (Bitcoin/Paypal/Donate/Donate_Alternate). Set Organizr to open your donation link in a new window. Have this tab be user viewable.
* *Jackett:* Use [BBF Jackett](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#non-integrated-themes). Have this tab be viewable by ADMINS ONLY.<br/>
* *Deluge:* Use [BBF Deluge in Organizr](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#non-integrated-themes). Have this tab be viewable by ADMINS ONLY.<br/>
* *Filebrowser:* Use [BBF Filebrowser in Organizr](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#filebrowser). Have this tab be viewable by ADMINS ONLY.<br/>
*  *Tautulli:* Use [BBF Tautulli in Organizr](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#non-integrated-themes). Have this tab be viewable by ADMINS ONLY.<br/>

### Standalone Themes<br/>
For those that do not wish to transform Organizr into a media portal, all themes exist without In Organizr optimizations. These non-"In Organizr" versions do not remove any UI elements or features, and simply focus on theming the original page for a more typical applications. These themes do not remove any UI elements or features, and are intended for standalone domains. See [installation instructions](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions) or look through the [Blackberry Flat repository](https://github.com/Archmonger/Blackberry-Themes/Themes/) to view what themes are available.<br/>

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
All logos found within this repository's `Icons` folder belong to their respective owners and Archmonger does not claim copyright, trademark, or ownership of these logos. Archmonger claims no endorsement or affiliation to the services, repositories, teams, groups, and/or companies referenced within this repository. Blackberry Themes has no relationship to BlackBerry Limited.<br/>
