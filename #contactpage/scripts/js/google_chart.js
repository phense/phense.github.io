<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- //////////   the meta data. Its a good idea if you edit the meta tags to suit you  /////////////////  -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

<meta charset="UTF-8" />
<meta name="title" content="John Doe Pro CV" />
<meta name="keywords" content="CV, Resume, Business, Professional, Designer, etc." />
<meta name="description" content="Pro CV is here to help you" />
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>


<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ////////  include the main, print and handheld stylesheets, plus jquery and ajax form script /////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

<link rel="stylesheet" href="css/procv.css" type="text/css" media="screen" />
<link rel="stylesheet" href="css/handheld.css" type="text/css" media="handheld" />
<link rel="stylesheet" href="css/handheld.css" type="text/css" media="only screen and (max-device-width: 480px)"  />
<link rel="stylesheet" href="css/print.css" type="text/css" media="print" />

<script type="text/javascript" src="js/jquery_1.4.2.min.js"></script>
<script type="text/javascript" src="js/contact.js"></script>

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- //////////   if its IE then we need to include the famous shiv, so that IE gets HTML5!  ////////////  -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

<!--[if IE]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<!--[if IE]>
	<link rel="stylesheet" href="css/ie.css" type="text/css" />
<![endif]-->
<!--[if lt IE 7]>
	<script src="scripts/DD_belatedPNG.js"></script>
	<link rel="stylesheet" href="css/ie6.css" type="text/css" />
	<script>
     DD_belatedPNG.fix('.transparent, #chart img, .employment_img, .weblink, .divider, .social_media');
	</script>
<![endif]-->
<!--[if IE 7]>
	<link rel="stylesheet" href="css/ie6.css" type="text/css" />
<![endif]-->

	
<title>ProCV</title>
</head>


<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- //////////////////////////////////////   start the page code  //////////////////////////////////////  -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<body>



<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///// this is the fallback PHP script to capture the form data if javascript is not enabled ////////  -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

<div id="wrapper">


<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- //// the side bar navigation area. See the documentation on how to edit this to your liking ////////  -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

<div id="sidebar">
	<nav role="navigation">
		<ul>
			<li><a href="#skillspage" class="btn-slide" id="skills" title="View my skills and experience">Skills</a></li>
			<li><a href="#employmentpage" class="btn-slide" id="employment" title="See what top companies I have worked for">Employment</a>
				<ul class="subnav">
					<li><a href="#sub1page" class="btn-slide sublink" id="sub1" title="A sub page">Sub 1</a></li>
					<li><a href="#sub2page" class="btn-slide sublink" id="sub2" title="Another sub page">Sub 2</a></li>
				</ul>	
			</li>
			<li><a href="#educationpage" class="btn-slide" id="education" title="View where I studied and gained my foundtion skills">Education</a></li>
			<li><a href="#referencespage" class="btn-slide" id="references" title="Need references? No problem.">References</a>
				<ul class="subnav">
					<li><a href="#sub3page" class="btn-slide sublink" id="sub3" title="Yet another sub page">Sub 3</a></li>
				</ul>				
			</li>
			<li><a href="#contactpage" class="btn-slide" id="contact" title="Feel free to Contact Me.">Contact</a></li>
			<li><div class="divider"></div></li>
			<li><a href="#aboutmepage" class="btn-slide" id="about" title="Click here to find out a little more about me!">About Me</a></li>
		</ul>
	</nav>
</div> 
<!-- end sidebar -->


<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////// all the page content is inside this div.page_wrap  ///////////////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<div class="page_wrap">


<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////// the main header, whereyour contact details are displayed  ////////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

		
		<header role="banner">
	    		<p id="email_link" class="transparent"><span class="print_only hidden">Email: </span>you@your-domain.com</p>
	    		<p id="web" class="transparent"><span class="print_only hidden">Website :</span><a href="#" target="_blank" title="View my website">www.your-domain.com</a></p>
	    		<p id="phone" class="transparent"><span class="print_only hidden">Telephone:</span>+001 (0) 11 2345 6789</p>
	    		<p id="print" class="transparent"><input id="print_btn" type="button" onclick="window.print()" value="Print" /></p>
		</header>

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////// this is where your name and any sub title are shown //////////////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
		<hgroup>
	    	<h1 class="headline">JOHN DOE</h1>
	    	<h2 class="sub_headline">FRONT END DEVELOPER</h2>
		</hgroup>


