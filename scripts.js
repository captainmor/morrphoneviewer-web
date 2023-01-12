 //Check out more cool stuff on my site: https://rilling.dev/

/*Only needed for the controls*/
var phone = document.getElementById("phone_1"),
  iframe = document.getElementById("frame_1");

/*View*/
function updateView(view) {
  if (view) {
    phone.className = "phone view_" + view;
  }
}

/*Controls*/
function updateIframe() {
  iframe.src = document.getElementById("iframeURL").value;

  phone.style.width = document.getElementById("iframeWidth").value + "px";
  phone.style.height = document.getElementById("iframeHeight").value + "px";

  /*Idea by /u/aerosole*/
  document.getElementById("wrapper").style.perspective = (
    document.getElementById("iframePerspective").checked ? "1000px" : "none"
  );
}

function updateIframeUrl() {
  console.log("updateIframeUrl()");
  iframe.src = document.getElementById("iframeURL").value;
}

function updateIframeByPhoneViewport(width, height) {
    iframe.src = document.getElementById("iframeURL").value;
  
    phone.style.width = width + "px";
    phone.style.height = height + "px";
}

/*Events*/
document.getElementById("iframeURL").addEventListener("onfocusout", function() {
  console.log('onblur:')
  //iframe.src = document.getElementById("iframeURL").value;
});

document.getElementById("controls").addEventListener("change", function() {
  console.log('controls onchange:');
  //iframe.src = document.getElementById("iframeURL").value;
});

// document.getElementById("views").addEventListener("click", function(evt) {
//   updateView(evt);
// });

function getPhoneSelection(opt) {
    setViewPort(opt.value)
}

function setViewPort(phone)
{
    var width = 400;
    var height = 650;
    
    if(phone === 'ip13maxpro'){
        width = 428;
        height = 926;
    }
    if(phone === 'ip13pro'){
        width = 390;
        height = 844;
    }
    if(phone === 'sgalaxy22'){
        width = 360;
        height = 780;
    }

    console.log(`phone: ${phone} | Viewport: ${width} x ${height}`);

    updateIframeByPhoneViewport(width, height);
}

  function onLoad(){
    console.log("onLoad()");
    var e = document.getElementById("phones");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    setViewPort(text);
  }