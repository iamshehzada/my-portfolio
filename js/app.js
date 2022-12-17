(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function displayVideo(video)
{
    console.log(video)
    var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("video");
    var modalContent = document.getElementById("modal-content");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    //   modalImg.src = this.src;
    modalContent.innerHTML = `<video autoplay="" loop="" muted="" playsinline="" style='position:absolute;left:8%;width:auto;height:600px'>
      <source src="${video}" type="video/webm">
  </video>`;
}
// Get the modal

// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }


// When the user clicks on <span> (x), close the modal
function closeModel(text){ 
    console.log(text);
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

$(document).ready(function(){

    // renderPortfilio('work/zebra_1.webm');
    let portfolios = [
        {
            title : 'Zebra',
            video : 'work/zebra_1.webm'
        },
        {
            title : 'Zebra Go',
            video : 'work/zebra_go_1.webm'
        },
        {
            title : 'Dentinect',
            video : 'work/dentinect_1.webm'
        },
        {
            title : 'Skyline Digital',
            video : 'work/skylinedigital.webm'
        },
        {
            title : 'Pusher Chat',
            video : 'work/pusher_chat.webm'
        },
        {
            title : 'Zebra',
            video : 'work/zebra_1.webm'
        },
        {
            title : 'Mall Fox',
            video : 'work/mallfox_1.webm'
        },
        {
            title : 'Live Match Mentor',
            video : 'work/live_match_mentor.webm'
        },
        {
            title : 'Gulf Wheel',
            video : 'work/gulfwheels_1.webm'
        },
        {
            title : 'Shop - Point of Sale',
            video : 'work/fast_food_pos.webm'
        },
        {
            title : 'Chat System - WebSocket',
            video : 'work/websocket.mp4'
        },


    ];
    portfolios.forEach((portfolio)=>{
        renderPortfilio(portfolio);
    });
});

function renderPortfilio(portfolio)
{
    let template = `<div class="portfolio-item">
                        <div class="image">
                            <video autoplay="" loop="" muted="" playsinline="" class="video" id="video">
                                <source src="${portfolio.video}" type="video/webm">
                            </video>
                        </div>
                        <div class="hover-items">
                            <h3>${portfolio.title}</h3>
                            <div class="icons">
                                <a href="#" class="icon" onclick="displayVideo('${portfolio.video}')">
                                    <i class="fa-solid fa-eye"></i>
                                </a>
                                <a href="#" class="icon">
                                    <i class="fa-solid fa-link"></i>
                                </a>
                                
                            </div>
                        </div>
                    </div>`;
    let target = $('#portfolios');
    target.append(template);
}