<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////// the SKILLS section  //////////////////////////////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->


		<section class="panel skills" id="skillspage">
			<h3 class="title_skills transparent">SKILLS</h3>
			<div class="divider"></div>
			<article>
				<h4>SOME BRIEF INFO ABOUT MY SKILL SET</h4>
				<div id="chart"></div><p>This is a google API pie chart. Its really easy to set up and use, I've included some instructions in the readme.html file and to be honest, google have made this oh so simple. They have a wizard that basically does it all for you! Even if you balls it up some how, Ive included a screenshot of the default settings used here.</p>
			</article>
			<div class="divider564"></div>
			<article>
			<h4><span class="sub">ADVANCED</span>PHP / MySQL</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l</p>
			</article>
			<div class="divider564"></div>
			<article>
			<h4><span class="sub">INTERMIDIATE</span>CSS / XHTML / HTML5</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l</p>
				<ul>
					<li>CSS3 Guru</li>
					<li>XHTML God</li>
					<li>HTML5 wannabe</li>
				</ul>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>	
			</article>
			<div class="divider564"></div>
			<article>
			<h4><span class="sub">BEGINNER</span>jQuery / JAVASCRIPT</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l</p>
			</article>						
		</section>


<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////// the EMPLOYMENT section  //////////////////////////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

		
		<section class="panel employment" id="employmentpage">
			<h3 class="title_employment transparent">EMPLOYMENT</h3>
			<div class="divider"></div>
			<article>
				<h4>SOME BRIEF ABOUT MY EXPERIENCE</h4>
				<p>This is where you put some text about your employment experience...</p>
			</article>
			<div class="divider564"></div>
			<article>
			<h4><span class="sub">2009 - PRESENT DAY</span>YELLOWFISH MEDIA </h4>
			<p><img class="employment_img floatLeft" src="images/yellow_fish.png" title="YellowFish Media" alt="#" />Here is a picture of a yellow fish (in full colour too). Its just an example of how a paragraph might look if you want to add an image, for example a copany logo. Ive added some notes in the docs that come with the download to help you out :) </p>
			<p class="web"><a href="#" class="weblink CondensedOblique" title="Take me to the homepage of Yellow Fish Media">www.yellowfishmedia.com</a></p>
			</article>
			<div class="divider564"></div>
			<article>
			<h4><span class="sub">2003 - 2009</span>GREENCYCLE INC</h4>
			<p><img class="employment_img floatLeft" src="images/green_cycle.png" title="Green Cycle INC" alt="#" />This pic is in black and white so that you can see the difference in contrast from the colour image above. Its completely up to you how you, but the good news is that they both look great!.</p>
			<p class="web"><a href="#" class="weblink CondensedOblique" title="Take me to the homepage of xxxxxx">www.companydomain.net</a></p>
			</article>
			<div class="divider564"></div>
			<article>
			<h4><span class="sub">2001 - 2003</span>RUBIC MEDIA LTD</h4>
			<p><img class="employment_img floatLeft" src="images/red_rubic.png" title="Rubic Media" alt="#" />Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>		
			<p class="web"><a href="#" class="weblink CondensedOblique" title="Take me to the homepage of xxxxxx">www.companydomain.co.uk</a></p>
			</article>				
		</section>	

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////// the sub1 section  //////////////////////////////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->


		<section class="panel sub1" id="sub1page">
			<h3 class="title_employment transparent">SUB 1</h3>
			<div class="divider"></div>
			<article>
				<h4>An example of a sub page</h4>
				<p>Anything can go here. Or we can just copy the skills page ;-)</p>
			</article>
			<div class="divider564"></div>
			<article>
			<h4><span class="sub">ADVANCED</span>PHP / MySQL</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l</p>
			</article>
			<div class="divider564"></div>
			<article>
			<h4><span class="sub">INTERMIDIATE</span>CSS / XHTML / HTML5</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l</p>
				<ul>
					<li>CSS3 Guru</li>
					<li>XHTML God</li>
					<li>HTML5 wannabe</li>
				</ul>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>	
			</article>
			<div class="divider564"></div>
			<article>
			<h4><span class="sub">BEGINNER</span>jQuery / JAVASCRIPT</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l</p>
			</article>						
		</section>
	
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////// the sub2 section  //////////////////////////////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->


		<section class="panel sub2" id="sub2page">
			<h3 class="title_employment transparent">SUB 2</h3>
			<div class="divider"></div>
			<article>
				<h4>Yet another sub page </h4>
				<p>But this sub page has no text? Thats right, it is just a simple example, fully documented in the readme file.</p>
			</article>
			<div class="divider564"></div>
									
		</section>
		
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////// the EDUCATION section  ///////////////////////////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

		<section class="panel education" id="educationpage">
			<h3 class="title_education transparent">EDUCATION</h3>
			<div class="divider"></div>			
			<article>
			<h4><span class="sub">2001 - 2003</span>CHICAGO UNIVERSITY, ILLINOIS</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu</p>
			<p class="CondensedOblique">Masters Degree 1st</p>
			</article>
			<div class="divider564"></div>
			<article>
			<h4><span class="sub">1999 - 2001</span>FORSYTH UNIVERSITY, TEXAS</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu</p>
			<p class="CondensedOblique">BA Honours 2:1</p>
			</article>			
		</section>				


