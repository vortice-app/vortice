
document.addEventListener("DOMContentLoaded", function(){


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








const  links = ["https://roundrockisd.online/v/","https://mathplayground.cloud/v/","https://tutor4math.vercel.app/v/", "https://interstellar-kappa-six.vercel.app/v/", "https://s2.cambrianscientific.com/v/", "https://mre.stormfood.com/v/", "https://e.tecteach.net/v/", "https://us.lakeballs.fi/v/", "https://abcusd-unblocked.com/v/", "https://studyforsubjects.vercel.app/v/", "https://schooltech-theta.vercel.app/v/", "https://sunburst.sun.2of1.org/v/", "https://interstellarpro.netlify.app/v/"];

async function testLoadTime(links) {
    const progressBar = document.getElementById("progress");
    var progress = 0;
    let fastestTime = Infinity;
  
    for (const url of links) {
      const startTime = performance.now();
  progress++;
  var percent = (progress / links.length) * 100;
  progressBar.style.width = percent + "%";
      try {
        const response = await fetch(url, { method: 'HEAD' });
        const endTime = performance.now();
        if (response.status == "200") {
          const loadTime = endTime - startTime;
  
          // Check if this is the fastest URL
          if (loadTime < fastestTime) {
            fastestTime = loadTime;
            fastestUrl = url;
          }
        } else {
          //console.error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        //console.error(`Error fetching ${url}: ${error.message}`);
      }
    }
  
    return fastestUrl;
  }
  
  // Example usage:
  testLoadTime(links)
    .then(fastestUrl => {
      if (fastestUrl) {
        console.log(`The fastest URL is: ${fastestUrl}`);
      } else {
        console.log('All URLs failed to load.');
      }
    })
    .catch(error => {
      console.error(`Error testing load time: ${error.message}`);
    });
  

