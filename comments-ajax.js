var i=0,got=-1,len=document.getElementsByTagName("script").length;while(i<=len&&got==-1){var js_url=document.getElementsByTagName("script")[i].src,got=js_url.indexOf("comments-ajax.js");i++}var edit_mode="1",ajax_php_url=js_url.replace("-ajax.js","-ajax.php"),wp_url=js_url.substr(0,js_url.indexOf("wp-content")),pic_sb=wp_url+"wp-admin/images/wpspin_light.gif",pic_no=wp_url+"wp-admin/images/no.png",pic_ys=wp_url+"wp-admin/images/yes.png",txt1='<div id="loading"><img width="12" src="'+pic_sb+'" style="vertical-align:middle;" alt=""/> 正在提交，请稍候...</div>',txt2='<div id="error">#</div>',txt3='"><img src="'+pic_ys+'" style="vertical-align:middle;" alt=""/> 提交成功',edt1=', 刷新页面之前可以<a rel="nofollow" class="comment-reply-link" href="#edit" onclick=\'return addComment.moveForm("',edt2=")'>编辑评论</a>",cancel_edit="取消编辑",edit,num=1,comm_array=[];comm_array.push("");jQuery(document).ready(function(c){$comments=c("#comments-title h3");$cancel=c("#cancel-comment-reply-link");cancel_text=$cancel.text();$submit=c("#commentform #submit");$submit.attr("disabled",false);c("#comment").after(txt1+txt2);c("#loading").hide();c("#error").hide();$body=(window.opera)?(document.compatMode=="CSS1Compat"?c("html"):c("body")):c("html,body");c("#commentform").submit(function(){c("#loading").slideDown();$submit.attr("disabled",true).fadeTo("slow",0.5);if(edit){c("#comment").after('<input type="text" name="edit_id" id="edit_id" value="'+edit+'" style="display:none;" />')}c.ajax({url:ajax_php_url,data:c(this).serialize(),type:c(this).attr("method"),error:function(f){c("#loading").slideUp();c("#error").slideDown().html('<img width="12" src="'+pic_no+'" style="vertical-align:middle;" alt=""/> '+f.responseText);setTimeout(function(){$submit.attr("disabled",false).fadeTo("slow",1);c("#error").slideUp()},3000)},success:function(l){c("#loading").hide();comm_array.push(c("#comment").val());c("textarea").each(function(){this.value=""});var h=addComment;var k=h.I("cancel-comment-reply-link"),f=h.I("wp-temp-form-div"),m=h.I(h.respondId),g=h.I("comment_post_ID"),j=h.I("comment_parent").value;if(!edit&&$comments.length){n=parseInt($comments.text().match(/\d+/));$comments.text($comments.text().replace(n,n+1))}new_htm='" id="new_comm_'+num+'"></';new_htm=(j=="0")?('\n<ol style="clear:both;padding-top:0px;" class="commentlist'+new_htm+"ol>"):('\n<ul class="children'+new_htm+"ul>");ok_htm='\n<span id="success_'+num+txt3;if(edit_mode=="1"){div_=(document.body.innerHTML.indexOf("div-comment-")==-1)?"":((document.body.innerHTML.indexOf("li-comment-")==-1)?"div-":"");ok_htm=ok_htm.concat(edt1,div_,"comment-",j,'", "',j,'", "respond", "',g,'", ',num,edt2)}ok_htm+="</span><span></span>\n";c("#respond").before(new_htm);c("#new_comm_"+num).hide().append(l);c("#new_comm_"+num+" li").append(ok_htm);c("#new_comm_"+num).fadeIn(4000);$body.animate({scrollTop:c("#new_comm_"+num).offset().top-200},900);b();num++;edit="";c("*").remove("#edit_id");k.style.display="none";k.onclick=null;h.I("comment_parent").value="0";if(f&&m){f.parentNode.insertBefore(m,f);f.parentNode.removeChild(f)}}});return false});addComment={moveForm:function(j,k,q,h,l){var w=this,f,p=w.I(j),g=w.I(q),v=w.I("cancel-comment-reply-link"),s=w.I("comment_parent"),u=w.I("comment_post_ID");if(edit){a()}l?(w.I("comment").value=comm_array[l],edit=w.I("new_comm_"+l).innerHTML.match(/(comment-)(\d+)/)[2],$new_sucs=c("#success_"+l),$new_sucs.hide(),$new_comm=c("#new_comm_"+l),$new_comm.hide(),$cancel.text(cancel_edit)):$cancel.text(cancel_text);w.respondId=q;h=h||false;if(!w.I("wp-temp-form-div")){f=document.createElement("div");f.id="wp-temp-form-div";f.style.display="none";g.parentNode.insertBefore(f,g)}!p?(temp=w.I("wp-temp-form-div"),w.I("comment_parent").value="0",temp.parentNode.insertBefore(g,temp),temp.parentNode.removeChild(temp)):p.parentNode.insertBefore(g,p.nextSibling);g.style.opacity=0;$body.animate({scrollTop:c("#"+j).offset().top-100},500);c("#respond").animate({opacity:1},400);if(u&&h){u.value=h}s.value=k;v.style.display="inline-block";v.onclick=function(){if(edit){a()}var y=addComment,x=y.I("wp-temp-form-div"),z=y.I(y.respondId);y.I("comment_parent").value="0";if(x&&z){c("#respond").animate({opacity:0},400,function(){x.parentNode.insertBefore(z,x);x.parentNode.removeChild(x);c("#respond").animate({opacity:1},400)})}this.style.display="none";this.onclick=null;return false};try{if(c("#hackerzhou_arg0").length>0){var o=c("#hackerzhou_arg0").val().length>0;var r=c("#hackerzhou_arg1").val().length>0;if(!o){c("#hackerzhou_arg0").focus()}else{if(!r){c("#hackerzhou_arg1").focus()}else{c("#comment").focus()}}}else{c("#comment").focus()}}catch(m){}return false},I:function(f){return document.getElementById(f)}};function a(){$new_comm.show();$new_sucs.show();c("textarea").each(function(){this.value=""});edit=""}var d=15,e=$submit.val();function b(){if(d>0){$submit.val("请等待"+d+"秒");d--;setTimeout(b,1000)}else{$submit.val(e).attr("disabled",false).fadeTo("slow",1);d=15}}});