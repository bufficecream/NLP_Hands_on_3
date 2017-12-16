$( document ).ready(function() {
    var _allowSubmit = false;
	if(gup("assignmentId") === "ASSIGNMENT_ID_NOT_AVAILABLE") {
		   $(".text-uppercase").text("Please accept the Hit");
		   $("#sub_text").hide();	       
	       _allowSubmit = false;
	} else {
	        _allowSubmit = true;
	}

});

function gup(name) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if(results == null)
           return "";
    else
           return unescape(results[1]);
}
