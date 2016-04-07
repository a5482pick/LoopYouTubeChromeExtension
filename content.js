//Listen for message from background.js
chrome.runtime.onMessage.addListener(

    function(request, sender, sendResponse) {
    
        if( request.message === "buttonClicked" ) {
      
            //If ordered to loop:
            if (request.loop == 1) {
            
                var video = document.getElementsByTagName('video')[0];
                video.loop = 1;    
                
                //Set the text colour to blue to represent 'looping'.
                document.body.style.color="blue";
                var elements = document.body.getElementsByTagName("*");
      
                for (i = 0; i < elements.length; i++)  {

                    elements[i].style.color = "blue"; 
                }       
            }   
            
            else  {
            
                //If 'loop' is 0, cancel looping:
                var video = document.getElementsByTagName('video')[0];
                video.loop = 0;
                video.autoplay = 1;
                
                //Set the text colour to green to represent 'not looping'.
                document.body.style.color="green";
                var elements = document.body.getElementsByTagName("*");
      
                for (i = 0; i < elements.length; i++)  {

                    elements[i].style.color = "green"; 
                }
            }    
        }
    }
);
