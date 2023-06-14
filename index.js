window.addEventListener('scroll',()=>{
    var scroll = document.getElementById('nav')
    scroll.classList.toggle("scroll", window.scrollY > 0);
})
 
function sendEmail(e) {
    e.preventDefault();

    var name = document.forms["submit-to-google-sheet"]["Name"].value;
    var email = document.forms["submit-to-google-sheet"]["Email"].value;
    var message = document.forms["submit-to-google-sheet"]["Message"].value;

    var subject = "Contact Form Submission";
    var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

    var mailtoLink = "maito: charitybahati19@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
}