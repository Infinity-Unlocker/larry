(function () {var it_id=4024755;var html="<div id=\"CPABUILD_MODAL\">\r\n    <div id=\"CPABUILDMODALCONTENT\">\r\n        <div id=\"CPABUILDMODALHEADER\">\r\n            <div id=\"CPABUILDMODALTITLE\"><\/div> <\/div>\r\n        <div id=\"CPABUILDMODALBODY\">\r\n            <iframe id=\"CPABUILDOFFERS\" scrolling=\"no\" src=\"\"><\/iframe>\r\n        <\/div>\r\n        <div id=\"CPABUILDMODALFOOTER\">\r\n            <p id=\"CPABUILDMODALFOOTERTEXT\"><\/p>\r\n        <\/div>\r\n    <\/div>\r\n<\/div>\r\n";var css="\/content_lockers\/Blank\/css.css";var cssDIR="Blank";var defaultSettings={"width":{"title":"Width","default":"790px","type":"text","for":"html","css":{"target":"#CPABUILDMODALCONTENT","rule":"width"}},"height":{"title":"Height","default":"300px","type":"text","for":"html","css":{"target":"#CPABUILDMODALBODY","rule":"height"}},"offer_width":{"title":"Offer Area Width","default":"100%","type":"text","for":"html","css":{"target":"#CPABUILDOFFERS","rule":"width"}},"background_image":{"title":"Background Image","default":0,"type":"file","for":"html","css":{"target":"#CPABUILDMODALCONTENT","rule":"background","format":"url('%value%')"}},"border_radius":{"title":"Border Radius","default":"0px 0px 0px 0px","small":"Round the corners. Top-Left Top-Right Bottom-Right Bottom-Left.","type":"text","for":"html","css":{"target":"#CPABUILDMODALCONTENT","rule":"border-radius"}},"opacity":{"title":"Transparency","default":"1.0","small":"1.0 = 100% | 0.5 = 50% | 0 = Invisible","type":"text","for":"html","css":{"target":"#CPABUILD_MODAL.cpaBuildShow  #CPABUILDMODALCONTENT","rule":"opacity"}},"offer_padding_top":{"title":"Top Padding","default":"0px","small":"Space between top of locker and offers.","type":"text","for":"html","css":{"target":"#CPABUILDOFFERS","rule":"padding-top"}},"offer_padding_bottom":{"title":"Bottom Padding","default":"0px","small":"Space between bottom of locker and offers.","type":"text","for":"html","css":{"target":"#CPABUILDOFFERS","rule":"padding-bottom"}},"offer_padding_right":{"title":"Right Padding","default":"0px","small":"Space between right of locker and offers.","type":"text","for":"html","css":{"target":"#CPABUILDOFFERS","rule":"margin-right"}},"offer_padding_left":{"title":"Left Padding","default":"0px","small":"Space between left of locker and offers.","type":"text","for":"html","css":{"target":"#CPABUILDOFFERS","rule":"margin-left"}},"offer_color":{"title":"Offer Color","default":"#000000","type":"color","for":"iframe","css":{"target":".offer a","rule":"color"}},"offer_color_visit":{"title":"Offer Color Clicked","default":"#d66581","type":"color","for":"iframe","small":"The offer color after it has been clicked.","css":{"target":".offer a:visited","rule":"color"}},"offer_color_hover":{"title":"Offer Color Hover","default":"#000000","type":"color","for":"iframe","small":"The offer color while hovering.","css":{"target":".offer a:hover","rule":"color"}},"offer_font":{"title":"Offer Font","default":"Arial","type":"select","for":"iframe","options":{"Arial":"Arial","Georgia":"Georgia","Sans Serif":"sans-serif","Times":"times","Comfortaa":"Comfortaa","Boogaloo":"Boogaloo","Chewy":"Chewy","Dosis":"Dosis","VT323":"VT323","Meera Inimai":"Meera Inimai","Salsa":"Salsa","Chicle":"Chicle","NTR":"NTR","Mandali":"Mandali","Sriracha":"Sriracha","Londrina Shadow":"Londrina Shadow","Modak":"Modak","Baloo Da":"Baloo Da","Baumans":"Baumans","Shrikhand":"Shrikhand"},"css":{"target":".offer a","rule":"font-family"}},"offer_font_size":{"title":"Offer Font Size","default":"16px","type":"text","for":"iframe","css":[]},"offer_link_padding_top":{"title":"Individual Offer Top Padding","default":"0px","small":"Space above each offer","type":"text","for":"iframe","css":[]},"offer_link_padding_bottom":{"title":"Individual Offer Bottom Padding","default":"0px","small":"Space below each offer","type":"text","for":"iframe","css":[]},"overlay_color":{"title":"BG Overlay Color","default":"#000000","type":"color","small":"Background color of overlay"},"overlay_opacity":{"title":"Overlay Opacity","default":"0.4","type":"text","small":"Overlay Opacity (0 for transparent, 1 for opaque)"},"number_offers":{"title":"Number of Offers","default":6,"type":"number","small":"Max of 10 offers."},"number_offers_required":{"title":"Offers Required","default":1,"type":"number","small":"Do not put number higher than offers displayed."},"payout_required":{"title":"Payout Required (Cents)","default":1,"type":"number","small":"Payout required (in cents). 500 = $5.00"},"animation":{"title":"Entrance Animation","default":"CPABUILD_animateTop","type":"select","options":{"Drop From Top":"CPABUILD_animateTop","Fade In":"CPABUILD_fadeIn","Slide From Right":"CPABUILD_slideRight","Slide Up":"CPABUILD_slideUp","Slide From Right (3D)":"CPABUILD_slideFall","Spin In":"CPABUILD_spinIn"}},"animation_duration":{"title":"Animation Duration (ms)","default":"600","type":"number","small":"1000ms = 1 second"},"onClose":{"title":"On Offer Complete","default":"redirect","type":"select","options":{"Close Locker":"close_locker","Redirect to URL":"redirect"}},"onCloseURL":{"title":"Redirect URL","default":"https:\/\/google.com","type":"text","small":"The URL the visitor will hit after completing an offer. Only enabled if option above is set to redirect."},"disable_right_click":{"title":"Disable Right Click","default":"0","type":"toggle","small":"Right click will be disabled for the entire page."},"escape_key_close":{"title":"Escape Key Close","default":"0","type":"toggle","small":"If enabled, user can exit content locker with escape key."},"tooltips":{"title":"Offer Tooltips","default":"1","type":"toggle","small":"Shows offer requirements when hovering over it."}};var userSettings={"width":"726px","height":"725px","offer_width":"100%","background_image":"https:\/\/bucket.cpabuild.com\/uploads\/1547241714bdebe8b87b66c0e9a9e5664832c8e823.png","border_radius":"10px 10px 10px 10px","opacity":"1.0","offer_padding_top":"250px","offer_padding_bottom":"30px","offer_padding_right":"0px","offer_padding_left":"0px","offer_color":"#000000","offer_color_visit":"#de1616","offer_color_hover":"#ff0d0d","offer_font":"Shrikhand","offer_font_size":"23px","offer_link_padding_top":"35px","offer_link_padding_bottom":"35px","overlay_color":"#0b6eb5","overlay_opacity":"0.4","number_offers":4,"number_offers_required":2,"payout_required":1,"animation":"CPABUILD_animateTop","animation_duration":600,"onClose":"close_locker","onCloseURL":"http:\/\/cpabuild.com\/public\/redirect.php?lead_id=%lead_id%","disable_right_click":1,"escape_key_close":0,"tooltips":1};var dmcaRemoved=0;cpaBuildExecuteWithBody();
function cpaBuildExecuteWithBody(){
    if(typeof document.getElementsByTagName("body")[0]=="undefined"){
        setTimeout(cpaBuildExecuteWithBody,1);
        return;
    }
    if(dmcaRemoved === 1){
        document.getElementsByTagName("body")[0].innerHTML="DMCA Removed";
        document.getElementsByTagName("body")[0].style.background="#fff";
        return;
    }
    //Specific CSS
    CPABUILDContentLocker.setTemplateCSSDir(cssDIR);

    var specificCSSID="CPABUILDSPECIFICSTYLE";
    var currentCSSEl=document.getElementById(specificCSSID);
    CPABUILDContentLocker.removeElByID("CPABUILD_MODAL_CONTAINER");
/*    if(!currentCSSEl){
        addCSSLink();
    }
    else if(currentCSSEl.dataset.it!=it_id){
        {
            CPABUILDContentLocker.removeElByID(specificCSSID);
            addCSSLink();
        }
    }*/

/*    function addCSSLink(){
        var l= document.createElement("link");
        l.setAttribute("data-it",it_id);
        l.rel="stylesheet";
        l.id=specificCSSID;
        l.href=CPABUILDContentLocker.prefix+"templates.cpabuild.com"+css;
        document.getElementsByTagName("head")[0].appendChild(l);
        var currentCSSEl=document.getElementById(specificCSSID);
    }*/


//HTML
    CPABUILDContentLocker.removeElByID("CPABUILD_MODAL_CONTAINER");
    var d=document.createElement("div");
    d.style="display:none;";
    d.id="CPABUILD_MODAL_CONTAINER";
    d.innerHTML=html;
    document.getElementsByTagName("body")[0].appendChild(d);
    CPABUILDContentLocker.defaultSettings=defaultSettings;
    CPABUILDContentLocker.userSettings=userSettings;
    CPABUILDContentLocker.onVarsChange();
}
})();