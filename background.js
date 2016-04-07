var playingTab = -1; //Will be set to id of relevant tab. 
var looping = 0;   //Extension toggle is not yet clicked.
var playingUrl = "";



//The following commences whenever the extension button is pressed.
chrome.browserAction.onClicked.addListener(function(tab) {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        
        //When the browser action is clicked, record the current url.
        var playingUrl = tabs[0].url;
        
        //If 'looping' is 0, check it's a YouTube page.  If so, tell content script to toggle loop to on. 
        if (looping < 1) {
         
            looping = 1; 
         
            if (playingUrl.match(/youtube/)) {
                    
                playingTab = tabs[0].id;            
                chrome.tabs.sendMessage(playingTab, {"message": "buttonClicked", "loop" : 1});
            }
        }
        
        //If 'looping' is 1, check it's a YouTube page.  If so, tell content script to toggle loop to off. 
        else {
        
            looping = 0;
            
            if (playingUrl.match(/youtube/) ) {
            
                playingTab = tabs[0].id;            
                chrome.tabs.sendMessage(playingTab, {"message": "buttonClicked", "loop" : 0});
            }
        }
    });   
});

