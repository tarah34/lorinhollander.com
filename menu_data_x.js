_menuCloseDelay=500;
_menuOpenDelay=150;
_subOffsetTop=2;
_subOffsetLeft=-2;




with(AllImagesStyle=new mm_style()){
styleid=1;
bordercolor="#000000";
borderstyle="solid";
fontstyle="normal";
fontweight="normal";
padding=3;
}

with(menuStyle=new mm_style()){
bordercolor="#296488";
borderstyle="solid";
borderwidth=1;
fontfamily="Verdana, Tahoma, Arial";
fontsize="75%";
fontstyle="normal";
headerbgcolor="#ffffff";
headercolor="#000000";
offbgcolor="#DCE9F0";
offcolor="#515151";
onbgcolor="#4F8EB6";
oncolor="#ffffff";
outfilter="randomdissolve(duration=0.3)";
overfilter="Fade(duration=0.2);Alpha(opacity=90);Shadow(color=#777777', Direction=135, Strength=5)";
padding=5;
pagebgcolor="#82B6D7";
pagecolor="black";
separatorcolor="#2D729D";
separatorsize=1;
subimage="arrow.gif";
subimagepadding=2;
}

with(milonic=new menuname("Main Menu")){
alwaysvisible=1;
left=180;
orientation="horizontal";
style=AllImagesStyle;
top=10;
aI("image=images/menu/home_off.jpg;overimage=images/menu/home_over.jpg;status=Home Page;url=index.html;");
aI("image=images/menu/pianist_off.jpg;overimage=images/menu/pianist_over.jpg;showmenu=Pianist;url=pianist.html;");
aI("image=images/menu/speaker_off.jpg;overimage=images/menu/speaker_over.jpg;showmenu=Speaker;url=speaker.html;");
aI("image=images/menu/educator_off.jpg;overimage=images/menu/educator_over.jpg;showmenu=Educator;url=educator.html;");
aI("image=images/menu/bio_off.jpg;overimage=images/menu/bio_over.jpg;status=Biography;url=bio.html;");
aI("image=images/menu/contact_off.jpg;overimage=images/menu/contact_over.jpg;status=Contact;url=contact.html;");
}

with(milonic=new menuname("Pianist")){
overflow="scroll";
style=AllImagesStyle;
aI("image=images/menu/pianist_m_off.jpg;overimage=images/menu/pianist_m_over.jpg;url=pianist.html;");
aI("image=images/menu/acclaim_off.jpg;overimage=images/menu/acclaim_over.jpg;url=acclaim.html;");
aI("image=images/menu/conduct_off.jpg;overimage=images/menu/conduct_over.jpg;url=conductor.html;");
}

with(milonic=new menuname("Speaker")){
style=AllImagesStyle;
aI("image=images/menu/speaker_m_off.jpg;overimage=images/menu/speaker_m_over.jpg;url=speaker.html;");
aI("image=images/menu/reviews_off.jpg;overimage=images/menu/reviews_over.jpg;url=reviews.html;");
aI("image=images/menu/lectures_off.jpg;overimage=images/menu/lectures_over.jpg;url=lectures.html;");
}

with(milonic=new menuname("Educator")){
style=AllImagesStyle;
aI("image=images/menu/educator_m_off.jpg;overimage=images/menu/educator_m_over.jpg;url=educator.html;");
aI("image=images/menu/residencies_off.jpg;overimage=images/menu/residencies_over.jpg;url=residencies.html;");
aI("image=images/menu/teacher_off.jpg;overimage=images/menu/teacher_over.jpg;url=teacher.html;");
}


drawMenus();

