<!DOCTYPE html>











<html>
  <head>
    <title>Angry Birds Telepizza</title>
      <meta name="gwt:property" content="locale=es">

      <link rel="stylesheet" href="css/angry_birds_telepizza.css" type="text/css">
      

    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-23082676-23']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

      function hover(imgName, isOn)
       {
         if (document.images)
          {
          	var buttonImage = "";
          	if (imgName === "chrome_image") {
				buttonImage = "../images/button-abch";
            }
			else if (imgName === "fb_game_image") {
				buttonImage = "../images/button-abfb";
			}
			else if (imgName === "fb_image") {
				buttonImage = "../images/button-facebook";
			}
			else if (imgName === "twitter_image") {
				buttonImage = "../images/button-twitter";
			}
			else if (imgName === "telepizza_image") {
				buttonImage = "../images/button-telepizza";
			}
			else if (imgName === "tuenti_image") {
				buttonImage = "../images/button-tuenti"
			}

			if (buttonImage === "") return;

			if (isOn === true) {
				buttonImage = buttonImage + "-hover.png";
			}
			else {
				buttonImage = buttonImage + ".png";
			}

            document[imgName].src = buttonImage;
          }
       }

    </script>

      <script>
          function externalLink(type) {
              _gaq.push(['_trackEvent', 'Promo', 'Promotional Link: ' + type]);
          }
      </script>

      
      <script type="text/javascript">
        _gaq.push(['_trackEvent', 'Validation', 'Validation Failed', 'Fail: OPERA']);
      </script>
    
    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
  </head>
  <body>
    <div id="header">
      <img src="../images/logo-abtp.png" onclick="externalLink('Telepizza header'); window.open('http://www.telepizza.es', '_blank');"/>
    </div>

    

    

    
  
    
    
    
    
      <div class="sorry-container">
        <div class="sorry">
          <p class="larger">
            We're sorry, but it appears that your browser does not currently support
            the web technologies needed to play Angry Birds.
          </p>
          <p class="smaller">
            To teach the pigs a lesson:
          </p>
          <table>
            <tr>
              <td><a onclick="externalLink('OPERA')" href="http://www.google.com/chrome/intl/en/p/angrybirds.html?utm_source=partner-game-angrybirds-opera&amp;utm_medium=et" target="_top">
                <img src='validate/chrome-icon.png' class="logo"></a>
              </td>
              <td><a onclick="externalLink('OPERA')" href="http://www.google.com/chrome/intl/en/p/angrybirds.html?utm_source=partner-game-angrybirds-opera&amp;utm_medium=et" target="_top">Download Google
                  Chrome</a>, a fast new browser - now with the Angry Birds game.
                (Recommended)</td>
            </tr>
          </table>
        </div>
      </div>

    
    <noscript>
      <div class="info-noscript">
        Your web browser must have JavaScript enabled
        in order for this application to display correctly.
      </div>
    </noscript>

    <div id="footer">
    	<img src="../images/copyright-texts.png" />
    </div>

  </body>
</html>
