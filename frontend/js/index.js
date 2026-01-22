const HomeButton = document.getElementById("goHome");
HomeButton.addEventListener('click', function() {
    // Redirect the user to the desired URL
    window.location.href = "./index.html";
});

const LogoutButton = document.getElementById("logout");
LogoutButton.addEventListener('click', function() {
    // Redirect the user to the desired URL
    window.location.href = "./splashScreen.html";
});


const WorkButton = document.getElementById("work");
WorkButton.addEventListener('click', function() {
    // Redirect the user to the desired URL
    window.location.href = "./work.html";
});

