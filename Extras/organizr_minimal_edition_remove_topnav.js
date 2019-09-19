/* Created by Blackberry Themes */
$('head').append('<link rel="stylesheet" href="https://archmonger.github.io/Blackberry-Themes/Resources/organizr_minimal_edition_remove_topnav.css" type="text/css" />');
$('.navbar-right').find('.dropdown:last').prependTo($('#side-menu'));
$('a[onclick="reloadCurrentTab();"]').parent().appendTo($('#side-menu'));