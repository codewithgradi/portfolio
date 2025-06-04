$('document').ready(
  format(),
  getWeather(),
  showPopUp()
)
function showPopUp() {
  const message = document.querySelector('.store-m')
  const background=document.getElementById('overlay')
  setTimeout(() => {
    background.style.display='block'
    message.style.transform = 'scaleY(1)'
  }, 6000)
  
}
function hidePopup() {
  const message = document.querySelector('.store-m')
  const background=document.getElementById('overlay')  
  background.style.display = 'none'
  message.style.transform='scaleY(0)'
}
document.addEventListener('DOMContentLoaded',description)
//Loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    // const content = document.getElementById("content");

    // Wait for animation to complete
    setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        loader.style.display = "none";
        
      }, 500);
    }, 2600); // Duration of the loading animation
});
// appleclick
 const appleIcon = document.querySelector(".apple-nav");
  const popup = document.querySelector(".apple-click");

  appleIcon.addEventListener("click", () => {
    if (popup.style.transform === "scale(1)") {
      popup.style.transform = "scale(0)";
    } else {
      popup.style.transform = "scale(1)";
    }
  });

// X for close
const window_ = document.querySelector('.window')

const about = document.querySelector('#about')

  about.addEventListener('click', () => {
    window_.style.transform = 'scale(1)';
    window_.style.display = 'block';
    window_.style.position = 'fixed';
    window_.style.top = '50%';
    window_.style.left = '50%';
    document.getElementById('overlay').style.display = 'block';
    window_.style.transform = 'translate(-50%,-50%)';
    
  })

// fullscreen

function goFullScreen() {
  const icon = document.getElementById('fullscreen')
  const fullEl = document.documentElement
    if (fullEl.requestFullscreen) {
      fullEl.requestFullscreen()
    }
  
}
function goLink() {
  window.location.href="https://www.linkedin.com/in/gradi-puata/"
}
function goGit() {
  window.location.href = "https://github.com/codewithgradi" 
}


function contactClick() {
  const contact = document.querySelector(".contact")

    contact.style.transform = 'scale(1)';
    contact.style.display = 'block';
    contact.style.position = 'fixed';
    contact.style.top = '50%';
    contact.style.left = '50%';
    document.getElementById('overlay').style.display = 'block';
    contact.style.transform = 'translate(-50%,-50%)';

}

function certs() {
  const certs_ = document.querySelector(".certs")
  const clickable = document.querySelector('#click_cert')
  document.getElementById('overlay').style.display = 'none';
  certs_.style.display='block'
  
}

function format() {
  const current = new Date()
  const span = document.getElementById('datetime')
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  
  const weekday = weekdays[current.getDay()-1]
  const day = current.getDate()
  const month = months[current.getMonth()]
  const hours = String(current.getHours())
  const min = String(current.getMinutes())

  const formated = `${weekday}, ${day} ${month} ${hours}:${min}`
  span.textContent = formated;
}

function getWeather() {
  const apiKey = 'f66be96c87871f21d7847b1b1bec197b';
let city = 'durban';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }

    const {
      name: cityName,
      main: { temp, humidity },
      weather: [{ description, id }],
      wind: { speed }
    } = data;

    function getEmoji(weatherID) {
      switch (true) {
        case (weatherID >= 200 && weatherID < 300):
          return "⛈";
        case (weatherID >= 300 && weatherID < 400):
          return "🌦";
        case (weatherID >= 500 && weatherID < 600):
          return "🌧";
        case (weatherID >= 600 && weatherID < 700):
          return "❄";
        case (weatherID >= 700 && weatherID < 800):
          return "🌫";
        case (weatherID === 800):
          return "☀";
        case (weatherID >= 801 && weatherID < 810):
          return "☁";
        default:
          return "❓";
      }
    }

    // Update DOM
    document.getElementById("des").textContent = description;
    document.getElementById("temp").textContent = `${temp.toFixed(1)}°C`;
    document.getElementById("city").textContent = cityName;
    document.getElementById("emoji").textContent = getEmoji(id);
  })
  .catch(err => {
    console.error("Fetch error:", err);
  });

}

function description() {
  const images = document.querySelectorAll('.p-img')

  images.forEach(img => {
    const project = img.closest('.project')
    const desc = project.querySelector('.description')

    img.addEventListener('mouseover', () => {
      desc.style.transform = 'scaleY(1)'
      project.style.cursor = 'pointer'

    });
    img.addEventListener('mouseleave', () => {
      desc.style.transform = 'scaleY(0)'
    })
  })
  
}

document.getElementById('projects-click').addEventListener('click', () => {
  const projectpage = document.querySelector('.projects')
  projectpage.style.display='block'
})

function projectPage() {
  const projectpage = document.querySelector('.projects')
  projectpage.style.display='block'
}
