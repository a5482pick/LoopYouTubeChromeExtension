//A variable to allow looping to be toggled on and off.
var icon = 0;

//The following commences whenever the extension icon is pressed.
chrome.browserAction.onClicked.addListener(function(tab) {
    
    //If icon is 0, we are changing from standard play to loop play.
    if (icon == 0) {
    
        //Change to loop icon.
        chrome.browserAction.setIcon({path: "loop.png"});
        
        //Change the tooltip.
        chrome.browserAction.setTitle({title : "Video is currently set to loop."})
     
        //Toggle the toggle variable:  next press will revert to standard play.
        icon = 1;
        
        //Send message to content script.
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action", "iconSet" : 0});
        });  
    }
    
    else
    
    {
        //When icon is 1, change to loop play from standard play.
        
        //Change to standard play icon.
        chrome.browserAction.setIcon({path: "play.png"});
        
        //Change the tooltip.
        chrome.browserAction.setTitle({title : "Video playback is normal."})
        
        //Next press will toggle to loop play.
        icon = 0;
        
        //Send message to content script.
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action", "iconSet" : 1});
        });  
    }
});

