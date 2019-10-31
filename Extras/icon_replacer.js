function iconReplacer(search, replace){
  tabIcons = $(".allTabsList>a>img,.allGroupsList>a>img");
  for (var i = 0; i < tabIcons.length; i++){
    tabIcons[i].src = tabIcons[i].src.replace(search,replace);
  }
}
