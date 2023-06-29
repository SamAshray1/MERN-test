export default function Contact(){
    return(
        <>
        <h1 className="heading">Stay In Touch!</h1>
        <hr />
        <div className="contact">
            <p>Shoot me an email for any queries or just to chat. Can't wait to hear from you!</p>
            <form action="mailto:samuelthegamer12@gmail.com" method="post" enctype="text/plain">
            {/* <label for="name">Name:</label> */}
            <input type="text" id="name" name="name" placeholder="Name" required />
            <br />
            {/* <label for="email">Email:</label> */}
            <input type="email" id="email" name="email" placeholder="Email" required />
            <br />
            {/* <label for="message">Message:</label> */}
            <textarea id="message" name="message" placeholder="Message" required></textarea>
            <br />
            <input type="submit" value="Send Message" />
            </form>

        </div>
        </>
    )
}