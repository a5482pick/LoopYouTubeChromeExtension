//Listen for message from background.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
      
            //If ordered to loop:
            if (request.iconSet == 0) {
                var video = document.getElementsByTagName('video')[0];
                video.loop = 1;    
            }
            
            else  {
                //If 'iconSet' is 1, cancel looping:
                var video = document.getElementsByTagName('video')[0];
                video.loop = 0;
                video.autoplay = 1;
            }    
        }
    }
);
