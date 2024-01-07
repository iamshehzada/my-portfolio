(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
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

function displayVideo(video) {
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
function closeModel(text) {
    console.log(text);
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// $(document).ready(function(){

//     // renderPortfilio('work/zebra_1.webm');
//     let portfolios = [
//         {
//             title : 'Zebra | Laravel',
//             video : 'work/zebra_1.webm',
//             link : 'https://zebra.com.pk'
//         },
//         {
//             title : 'Zebra Go | Laravel',
//             video : 'work/zebra_go_1.mp4',
//             link : 'https://www.gozebra.pk/',
//         },
//         {
//             title : 'Dentinect | Laravel',
//             video : 'work/dentinect_1.webm',
//             link  : 'https://dentinect.co/'
//         },
//         {
//             title : 'Skip The Rishta Aunty | Laravel',
//             video : 'work/stra.mp4',
//             link  : 'https://skiptherishtaaunty.com'
//         },
//         {
//             title : 'Gulf Wheel | Laravel',
//             video : 'work/gulfwheels_1.webm',
//             link  : 'https://www.gulfwheels.com/'
//         },
//         {
//             title : 'Skyline Digital | Laravel',
//             video : 'work/skylinedigital.mp4',
//             link  : 'https://sklndgtl.com/'
//         },
//         {
//             title : 'Easy Store - WebSocket | Laravel',
//             video : 'work/easystore_1.webm',
//             link : 'https://easystore.shop/'
//         },
//         {
//             title : 'Car Sport Based Website | Wordpress',
//             video : 'work/ksportusa.mp4',
//             link : 'https://ksportusa.com/'
//         },
//         {
//             title : 'Pusher Chat | Laravel',
//             video : 'work/pusher_chat.webm',
//             link  : '#'
//         },
//         {
//             title : 'Mall Fox | Laravel',
//             video : 'work/mallfox_1.webm',
//             link  : '#'
//         },
//         {
//             title : 'Live Match Mentor | Laravel',
//             video : 'work/live_match_mentor.webm',
//             link  : '#'
//         },
//         {
//             title : 'Shop - Point of Sale | Laravel',
//             video : 'work/fast_food_pos.webm',
//             link  : '#'
//         },
//         {
//             title : 'Chat System - WebSocket | Laravel',
//             video : 'work/websocket.mp4',
//             link  : '#'
//         },
//         {
//             title : 'GC Alliance | Wordpress',
//             video : 'work/gcalliance.mp4',
//             link  : 'https://gcalliance.io/'
//         },
//         {
//             title : 'Global Crypto News | Wordpress',
//             video : 'work/globalcryptonews.mp4',
//             link  : 'https://globalcryptonews.io/'
//         },
//         {
//             title : 'PopGop  | Wordpress',
//             video : 'work/popgop.mp4',
//             link  : 'https://popgop.com.pk/'
//         },
//         {
//             title : 'Automotive Cars',
//             video : 'work/amlcars.mp4',
//             link  : 'https://amlcars.se/'
//         },
//         {
//             title : 'Electronic Document System',
//             video : 'work/e-signature.mp4',
//             link  : '#'
//         },


//     ];
//     portfolios.forEach((portfolio)=>{
//         renderPortfilio(portfolio);
//     });
// });

// function renderPortfilio(portfolio)
// {
//     let template = `<div class="portfolio-item">
//                         <div class="image">
//                             <video autoplay="" loop="" muted="" playsinline="" class="video" id="video">
//                                 <source src="${portfolio.video}" type="video/webm">
//                             </video>
//                         </div>
//                         <div class="hover-items">
//                             <h3>${portfolio.title}</h3>
//                             <div class="icons">
//                                 <a href="#" class="icon" onclick="displayVideo('${portfolio.video}')">
//                                     <i class="fa-solid fa-eye"></i>
//                                 </a>
//                                 <a href="${portfolio.link}" class="icon" target='_blank'>
//                                     <i class="fa-solid fa-link"></i>
//                                 </a>

//                             </div>
//                         </div>
//                     </div>`;
//     let target = $('#portfolios');
//     target.append(template);
// }

document.addEventListener("DOMContentLoaded", function () {
    const portfolios = [{
            title: 'Zebra | Laravel',
            video: 'work/zebra_1.webm',
            link: 'https://zebra.com.pk',
            category: 'laravel'
        },
        {
            title: 'Zebra Go | Laravel',
            video: 'work/zebra_go_1.mp4',
            link: 'https://www.gozebra.pk/',
            category: 'laravel'

        },
        {
            title: 'Dentinect | Laravel',
            video: 'work/dentinect_1.webm',
            link: 'https://dentinect.co/',
            category: 'laravel'

        },
        {
            title: 'Skip The Rishta Aunty | Laravel',
            video: 'work/stra.mp4',
            link: 'https://skiptherishtaaunty.com',
            category: 'laravel'

        },
        {
            title: 'Gulf Wheel | Laravel',
            video: 'work/gulfwheels_1.webm',
            link: 'https://www.gulfwheels.com/',
            category: 'laravel'

        },
        {
            title: 'Skyline Digital | Laravel',
            video: 'work/skylinedigital.mp4',
            link: 'https://sklndgtl.com/',
            category: 'laravel'

        },
        {
            title: 'Easy Store - WebSocket | Laravel',
            video: 'work/easystore_1.webm',
            link: 'https://easystore.shop/',
            category: 'laravel'

        },
        {
            title: 'Car Sport Based Website ',
            video: 'work/ksportusa.mp4',
            link: 'https://ksportusa.com/',
            category: 'wordpress'

        },
        {
            title: 'Pusher Chat | Laravel',
            video: 'work/pusher_chat.webm',
            link: '#',
            category: 'laravel'

        },
        {
            title: 'Mall Fox',
            video: 'work/mallfox_1.webm',
            link: '#',
            category: 'laravel'

        },
        {
            title: 'Live Match Mentor ',
            video: 'work/live_match_mentor.webm',
            link: '#',
            category: 'laravel'

        },
        {
            title: 'Shop - Point of Sale ',
            video: 'work/fast_food_pos.webm',
            link: '#',
            category: 'laravel'

        },
        {
            title: 'Chat System - WebSocket ',
            video: 'work/websocket.mp4',
            link: '#',
            category: 'laravel'

        },
        {
            title: 'GC Alliance ',
            video: 'work/gcalliance.mp4',
            link: 'https://gcalliance.io/',
            category: 'wordpress'

        },
        {
            title: 'Global Crypto News ',
            video: 'work/globalcryptonews.mp4',
            link: 'https://globalcryptonews.io/',
            category: 'wordpress'

        },
        {
            title: 'PopGop',
            video: 'work/popgop.mp4',
            link: 'https://popgop.com.pk/',
            category: 'wordpress'

        },
        {
            title: 'Automotive Cars',
            video: 'work/amlcars.mp4',
            link: 'https://amlcars.se/',
            category: 'wordpress'

        },
        {
            title: 'Electronic Document System',
            video: 'work/e-signature.mp4',
            link: '#',
            category: 'nuxtjs'

        }
        // ... More portfolio items ...
    ];

    const tabs = document.querySelectorAll(".tab");
    const portfoliosContainer = document.getElementById("portfolios");
    const videoModal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    const closeModalButton = document.getElementById("closeModal");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const category = tab.getAttribute("data-category");
            renderPortfolioByCategory(category);
            setActiveTab(tab);
        });
    });

    portfolios.forEach((portfolio) => {
        renderPortfolio(portfolio);
    });

    function renderPortfolioByCategory(category) {
        portfoliosContainer.innerHTML = "";
        portfolios
            .filter(portfolio => category === "all" || portfolio.category === category)
            .forEach(portfolio => {
                renderPortfolio(portfolio);
            });
    }

    function renderPortfolio(portfolio) {
        let template = `<div class="portfolio-item">
                            <div class="image">
                                <video autoplay loop muted playsinline class="video" id="video">
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
        portfoliosContainer.insertAdjacentHTML("beforeend", template);
    }

    function setActiveTab(activeTab) {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
        activeTab.classList.add("active");
    }

    // Video Modal
    function displayVideo(videoSrc) {
        modalVideo.src = videoSrc;
        videoModal.style.display = "flex";
    }

    closeModalButton.addEventListener("click", () => {
        modalVideo.pause();
        modalVideo.currentTime = 0;
        videoModal.style.display = "none";
    });
});