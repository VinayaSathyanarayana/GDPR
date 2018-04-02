!function(e){"use strict";var o=location.search,t=location.protocol+"//"+location.host+location.pathname;-1!==o.indexOf("notify=1")&&window.history.replaceState({},document.title,t),e(function(){var o=JSON.parse(n("gdpr_approved_cookies"));function t(e,o,t){if(t){var n=new Date;n.setTime(n.getTime()+24*t*60*60*1e3);var r="; expires="+n.toGMTString()}else r="";document.cookie=e+"="+o+r+"; path=/"}function n(e){for(var o=e+"=",t=document.cookie.split(";"),n=0;n<t.length;n++){for(var r=t[n];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(o))return r.substring(o.length,r.length)}return null}var r=[];function c(c){setInterval(function(){r[c]?n(c)!=r[c]&&(r[c]=n(c),function(n){e.inArray(n,o.site_cookies)||t(n,"",-1)}(c)):r[c]=n(c)},100)}function i(){var o=[];e('input[type="checkbox"]:checked',".frm-gdpr-cookie-preferences").each(function(){var t=JSON.parse(e(this).val());if(e.isArray(t))t.forEach(function(e){o.push(e)});else{var n=Object.keys(t);o.hasOwnProperty(n)?o[n[0]].push(t[n[0]]):o[n[0]]=[t[n[0]]]}}),t("gdpr_approved_cookies",JSON.stringify(o)),e(".gdpr.cookie-preferences .wrapper, .gdpr-overlay, .gdpr.cookie-bar").fadeOut()}["__utma","_gid"].forEach(function(e){c(e)}),e(document).on("click",".gdpr-preferences",function(){var o=e(this).data("type");switch(e(".gdpr-overlay").fadeIn(),o){case"cookies":e(".gdpr.cookie-preferences .wrapper").fadeIn();break;case"consent":e(".gdpr.consent-preferences .wrapper").fadeIn()}}),e(document).on("click",".gdpr.cookie-preferences .close",function(){e(".gdpr-overlay").fadeOut(),e(".gdpr.cookie-preferences .wrapper").fadeOut()}),e(document).on("click",".gdpr.consents-preferences .close",function(){e(".gdpr-overlay").fadeOut(),e(".gdpr.consents-preferences .wrapper").fadeOut()}),e(document).on("click",".gdpr.cookie-preferences .tabs button",function(){var o="."+e(this).data("target");e(".gdpr.cookie-preferences .tab-content > div").removeClass("active"),e(".gdpr.cookie-preferences .tab-content "+o).addClass("active"),e(".gdpr.cookie-preferences .tabs").hasClass("mobile-expanded")&&(e(".gdpr.cookie-preferences .mobile-menu button").removeClass("active"),e(".gdpr.cookie-preferences .tabs").toggle()),e(".gdpr.cookie-preferences .tabs button").removeClass("active"),e(this).addClass("active")}),e(document).on("click",".gdpr.cookie-preferences .mobile-menu button",function(o){e(this).toggleClass("active"),e(".gdpr.cookie-preferences .tabs").toggle().addClass("mobile-expanded")}),e(window).resize(function(){e(window).width()>640&&e(".gdpr.cookie-preferences .tabs").hasClass("mobile-expanded")&&(e(".gdpr.cookie-preferences .mobile-menu button").removeClass("active"),e(".gdpr.cookie-preferences .tabs").removeClass("mobile-expanded").removeAttr("style"))}),e(document).on("submit",".frm-gdpr-cookie-preferences",function(e){e.preventDefault(),i()}),e(document).on("click",".gdpr.cookie-bar .accept-cookies",function(){i()}),e(".confirm-delete-request-dialog").dialog({resizable:!1,autoOpen:!1,height:"auto",width:400,modal:!0,buttons:{"Close my account":function(){e("form.gdpr-add-to-deletion-requests").addClass("confirmed"),e("form.gdpr-add-to-deletion-requests.confirmed").submit(),e(this).dialog("close")},Cancel:function(){e(this).dialog("close")}}}),e("form.gdpr-add-to-deletion-requests").on("submit",function(o){e(this).hasClass("confirmed")||(o.preventDefault(),e(".confirm-delete-request-dialog").dialog("open"))}),e(".gdpr-general-dialog").length>0&&e(".gdpr-general-dialog").dialog({resizable:!1,height:"auto",width:400,modal:!0,buttons:{Ok:function(){e(this).dialog("close")}}}),e(document).on("submit",".frm-gdpr-consents-preferences",function(o){o.preventDefault();var t=e(this).find('input[type="checkbox"]:checked'),n=[],r=e(this).find('input[name="action"]').val(),c=e(this).find('input[name="update-consents-nonce"]').val(),i=e(this).find('input[type="submit"]'),s=e(this).find(".error");t.each(function(){n.push(e(this).val())}),i.prop("disabled",!0),s.html(""),e.post(GDPR.ajaxurl,{action:r,nonce:c,consents:n},function(o){o.success?(e(".gdpr-overlay").fadeOut(),e(".gdpr.consents-preferences .wrapper").fadeOut()):(s.html(o.data),console.log(o.data)),i.prop("disabled",!1)})}),e(".gdpr-consent-modal").length>0&&e("body").css("overflow","hidden"),e(document).on("click",".gdpr-agree",function(o){o.preventDefault();var t=e(this);e.post(GDPR.ajaxurl,{action:"agree_with_terms",nonce:e(this).data("nonce")},function(o){o.success&&t.closest(".gdpr-consent-modal").fadeOut(300,function(){e(this).remove(),0==e(".gdpr-consent-modal").length&&e("body").css("overflow","auto")})})}),e(document).on("click",".gdpr-disagree",function(o){o.preventDefault(),e.post(GDPR.ajaxurl,{action:"disagree_with_terms",nonce:e(this).data("nonce")},function(e){e.success&&location.reload()})})})}(jQuery);