<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////// the REFERENCES section  //////////////////////////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

		<section class="panel references" id="referencespage">
			<h3 class="title_references transparent">REFERENCES</h3>
			<div class="divider"></div>
			<article>
				<h4>YOU CAN SEE MY EXCELLENT REFERENCES</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
			</article>
			<div class="divider564"></div>
			<article>
			<h4><span class="sub">UNIVERSITY OF OHIO</span>PROF. JOHN MCGUINESS</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu</p>
			<p class="CondensedOblique">
			<span class="ref_contact">Tel: (0) 1234 567890<br />Email: myname@ohio.uni</span>OHIO UNIVERSITY<br />Resume Depatment<br />Some Street<br />OHIO 12345<br />USA
			</p>
			</article>
			<div class="divider564"></div>
			<article>
			<h4><span class="sub">BANK MANAGER</span>MR. B SMYTHE</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu</p>
			<p class="CondensedOblique">
			<span class="ref_contact">Tel: (0) 1234 567890<br />Email: smythe@abank.com</span>SAVINGS BANK PLC<br />Resume Depatment<br />Some Street<br />LONDON WA1<br />UK
			</p>
			</article>						
		</section>

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////// the sub2 section  //////////////////////////////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->


		<section class="panel sub3" id="sub3page">
			<h3 class="title_references transparent">SUB 3</h3>
			<div class="divider"></div>
			<article>
				<h4>Ah Man, another sub section? </h4>
				<p>I'm affriad so, but really, you dont have to use them, they are just here to use if you want them!</p>
			</article>
			<div class="divider564"></div>
									
		</section>
		
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////the CONTACT form section. There is a few more things going on here.  ////////////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
		
		<section class="panel contact" id="contactpage">
			<h3 class="title_contact transparent">CONTACT ME</h3>
			<div class="divider"></div>
			<div class="split_col_wrapper">
				<div class="split_col1">					
					<article>
					<h4>CONTACT ME</h4>
					<p>Add some text about how excited you will be to receive an email.</p>
					</article>			
							
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////// if user has javascript disabled, we still show a thank you message ///////////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

					
					<!-- non javascript fallback, not pretty but works ;) -->
					
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- //////////////////////////// the contact form in all its HTML5 glory. ////////////////////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->


					<form action="#contactpage" method="post" id="contactform">
						
						<label for="name">Name:</label>
						<span class="error" id="name_error">Please enter a name</span>
						<input type="text" class="textfield input" id="name" name="name" value="" placeholder="Insert your name" autofocus="autofocus" />
						<label for="email">Email:</label>
						<span class="error" id="email_error">Please enter an email address</span>
						<span class="error" id="email_error2">Please enter a valid email address</span>
						<input type="text" class="textfield input" id="email" name="email" value="" placeholder="Insert your email"/>
						
						<label for="msg">Message:</label>
						<span class="error" id="msg_error">Please enter a message</span>
						<textarea name="msg" id="msg" class="textarea input" cols="1" rows="1" placeholder="Type your message here"></textarea>		
						<br />
						<input type="submit" class="submit_btn textfield" value="Contact Me!" id="submit_btn" />	
						<input type="hidden" name="act" value="contact_sbmt" />				
					</form>
				</div>
				
					
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ////////////// the social media section. Change the links and icons to suit your social media ////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->					
				
				<div class="split_col2">
					<article>
					<h4>SOCIAL MEDIA</h4>
					<p>Check out my social universe! Add some text here about your social network.</p>
					</article>

					<div class="divider200"></div>
					<p id="facebook" class="social_media"><a href="#"  title="My Facebook woo">Facebook</a></p>
					<p id="reddit" class="social_media"><a href="#"  title="My Reddit">Reddit</a></p>
					<p id="twitter" class="social_media"><a href="#"  title="My Twitter">Twitter</a></p>
					<p id="delicious" class="social_media"><a href="#"  title="My Delicious">Delicious</a></p>
					<p id="flickr" class="social_media"><a href="#" title="My Flickr">Flickr</a></p>
					<div class="divider200"></div>

					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
				
				</div>
			</div><!-- end split_col_wrapper -->
	
		</section>	

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////// This is the ABOUT ME section  ////////////////////////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->


		<section class="panel about" id="aboutmepage">
			
			<h3 class="title_about transparent">ABOUT ME</h3>
			<div class="divider"></div>
			<article>
				<h4>SOME BRIEF INTRO TEXT ABOUT ME</h4>
				<p>This theme is based on a line height of 18 pixels, meaning that all lines are either 18 pixels in height or multiples of 18px. For example, if a heading is set to a font size of 24 pixels, then the line height can't be 18px (as this is smaller than the font), so the line height is set to the next multiple (36px). This way the theme is themed (pardon the pun) and the vertical alignment looks pleasing on the eye.</p>
			</article>
			<div class="divider564"></div>
			<article>
			<h4><span class="sub">OBJECTIVE</span>MY OBJECTIVE / MISSION STATEMENT / GOAL?</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
			<ol>
					<li>Bullet List Example</li>
					<li>Bullet List Example</li>
					<li>Bullet List Example</li>
				</ol>
			</article>
			<div class="divider564"></div>
			<article>
			<h4><span class="sub">INTERESTS</span>MY INTERESTS AND HOBBIES</h4>				
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
				<ul>
					<li>Bullet List Example</li>
					<li>Bullet List Example</li>
					<li>Bullet List Example</li>
				</ul>					
			</article>						
		</section>
		
				
		<!-- Any new sections would go here  :) -->
		

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- /////////////////////////////////////// the footer message  //////////////////////////////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

		<p class="footnote t-center">Thanks for looking at my CV. Any text can go here.</p>	


