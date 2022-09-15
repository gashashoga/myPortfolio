const auto_type = document.querySelector(".auto-type");
var typed = new Typed(auto_type, {
  strings: ["Milan", "a Problem Solver", "a Developer", "a Freelancer"],
  typeSpeed: 150,
  backSpeed: 150,
});

function sendEmail() {
  window.location = "mailto:milangasevic2@gmail.com";
}
