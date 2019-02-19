/*
 |--------------------------------------------------------------------------
 | SkyCaiji (蓝天采集器)
 |--------------------------------------------------------------------------
 | Copyright (c) 2018 http://www.skycaiji.com All rights reserved.
 |--------------------------------------------------------------------------
 | 使用协议  http://www.skycaiji.com/licenses
 |--------------------------------------------------------------------------
 */
'use strict';function insertAtCaret(myField,myValue){if(document.selection){myField.focus();var sel=document.selection.createRange();sel.text=myValue;sel.select()}else if(myField.selectionStart||myField.selectionStart=='0'){var startPos=myField.selectionStart;var endPos=myField.selectionEnd;var restoreTop=myField.scrollTop;var value=myField.val();value=value.substring(0,startPos)+myValue+value.substring(endPos,value.length);myField.val(value);myField.focus();myField.selectionStart=startPos+myValue.length;myField.selectionEnd=startPos+myValue.length}else{myField.val(myField.val()+myValue);myField.focus()}}
function admincpInit(){var bodyWidth=$(document.body).width();var admincp_skin=getCookie('admincp_skin');if(admincp_skin){$('body').removeClass('skin-blue').addClass(admincp_skin)}
if(bodyWidth>767){var admincp_sd_mini=getCookie('admincp_sd_mini');if(admincp_sd_mini==1){$('body').addClass('sidebar-collapse').addClass('sidebar-mini')}}
$(document).ready(function(){initSkins();if(bodyWidth>767){if(admincp_sd_mini==1){$('#chk_sidebar_mini').attr('checked','checked')}
$('#chk_sidebar_mini').bind('click',function(){var setMini=0;if($(this).is(':checked')){$('body').addClass('sidebar-collapse').addClass('sidebar-mini');setMini=1}else{$('body').removeClass('sidebar-collapse').removeClass('sidebar-mini')}
setCookie('admincp_sd_mini',setMini,30)});$('.sidebar-toggle[data-toggle="push-menu"]').bind('click',function(){$('body').addClass('sidebar-mini')})}else{$('#chk_sidebar_mini').parents('li').eq(0).hide()}})}
function initSkins(){var $skinsList=$('<ul />',{'class':'list-unstyled clearfix'})
var $skinBlue=$('<li />',{style:'float:left; width: 33.33333%; padding: 5px;'}).append('<a href="javascript:void(0)" data-skin="skin-blue" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'+'<div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"></span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'+'<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'+'</a>'+'<p class="text-center no-margin">'+window.tpl_lang.skin_blue+'</p>');$skinsList.append($skinBlue);var $skinBlack=$('<li />',{style:'float:left; width: 33.33333%; padding: 5px;'}).append('<a href="javascript:void(0)" data-skin="skin-black" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'+'<div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"></span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"></span></div>'+'<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'+'</a>'+'<p class="text-center no-margin">'+window.tpl_lang.skin_black+'</p>');$skinsList.append($skinBlack);var $skinPurple=$('<li />',{style:'float:left; width: 33.33333%; padding: 5px;'}).append('<a href="javascript:void(0)" data-skin="skin-purple" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'+'<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"></span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'+'<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'+'</a>'+'<p class="text-center no-margin">'+window.tpl_lang.skin_purple+'</p>');$skinsList.append($skinPurple);var $skinGreen=$('<li />',{style:'float:left; width: 33.33333%; padding: 5px;'}).append('<a href="javascript:void(0)" data-skin="skin-green" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'+'<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"></span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'+'<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'+'</a>'+'<p class="text-center no-margin">'+window.tpl_lang.skin_green+'</p>');$skinsList.append($skinGreen);var $skinRed=$('<li />',{style:'float:left; width: 33.33333%; padding: 5px;'}).append('<a href="javascript:void(0)" data-skin="skin-red" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'+'<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"></span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'+'<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'+'</a>'+'<p class="text-center no-margin">'+window.tpl_lang.skin_red+'</p>');$skinsList.append($skinRed);var $skinYellow=$('<li />',{style:'float:left; width: 33.33333%; padding: 5px;'}).append('<a href="javascript:void(0)" data-skin="skin-yellow" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'+'<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"></span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'+'<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'+'</a>'+'<p class="text-center no-margin">'+window.tpl_lang.skin_yellow+'</p>');$skinsList.append($skinYellow);var $skinBlueLight=$('<li />',{style:'float:left; width: 33.33333%; padding: 5px;'}).append('<a href="javascript:void(0)" data-skin="skin-blue-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'+'<div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"></span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'+'<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'+'</a>'+'<p class="text-center no-margin">'+window.tpl_lang.skin_blue_light+'</p>');$skinsList.append($skinBlueLight);var $skinBlackLight=$('<li />',{style:'float:left; width: 33.33333%; padding: 5px;'}).append('<a href="javascript:void(0)" data-skin="skin-black-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'+'<div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"></span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"></span></div>'+'<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'+'</a>'+'<p class="text-center no-margin">'+window.tpl_lang.skin_black_light+'</p>');$skinsList.append($skinBlackLight);var $skinPurpleLight=$('<li />',{style:'float:left; width: 33.33333%; padding: 5px;'}).append('<a href="javascript:void(0)" data-skin="skin-purple-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'+'<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"></span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'+'<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'+'</a>'+'<p class="text-center no-margin">'+window.tpl_lang.skin_purple_light+'</p>');$skinsList.append($skinPurpleLight);var $skinGreenLight=$('<li />',{style:'float:left; width: 33.33333%; padding: 5px;'}).append('<a href="javascript:void(0)" data-skin="skin-green-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'+'<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"></span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'+'<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'+'</a>'+'<p class="text-center no-margin">'+window.tpl_lang.skin_green_light+'</p>');$skinsList.append($skinGreenLight);var $skinRedLight=$('<li />',{style:'float:left; width: 33.33333%; padding: 5px;'}).append('<a href="javascript:void(0)" data-skin="skin-red-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'+'<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"></span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'+'<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'+'</a>'+'<p class="text-center no-margin">'+window.tpl_lang.skin_red_light+'</p>');$skinsList.append($skinRedLight);var $skinYellowLight=$('<li />',{style:'float:left; width: 33.33333%; padding: 5px;'}).append('<a href="javascript:void(0)" data-skin="skin-yellow-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">'+'<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"></span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"></span></div>'+'<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>'+'</a>'+'<p class="text-center no-margin">'+window.tpl_lang.skin_yellow_light+'</p>');$skinsList.append($skinYellowLight);$('#sidebar_skins').html($skinsList);var mySkins=new Array('skin-blue','skin-black','skin-red','skin-yellow','skin-purple','skin-green','skin-blue-light','skin-black-light','skin-red-light','skin-yellow-light','skin-purple-light','skin-green-light');$('#sidebar_skins li a[data-skin]').bind('click',function(){var skin=$(this).attr('data-skin');for(var i in mySkins){$('body').removeClass(mySkins[i])}
$('body').addClass(skin);setCookie('admincp_skin',skin,30)})}
function cpMatch(toObj,options){if(!options){options={}}
var sign=window.tpl_lang.sign_match;var group='(?<content{:num}>[\\s\\S]*?)';if(options.only){sign=sign.replace('{:num}','');if($(toObj).val().indexOf(sign)<0&&$(toObj).val().indexOf('(?<content>')<0){if(options.group){sign=group.replace('{:num}','')}
insertAtCaret($(toObj),sign)}else{toastr.error('存在'+sign+'或捕获组')}}else{var reSign=new RegExp(sign.replace('{:num}','(\\d*)').replace('[','\\[').replace(']','\\]'),'g');var reP=new RegExp("\\(\\?<content(\\d*)>",'g');var list=null;var max=0;while((list=reSign.exec($(toObj).val()))!=null){var num=parseInt(list[1]);if(num>max){max=num}}
list=null;while((list=reP.exec($(toObj).val()))!=null){var num=parseInt(list[1]);if(num>max){max=num}}
if(options.group){sign=group}
sign=sign.replace('{:num}',max+1);insertAtCaret($(toObj),sign)}}
function cpMatchN(fromObj,toObj,options){if(!options){options={}}
var sign=window.tpl_lang.sign_match;var txt=$(fromObj).val();var reP=new RegExp("\\(\\?<content(\\d*)>.*?\\)",'g');txt=txt.replace(reP,sign.replace('{:num}',"$1"));var reSign=new RegExp(sign.replace('{:num}','(\\d*)').replace('[','\\[').replace(']','\\]'),'g');var list=null;var hasSign=!1;while((list=reSign.exec(txt))!=null){hasSign=!0;var each=list[0];if($(toObj).val().indexOf(each)<0){insertAtCaret($(toObj),each)}}
if(!hasSign){if(options.def){sign=sign.replace('{:num}','');if($(toObj).val().indexOf(sign)<0){insertAtCaret($(toObj),sign)}}}}
function cpWildcard(toObj,options){if(!options){options={}}
var wildcard=window.tpl_lang.sign_wildcard;if(options.only){if($(toObj).val().indexOf(wildcard)<0){insertAtCaret($(toObj),wildcard)}}else{insertAtCaret($(toObj),wildcard)}}
function windowStore(title,url,options){if(!options){options={}}
options.bodyStyle=' style="padding:0;overflow:hidden;"';options.lg=1;var height=parseInt($(window).height());if(url){url=url+(url.indexOf('?')>-1?'&':'?')+'iframe=1'}
var addonBody='';if(options.addonBody){addonBody=options.addonBody;options.addonBody=null}
modal(title,'<img src="'+window.site_config.pub+'/static/images/loading.gif" class="loading-iframe" style="margin:15px;" />'+'<iframe id="myModalIframe" name="myModalIframe" '+(url?' src="'+url+'" ':'')+' frameborder="0" style="display:none;" width="100%" height="100%" frameborder="0" scrolling="yes"></iframe>'+addonBody,options);height=height-parseInt($('#myModal .modal-body').offset().top-$(document).scrollTop())*2;height=height+$('#myModal .modal-header').outerHeight();$('#myModalIframe').bind('load',function(){$('#myModal .loading-iframe').remove();$('#myModal .modal-header').hide();$('#myModal .modal-body').css('height',height);$('#myModalIframe').show()})}
function eleExchange(box,up,down,ele){$(box).on('click',up,function(){var obj=$(this).parents(ele).eq(0);var prev=obj.prev(ele);if(prev.length>0){prev.before(obj)}});$(box).on('click',down,function(){var obj=$(this).parents(ele).eq(0);var next=obj.next(ele);if(next.length>0){next.after(obj)}})}