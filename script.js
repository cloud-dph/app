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
        window.location.href = `profile.html?name=${user.name}`;
    } else {
        message.innerText = "Invalid credentials!";
    }
}

// Fetch and display profile data
function getUserData() {
    const params = new URLSearchParams(window.location.search);
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
        window.location.href = "index.html";
        return;
    }

    let output = "";
    params.forEach((_, key) => {
        if (loggedInUser[key]) {
            output += `<p><strong>${key}:</strong> ${loggedInUser[key]}</p>`;
        }
    });

    document.getElementById("profileInfo").innerHTML = output;
    document.getElementById("profileImage").innerText = loggedInUser.fullName.charAt(0);
}

// Logout function (called in logout.html)
if (window.location.pathname.includes("logout.html")) {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}

