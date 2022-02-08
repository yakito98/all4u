//杩斿洖椤堕儴
$("#top_to").hide();$(window).scroll(function(){if($(this).scrollTop()>200){$("#top_to").fadeIn(100)}else{$("#top_to").fadeOut(200)}});$("#top_to").click(function(){$("body,html").animate({scrollTop:0},400);return false});


//鎳掑姞杞�
function LanLoad(){
    new LazyLoad({});
}
function message(){
    message_box = {
        clearButterbar: function(e) {
            if (jQuery("section").length > 0) {
                jQuery("section").remove();
            }
        },
        message_box: function(message) {
            var t = this;
            t.clearButterbar();
            jQuery("body").append('<section class="filter_frame filter_open">'+
            '<div class="filter_box">'+
            '<div class="filter_bg"></div>'+
            '<div class="filter_tip">' + message + '<div class="filter_tip_off"><div id="filter_off" onclick="share_off()"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-close"><svg id="icon-close" viewBox="0 0 1024 1024"><path d="M29.696 512c0 266.24 215.552 482.304 482.304 482.304S994.304 778.752 994.304 512v-0.512c0-266.24-216.064-482.304-482.304-482.304S29.696 245.248 29.696 512z" fill="#ffffff"></path><path d="M544.256 512l168.448-168.448c8.704-8.704 8.704-22.528 0-31.232l-1.024-1.024c-8.704-8.704-22.528-8.704-31.232 0L512 480.256l-168.448-168.96c-8.704-8.704-22.528-8.704-31.232 0l-1.024 1.024c-8.704 8.704-8.704 22.528 0 31.232l168.448 168.96L311.296 680.96c-8.704 8.704-8.704 22.528 0 31.232l1.024 1.024c8.704 8.704 22.528 8.704 31.232 0L512 544.768l168.448 168.448c8.704 8.704 22.528 8.704 31.232 0l1.024-1.024c8.704-8.704 8.704-22.528 0-31.232L544.256 512z" fill="#dbdbdb"></path></svg></use></svg></div></div></div>'+
            '</div>'+
            '</section>');
        }
        
    };
};
function share_messages(){
    message_share = {
        clearButterbar: function(e) {
            if (jQuery("section").length > 0) {
                jQuery("section").remove();
            }
        },
        message_share: function(message) {
            var t = this;
            t.clearButterbar();
            jQuery("body").append('<section class="filter_frame filter_open">'+
            '<div class="filter_box">'+
            '<div class="filter_bg"></div>'+
            '<div class="filter_tip share_tip">' + message + '<div class="filter_tip_off"><div id="filter_off" onclick="share_off()"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-close"><svg id="icon-close" viewBox="0 0 1024 1024"><path d="M29.696 512c0 266.24 215.552 482.304 482.304 482.304S994.304 778.752 994.304 512v-0.512c0-266.24-216.064-482.304-482.304-482.304S29.696 245.248 29.696 512z" fill="#ffffff"></path><path d="M544.256 512l168.448-168.448c8.704-8.704 8.704-22.528 0-31.232l-1.024-1.024c-8.704-8.704-22.528-8.704-31.232 0L512 480.256l-168.448-168.96c-8.704-8.704-22.528-8.704-31.232 0l-1.024 1.024c-8.704 8.704-8.704 22.528 0 31.232l168.448 168.96L311.296 680.96c-8.704 8.704-8.704 22.528 0 31.232l1.024 1.024c8.704 8.704 22.528 8.704 31.232 0L512 544.768l168.448 168.448c8.704 8.704 22.528 8.704 31.232 0l1.024-1.024c8.704-8.704 8.704-22.528 0-31.232L544.256 512z" fill="#dbdbdb"></path></svg></use></svg></div></div></div>'+
            '</div>'+
            '</section>');
        }
        
    };
};
//鏃跺厜鏈哄浘鐗�
function crossimg(){
    jQuery(document).ready(function($){
        $(".cross-excerpt img").each(function(){
            var _a = $("").attr("href",this.src);
            var element = document.createElement("a");
            $(element).attr("data-fancybox", "images");
            $(element).attr("href", $(this).attr("src"));
            $(this).wrap(element);
        })
        let elements = document.querySelectorAll(".cross-excerpt img");
        elements.forEach(element=>element.classList.toggle("cross-imgg"));
    });
};
