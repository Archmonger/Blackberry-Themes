# ![Blackberry Themes Logo](https://archmonger.github.io/Blackberry-Themes/Resources/blackberry_themes_logo.png)
We are an open source theming group dedicated to creating a consistent UI experience across multiple web services via CSS changes to many popular web applications. Our themes come with variants focused on Organizr V2 integration to create a unified visual experience across tabs. These themes are flat and minimal, clean up unneeded clutter, fix many UI issues on desktop, and create functional mobile sites. Individual themes will often come with custom icons for Organizr, which are available within the theme's `Icons` folder. These are not required, but may prove useful.<br/>

Feel free to join us on Discord to become a part of our theme development team, report bugs, ask for CSS advice, or become a tester!<br/>

[![Discord](https://img.shields.io/badge/discord-join-orange.svg)](https://discord.gg/sfjkDaM)<br/>

### Like what we do? Donate!
[![Beerpay](https://img.shields.io/badge/beerpay-donate-red.svg)](https://beerpay.io/Archmonger/Blackberry-Themes)
[![Paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.me/mgbakhit)

## FAQ<br/>
[How do I use Blackberry Themes?](https://github.com/Archmonger/Blackberry-Themes/wiki/FAQ#how-do-i-use-blackberry-themes)<br/>
[Where are the screenshots?](https://github.com/Archmonger/Blackberry-Themes/wiki/FAQ#where-are-the-screenshots)<br/>
[What is "in Organizr"?](https://github.com/Archmonger/Blackberry-Themes/wiki/FAQ#what-is-in-organizr)<br/>
[What does Blackberry Flat Plex do?](https://github.com/Archmonger/Blackberry-Themes/wiki/FAQ#what-does-blackberry-flat-plex-do)<br/>
[Where can I make theme and icon requests?](https://github.com/Archmonger/Blackberry-Themes/wiki/FAQ#where-can-i-make-theme-and-icon-requests)<br/>
[Can I make my own BBF icons for Organizr?](https://github.com/Archmonger/Blackberry-Themes/wiki/FAQ#can-i-make-my-own-bbf-icons-for-organizr)<br/>
[My subfilter is set up exactly as shown, but themes are not working!](https://github.com/Archmonger/Blackberry-Themes/wiki/FAQ#my-subfilter-is-set-up-exactly-as-shown-but-themes-are-not-working)<br/>
[My non-subfilter related themes are not working?](https://github.com/Archmonger/Blackberry-Themes/wiki/FAQ#my-non-subfilter-related-themes-are-not-working)<br/>

## Standard Configurations
### [<img src="https://archmonger.github.io/Blackberry-Themes/Resources/bbf_in_organizr_logo.png" alt="Blackberry Flat in Organizr Logo" height="40"/>](https://github.com/Archmonger/Blackberry-Themes/tree/master/Themes/Blackberry-Flat) [<img src="https://archmonger.github.io/Blackberry-Themes/Resources/install_button.png" alt="Install" height="40"/>](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat)<br/>
Turn Organizr into a media portal! This is a standard configuration that ties together all plex-related services into one visibily native package by utilizing Organizr SSO. Focuses on optimized usability and simplicity for users which have access to your Plex library, and focuses on bringing Plex styling to all your other media server web applications.
* *OrganizrV2:* Depending on stylistic preference, use either [BBF Organizr](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#organizr-v2) or [BBF Organizr On Top of Burry](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#organizr-v2-on-top-of-burry), alongside [BBF Organizr Custom Icons](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#organizr-custom-icons). Set up Organizr SSO for Plex and Ombi. Ensure no tabs are set up as "Splash" (Settings > Tab Editor > Tabs). Utilize the Organizr homepage (Settings > Tab Editor > Homepage Items) as a dedicated calendar tab with Plex Now Playing underneath the calendar. Ensure that plex backend authentication is turned on (Settings >  System Settings > Main > Authentication > Authentication Backend), and do not use Plex oAuth due to stylistic purposes and ease of use. If you consider adding more elements to the homepage, consider making them only viewable by Co-Admins or Admins. This is to avoid unnecessary duplication of user-viewable data (ex. Recently added on both the Plex tab and Calendar tab).<br/>
* *Plex:* Use [BBF Plex in Organizr](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#non-integrated-themes). We recommend making this the first Organizr tab, and set it to be the default tab if the intention of your Organizr setup is to provide Plex library access. Have this tab be user viewable.<br/>
* *Ombi:* Use [BBF Ombi in Organizr](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#ombi). Have this tab be user viewable.<br/>
* *Synclounge:* Use [BBF Synclounge in Organizr](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#non-integrated-themes). Have this tab be user viewable.<br/>
*  *Tautulli:* Use [BBF Tautulli in Organizr](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#non-integrated-themes). Have this tab be user viewable if you have set up Guest Access within Tautulli. Otherwise, have this tab be viewable by admins.<br/>
* *Donate:* Use [BBF Organizr Custom Icons](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#organizr-custom-icons) to choose a donation button (Bitcoin/Paypal/Donate/Donate_Alternate). Set Organizr to open your donation link in a new window. Have this tab be user viewable.
* *Jackett:* Use [BBF Jackett](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#non-integrated-themes). Have this tab be viewable by ADMINS ONLY.<br/>
* *Deluge:* Use [BBF Deluge in Organizr](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#non-integrated-themes). Have this tab be viewable by ADMINS ONLY.<br/>
* *Filebrowser:* Use [BBF Filebrowser in Organizr](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat#filebrowser). Have this tab be viewable by ADMINS ONLY.<br/>
*  *Sonarr:* Coming soon.<br/>
*  *Radarr:* Coming soon.<br/>

### [<img src="https://archmonger.github.io/Blackberry-Themes/Resources/bbf_logo.png" alt="Blackberry Flat Logo" height="40"/>](https://github.com/Archmonger/Blackberry-Themes/tree/master/Themes/Blackberry-Flat) [<img src="https://archmonger.github.io/Blackberry-Themes/Resources/install_button.png" alt="Install" height="40"/>](https://github.com/Archmonger/Blackberry-Themes/wiki/Installation-Instructions:-Blackberry-Flat)<br/>
For those that do not wish to transform Organizr into a media portal, Blackberry Flat themes exist without In Organizr optimizations. These non-"In Organizr" versions do not remove any UI elements or features and have a larger, more normally sized navbar. Simply explained, they focus on creating a basic visual theme for the original page to be used in more standalone applications.<br/>

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
[![Feature Requests](http://feathub.com/Archmonger/Blackberry-Themes?format=svg)](http://feathub.com/Archmonger/Blackberry-Themes)<br/>

### **[Credits, Disclaimers, and Legal Stuff](https://github.com/Archmonger/Blackberry-Themes/wiki/Credits)**<br/>
