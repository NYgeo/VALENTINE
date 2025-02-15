const answers_no = {
    english: [
        "No",
        "Are you sure?",
        "Are you really sure??",
        "Are you really really sure???",
        "Think again?",
        "I'm I that chopped?",
        "Please be my loca/ loco",
        "Please be my loca/ loco"
    ]
};

const images_no = [
    "assets/images/asheating.jpeg",
    "assets/images/shawty.jpg",
    "assets/images/dany.jpg",
    "assets/images/mr.longveinyahdih.png",
    "assets/images/prodigy.jpeg",
    "assets/images/sonic-devil.gif",
    "assets/images/loco.jpg"
];

const answers_yes = {
    english: "Yes"

};

let language = "english";
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;
yes_button.disabled = true;  // Initially disable the Yes button

no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    
    // Cycle through different "No" images
    let imgIndex = clicks % images_no.length;
    banner.src = images_no[imgIndex];
    refreshBanner();

    clicks++;
    const sizes = [40, 50, 30, 35, 45];
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random];
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else {
        // Once the "No" options are exhausted, disable the "No" button and show the message
        alert("You must press Yes now!");
        no_button.style.display = "none";  // Hide the No button
        
        // Show the prompt message asking to click Yes
        let message = document.getElementsByClassName('message')[0];
        message.innerHTML = "You must press Yes now!";  // Optional prompt message
        message.style.display = "block";  // Display the message

        // Enable the "Yes" button after the prompt message
        yes_button.disabled = false;  // Re-enable the "Yes" button
        yes_button.style.cursor = "pointer";  // Change cursor to pointer to show it's clickable
    }
});

yes_button.addEventListener('click', () => {
    // Ensure the button is only functional once enabled
    if (yes_button.disabled) return;

    let banner = document.getElementById('banner');
    banner.src = "assets/images/yes.gif";
    refreshBanner();
    
    // Hide both buttons after Yes is clicked
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";  // Hide both Yes and No buttons
    
    // First show the "Yes" message
    let yesMessage = document.createElement('h2');
    yesMessage.innerHTML = "You pressed Yes!";
    document.querySelector('.message').appendChild(yesMessage);  // Add the Yes message
    
    // After a delay, show the success message with the link
    setTimeout(() => {
        let message = document.getElementsByClassName('message')[0];
        message.innerHTML = "<h2><a href='https://www.youtube.com/watch?v=vJLB1cq3Zmk'>Click me lol</a></h2><h6>Made with love by: Bob <a class='creator' href='https://github.com/Aayush-683'></a></h6>";
        message.style.display = "block";  // Display the success message with the link
    }, 1000);  // Delay the success message by 1 second to show the "Yes" message first
});

function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}
