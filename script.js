// Auto-login check
window.onload = function() {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser && window.location.pathname.includes("index.html")) {
        window.location.href = "https://abc.xyz";  // Redirect to abc.xyz if already logged in
    }
};

// Check mobile number and reveal password field
function checkMobile() {
    let mobileInput = document.getElementById("mobile");
    let passwordInput = document.getElementById("password");

    if (mobileInput.value.length === 10) {
        passwordInput.style.display = "block";
        passwordInput.focus();
    } else {
        passwordInput.style.display = "none";
    }
}

// Login function
function login() {
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const user = users.find(u => u.mobile === mobile && u.password === password);

    if (user) {
        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "https://abc.xyz";  // Redirect to abc.xyz
    } else {
        message.innerText = "Invalid credentials!";
    }
}

// Logout function (called in logout.html)
if (window.location.pathname.includes("logout.html")) {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}
