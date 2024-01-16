
document.addEventListener("DOMContentLoaded", function(){


changeName();
    var themeInput = document.getElementById("theme");
    themeInput.addEventListener("change", function(){
        changeTheme(this.value);
    })

const status = localStorage.getItem("status");
if(status == "banned"){
    document.write("<h1>Account Banned</h1>");
} else if (status == "normal"){
} else if (status == "golden"){
const b = document.body;
b.classList.remove("night", "frost", "ruby", "orange", "lemon", "grass", "winter", "royal", "christmas");
b.classList.add("golden");

} else{}





const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    changeTheme(savedTheme);
    themeInput.value = savedTheme;
} else {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
  changeTheme("night")
} else {
  changeTheme("frost")
}
themeInput.value = prefersDarkScheme.matches ? "night" : "frost";
}

function changeTheme(theme) {
    const body = document.body;

    // Remove existing theme classes
    body.classList.remove('frost', 'night', 'ruby', 'orange', 'lemon', 'grass', 'winter', 'royal', 'christmas');
    // Add the selected theme class
    body.classList.add(theme);

    localStorage.setItem('theme', theme);

}
});


function AB() {
            let inFrame;

            try {
                inFrame = window !== top;
            } catch (e) {
                inFrame = true;
            }

            if (!inFrame && !navigator.userAgent.includes("Firefox")) {
                const popup = open("about:blank", "_blank");
                if (!popup || popup.closed) {
                    alert("Unblock Failed. Please allow popups and redirects.");
                } else {
                    const doc = popup.document;
                    const iframe = doc.createElement("iframe");
                    const style = iframe.style;
                    const link = doc.createElement("link");
                    const icon = "/sources/vortice.png";
                    doc.title = "Vortice";
                    link.rel = "icon";
                    link.href = icon;
                    iframe.src = location.href;
                    style.position = "fixed";
                    style.top = style.bottom = style.left = style.right = 0;
                    style.border = style.outline = "none";
                    style.width = style.height = "100%";
                    doc.head.appendChild(link);
                    doc.body.appendChild(iframe);
                    location.replace("about:blank");
                    var win = window.open("about:blank", "_self");
                    win.close();
                }
            }
        }

//        
//
//
//
//

function changeName(override){
    if (override == true){
        localStorage.setItem("name", prompt("We're Back, What's your name?", ""));
        if (localStorage.getItem("name") == null || localStorage.getItem("name") == ""){
            localStorage.setItem("name", "Guest");
            location.reload();
        }
    }
    let name = localStorage.getItem("name");
        let text;
        if (name){
            const welcome = document.getElementById("welcome");
            if(name == "Guest"){
                if(welcome){welcome.innerHTML = "Welcome back to Vortice";}
            } else if(name == "Trig"){
                if(welcome){welcome.innerHTML = "Welcome back, Owner of Vortice"; localStorage.setItem("status", "golden")}
            } else if(name == "Mace"){
                if(welcome){welcome.innerHTML = "Sorry Mace, you're banned"; localStorage.setItem("status", "banned")}
            } else {
                if(welcome){welcome.innerHTML = "Welcome back to Vortice, " + name;}
            }
        } else {
            let person = prompt("Welcome to Vortice, What's your name?", "");
            
            if (person == null || person == "") {
                text = "Welcome to Vortice!";
                localStorage.setItem("name", "Guest");
            } else if(name == "Trig"){
                localStorage.setItem("status", "golden");
            } else if (name == "Mace"){
                localStorage.setItem("status", "banned");
            } else {
                localStorage.setItem("name", person);
                location.reload();
            }
        }
}