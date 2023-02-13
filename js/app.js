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
            title : 'Zebra | Laravel',
            video : 'work/zebra_1.webm',
            link : 'https://zebra.com.pk'
        },
        {
            title : 'Zebra Go | Laravel',
            video : 'work/zebra_go_1.mp4',
            link : 'https://www.gozebra.pk/',
        },
        {
            title : 'Dentinect | Laravel',
            video : 'work/dentinect_1.webm',
            link  : 'https://dentinect.co/'
        },
        {
            title : 'Skip The Rishta Aunty | Laravel',
            video : 'work/stra.mp4',
            link  : 'https://skiptherishtaaunty.com'
        },
        {
            title : 'Gulf Wheel | Laravel',
            video : 'work/gulfwheels_1.webm',
            link  : 'https://www.gulfwheels.com/'
        },
        {
            title : 'Skyline Digital | Laravel',
            video : 'work/skylinedigital.mp4',
            link  : 'https://sklndgtl.com/'
        },
        {
            title : 'Easy Store - WebSocket | Laravel',
            video : 'work/easystore_1.webm',
            link : 'https://easystore.shop/'
        },
        {
            title : 'Car Sport Based Website | Wordpress',
            video : 'work/ksportusa.mp4',
            link : 'https://ksportusa.com/'
        },
        {
            title : 'Pusher Chat | Laravel',
            video : 'work/pusher_chat.webm',
            link  : '#'
        },
        {
            title : 'Mall Fox | Laravel',
            video : 'work/mallfox_1.webm',
            link  : '#'
        },
        {
            title : 'Live Match Mentor | Laravel',
            video : 'work/live_match_mentor.webm',
            link  : '#'
        },
        {
            title : 'Shop - Point of Sale | Laravel',
            video : 'work/fast_food_pos.webm',
            link  : '#'
        },
        {
            title : 'Chat System - WebSocket | Laravel',
            video : 'work/websocket.mp4',
            link  : '#'
        },
        {
            title : 'GC Alliance | Wordpress',
            video : 'work/gcalliance.mp4',
            link  : '#'
        },
        {
            title : 'Global Crypto News | Wordpress',
            video : 'work/globalcryptonews.mp4',
            link  : '#'
        },
        {
            title : 'PopGop  | Wordpress',
            video : 'work/popgop.mp4',
            link  : 'https://popgop.com.pk/'
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
                                <a href="${portfolio.link}" class="icon" target='_blank'>
                                    <i class="fa-solid fa-link"></i>
                                </a>
                                
                            </div>
                        </div>
                    </div>`;
    let target = $('#portfolios');
    target.append(template);
}