<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- //////////// this is a nice little message that only shows on the printed version :) /////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->

		<div id="printed-footnote">Thank you for printing my CV. If you have any questions, please feel free to contact me.</div>
		
</div><!-- end page wrap -->



<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- //////// This is the header pic profile image. The divs are positioned absolute so  //////////////// -->
<!-- //////// you dont need to worry, you can however, change the css if you wish        //////////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<div id="pic_frame_wrapper" class="box-shadow transparent">
	<div id="pic_frame">
	</div><!-- end pic_frame -->
</div><!-- end pic_frame_wrapper -->

</div><!-- end_wrapper -->



<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ////////////// some jquery magic to say, when you click on a nav tab, hide all sections   ////////// -->
<!-- ////////////// except the section I want to see.                                          ////////// -->
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////// -->


<script type="text/javascript">
$(document).ready(function() {
	// scroll page to top on load
	$('html, body').animate({scrollTop:0}, 'slow');

	// show only the first section when the page loads
	$(".panel").slice(0,1).show().addClass('activePanel');
	
	// hide all the other sections
	$('.panel').slice(1).hide(); 
	
	// Change the first link in the navigation to an active status
	$(".btn-slide").slice(0,1).addClass('activeLink');

	// when you click on a navigation, do something
	$(".btn-slide").click(function(){
			
			if(!$(this).hasClass('sublink'))
			{
				// scroll up all subnavs
				$(".subnav").slideUp('fast');
				
				// if the link has a subnav, slide it down
				if($(this).siblings('.subnav'))
				{
					$(this).siblings(".subnav").slideDown('slow');//css('display','block');
				}	
			}
			
		// if the nav link clicked is already active then 
		// do something, else do something else
		if($(this).hasClass('activeLink'))
		{
			
			
			// if you want, you can add some style/effect to the 
			// link thats already active when pressed. I've left this 
			// blank becuase im happy that nothing happens :)
		} else { 
		  
			
			// if the nav link is not active, then slide
		  // up the current active panel (section)
		  $('.activePanel').slideUp('slow');
		  
		  // we then slidedown the panel (section) that has the 
		  // same class name as the navigation ID
		  var contentPanel = $(this).attr('id');
		  $("."+contentPanel).addClass('activePanel').slideDown('slow');
			
		  // then we remove the active link status from its current
		  // place and add .activelink to the nav link clicked
		  $('.activeLink').toggleClass("activeLink");
		  $(this).toggleClass("activeLink");
		  
		  // jut to be sure, we scroll the page to the top so that the user
		  // always sees the top headings after clicking a new link
		  $('html, body').animate({scrollTop:0}, 'slow');
		}
	  return false;
	});

});
</script>
<script language="javascript" src="http://www.google.com/jsapi"></script>
<script language="javascript" src="js/google_chart.js"></script>
    </body>
</html>
