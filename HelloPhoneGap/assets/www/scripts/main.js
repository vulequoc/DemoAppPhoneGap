function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, true);
}

function onDeviceReady() {
	navigator.notification.alert("PhoneGap is working");
}

function onBtnClick() {
	var phoneName = window.device.name;
	alert("Your phone's Name is: " + phoneName);
}
function racaimoi()
{
	
	alert(window.innerWidth);
}

function loadRSS()
{
	$(function(){
		url='http://dantri.com.vn/trangchu.rss';
		$.ajax({
			type:"GET",
			dataType:'json',
			error:function()
			{
				alert("unable load feed")
			},
			success:function(xml)
			{
				values= xml.responseData.feed.entries;
				console.log(values);
			}
		});
	});
}