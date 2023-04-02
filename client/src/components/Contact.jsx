import React from "react";
import "../contact.css"

function Contact(){
    return(
        <div className="contact">
	<div className="contact-box">
		<form method="POST"
			action=
	"mailto: samuelthegamer12@gmail.com"
			enctype="multipart/form-data">
			<div class="control">
				Name:
					<input aria-required=""
						id="name"
						type="text" />
			</div>
			<div class="control">
				Ph no:
				<input aria-required=""
					id="mobile_number"
					type="tel" />
			</div>
			<div class="control">
				Suggestion:
				<textarea rows="7"
						cols="30"
						name="comment">
				</textarea>
			</div>
			<div class="control">
				<input type="submit"
					value="Submit" />
			</div>
		</form>
	</div>
    </div>
)
}

export default Contact;

