var dropbox_val=[];
var dropbox_txt=[];


//validate product type (dropbox)
function check_dropbox(check_txt, check_val){
	var valid = 0;
	
	//console.log(dropbox_val);
	//console.log(dropbox_txt);
	
	for(i=0; i<dropbox_val.length; i++){
		//console.log("intial dropbox text: "+dropbox_txt[i]+" VS submitted dropbox text: "+check_txt);
		//console.log("intial dropbox value: "+dropbox_val[i]+" VS submitted dropbox text: "+check_val);

		//console.log(dropbox_val[i]==check_val);
		//console.log(dropbox_txt[i]==check_txt);
	
		if((dropbox_val[i]==check_val) && (dropbox_txt[i]==check_txt)){
			valid += 1;
		}
	
	}
	
	if(valid<1){
		//console.log("Product Type is Invalid!<br>");
		return "Product Type is Invalid!<br>";
	}
	else{
		//console.log("nothing");
		return "";
	}
}


//validate uploaded pic file
function check_upload(){
	/*
	if file is not selected, upload button is disabled
	param:
	#add_pic ... input txt (browse) to select pic
	#upload_pic ... upload btn to upload selected pic (copy pic to server & get picname fr 'add_pic_name')
	*/
	console.log("selected pic is: "+$("#add_pic").val());
	if($("#add_pic").val()!="")
		$("#upload_pic").prop("disabled",false);
	else
		$("#upload_pic").prop("disabled",true);
	
	
	/*
	if file is not uploaded, submit button is disabled
	param:
	#add_pic_name ... input txt (pic name) to display picname
	#add_product_submit ... submit btn to add new record to DB
	*/
	console.log("uploaded pic is: "+$("#add_pic_name").val());
	if($("#add_pic_name").val()!="-")
		$("#add_product_submit").prop("disabled",false);
	else
		$("#add_product_submit").prop("disabled",true);
	
	
}


//validate input price
function check_addPrice(){	
	//console.log("slice: "+$("#add_price").val().slice(1));
	//console.log("get 1st val: "+$("#add_price").val()[0]);
	
	
	if($("#add_price").val()[0]=='$'){
		if($.isNumeric($("#add_price").val().slice(1))){
			console.log("input price is number");
			var valid_price = $("#add_price").val().slice(1);
			$("#add_price").val(parseInt(valid_price));
		}
		else{
			console.log("input price is NOT number");
			$("#add_price").val("");
		}
			
	}else{
		if($.isNumeric($("#add_price").val())){
			console.log("input price is number");
			var valid_price = $("#add_price").val();
			$("#add_price").val(parseInt(valid_price));
		}
		else{
			console.log("input price is NOT number");
			$("#add_price").val("");
		}
	}
		
	var result = check_emptyInput();
	//console.log(result);
	
}


//check if there is any empty input
function check_emptyInput(){
	
	var result = "";	
	
	//console.log("submitted dropbox value: "+$("#add_type option:selected").val());
	//console.log("submitted dropbox text: "+$("#add_type option:selected").text());
	
	/*text of submitted dropbox must be trimmed bfr send to check_dropbox for validation(whitespace problem)*/
	//console.log("submitted dropbox text: "+$("#add_type option:selected").text().trim());
	
	if(($("#add_name").val().length<=0)||!(matches=$("#add_name").val().match(/\S+/g))){
		result += "Product Name is Required!<br>";
		$("#add_name").addClass("errIndicate");
	}else{
		$("#add_name").removeClass("errIndicate"); //remove classname only
	}
	
	if($("#add_type").val().length<=0)
		result += "Product Type is Required!<br>";
	else{
		//text of submitted dropbox must be trimmed bfr send to check_dropbox for validation(whitespace problem)
		result += check_dropbox($("#add_type option:selected").text().trim(), $("#add_type option:selected").val());
	}
	
	if(($("#add_brand").val().length<=0)||!(matches=$("#add_brand").val().match(/\S+/g))){
		result += "Product Brand is Required!<br>";
		$("#add_brand").addClass("errIndicate");
	}else{
		$("#add_brand").removeClass("errIndicate"); //remove classname only
	}
	
	if(($("#add_price").val().length<=0)||!(matches=$("#add_price").val().match(/\S+/g))){
		result += "Product Price is Required!<br>";
		$("#add_price").addClass("errIndicate");
	}else{
		$("#add_price").removeClass("errIndicate"); //remove classname only
	}
	
	if(($("#add_desc").val().length<=0)||!(matches=$("#add_desc").val().match(/\S+/g))){
		result += "Product Description is Required!";
		$("#add_desc").addClass("errIndicate");
	}else{
		$("#add_desc").removeClass("errIndicate"); //remove classname only
	}
	
		
	var search_divMessage = $("#form_submit").parent().find(".divMessage");
	
	if(result.length>0){
		if(search_divMessage.length<=0){
			var div_message = document.createElement("div");
			div_message.className = "divMessage";
			div_message.innerHTML = result;
			
			$("#form_submit").parent().append(div_message);
			
		}else{
			$(search_divMessage.get(0)).html(result);
		}
				
		return false;
	}else{
		if(search_divMessage.length>0){
			search_divMessage.remove();
		}
		
		return true;
	}
		
}

//count number of characters typed
function textarea_charCount(val){
	var charCount = val.value.length;
	$(".textareaCharCount").text("Number of Characters Typed: "+charCount);
	
}

//load when document is activated
$(document).ready(function(){
	console.log("JQuery Ready!");
	
	check_upload();
	
	$("#add_price").blur(function(){
		check_addPrice();
	});
	
	//var dropbox = document.getElementById("add_type");
	console.log($("#add_type option").length);
	
	for(i=0; i<($("#add_type option").length); i++){
		console.log($("#add_type option").get(i).value);
		console.log($("#add_type option").get(i).text);
		dropbox_val.push($("#add_type option").get(i).value);
		dropbox_txt.push($("#add_type option").get(i).text);
	}
	
});
