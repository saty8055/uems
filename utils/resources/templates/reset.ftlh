<html>
	<body>
		<h2 style="color:${marker.primeColor}"><b>Password Recovery !</b></h2>
		<h3><b>Hey ${name},</b></h3>
		<p style='padding:10px; padding-top:3px; text-align:justify;'>
            We've received a password reset request from you. Kiindly use the below link to set a new password !
		</p>
		<div style="width:100%; text-align:center; margin-bottom:10px;">
        	<a href="${url}" style="background-color:${marker.primeColor}; color:${marker.backColor}; padding:15px; text-decoration:none;">
        	    <b>Reset Password</b>
        	</a>
		</div>
        <h4 style="color:rgba(192,39,45); font-weight:bold; padding:10px;">The link will be valid for 60 minutes only !</h4>
		<h3 style="color:${marker.primeColor}; margin-bottom:0px; padding-bottom:0px;">Regards</h3>
		<img src="${marker.logo}" style="height:30px; width:100px; margin-top:5px;">
	</body>
</html>