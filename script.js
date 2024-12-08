const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");



// When clicked yes
yesBtn.addEventListener("click",() =>{
    question.innerHTML = "On my way Cutieeee 😘 !!!"
    gif.src = "https://media.giphy.com/media/rdma0nDFZMR32/giphy.gif?cid=790b7611abzhlhub3jn5q9idw60iwp4z4a71lsz8zee3qmmn&ep=v1_gifs_search&rid=giphy.gif&ct=g" ;
});


// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();
  
    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  });