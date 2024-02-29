
function dom(){
    const canvas = document.querySelector("#home>canvas");
    const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  })
  
  function files(index) {
    var data = `
    video_cut_images/Image128.jpg 
    video_cut_images/Image129.jpg 
    video_cut_images/Image130.jpg 
    video_cut_images/Image131.jpg 
    video_cut_images/Image132.jpg 
    video_cut_images/Image133.jpg 
    video_cut_images/Image134.jpg 
    video_cut_images/Image135.jpg 
    video_cut_images/Image136.jpg 
    video_cut_images/Image137.jpg 
    video_cut_images/Image138.jpg 
    video_cut_images/Image139.jpg 
    video_cut_images/Image140.jpg 
    video_cut_images/Image141.jpg 
    video_cut_images/Image142.jpg 
    video_cut_images/Image143.jpg 
    video_cut_images/Image144.jpg 
    video_cut_images/Image145.jpg 
    video_cut_images/Image146.jpg 
    video_cut_images/Image147.jpg 
    video_cut_images/Image148.jpg 
    video_cut_images/Image149.jpg 
    video_cut_images/Image150.jpg 
    video_cut_images/Image151.jpg 
    video_cut_images/Image152.jpg 
    video_cut_images/Image153.jpg 
    video_cut_images/Image154.jpg 
    video_cut_images/Image155.jpg 
    video_cut_images/Image156.jpg 
    video_cut_images/Image157.jpg 
    video_cut_images/Image158.jpg 
    video_cut_images/Image159.jpg 
    video_cut_images/Image160.jpg 
    video_cut_images/Image161.jpg 
    video_cut_images/Image162.jpg 
    video_cut_images/Image163.jpg 
    video_cut_images/Image164.jpg 
    video_cut_images/Image165.jpg 
    video_cut_images/Image166.jpg 
    video_cut_images/Image167.jpg 
    video_cut_images/Image168.jpg 
    video_cut_images/Image169.jpg 
    video_cut_images/Image170.jpg 
    video_cut_images/Image171.jpg 
    video_cut_images/Image172.jpg 
    video_cut_images/Image173.jpg 
    video_cut_images/Image174.jpg 
    video_cut_images/Image175.jpg 
    video_cut_images/Image176.jpg 
    video_cut_images/Image177.jpg 
    video_cut_images/Image178.jpg 
    video_cut_images/Image179.jpg 
    video_cut_images/Image180.jpg 
    video_cut_images/Image181.jpg 
    video_cut_images/Image182.jpg 
    video_cut_images/Image183.jpg 
    video_cut_images/Image184.jpg 
    video_cut_images/Image185.jpg 
    video_cut_images/Image186.jpg 
    video_cut_images/Image187.jpg 
    video_cut_images/Image188.jpg 
    video_cut_images/Image189.jpg 
    video_cut_images/Image190.jpg 
    video_cut_images/Image191.jpg 
    video_cut_images/Image192.jpg 
    video_cut_images/Image193.jpg 
    video_cut_images/Image194.jpg 
    video_cut_images/Image195.jpg 
    video_cut_images/Image196.jpg 
    video_cut_images/Image197.jpg 
    video_cut_images/Image198.jpg 
    video_cut_images/Image199.jpg 
    video_cut_images/Image200.jpg 
    video_cut_images/Image201.jpg 
    video_cut_images/Image202.jpg 
    video_cut_images/Image203.jpg 
    video_cut_images/Image204.jpg 
    video_cut_images/Image205.jpg 
    video_cut_images/Image206.jpg 
    video_cut_images/Image207.jpg 
    video_cut_images/Image208.jpg 
    video_cut_images/Image209.jpg 
    video_cut_images/Image210.jpg 
    video_cut_images/Image211.jpg 
    video_cut_images/Image212.jpg 
    video_cut_images/Image213.jpg 
    video_cut_images/Image214.jpg 
    video_cut_images/Image215.jpg 
    video_cut_images/Image216.jpg 
    video_cut_images/Image217.jpg 
    video_cut_images/Image218.jpg 
    video_cut_images/Image219.jpg 
    video_cut_images/Image220.jpg 
    video_cut_images/Image221.jpg 
    video_cut_images/Image222.jpg 
    video_cut_images/Image223.jpg 
    video_cut_images/Image224.jpg 
    video_cut_images/Image225.jpg 
    video_cut_images/Image226.jpg 
    video_cut_images/Image227.jpg 
    video_cut_images/Image228.jpg 
    video_cut_images/Image229.jpg 
    video_cut_images/Image230.jpg 
    video_cut_images/Image231.jpg 
    video_cut_images/Image232.jpg 
    video_cut_images/Image233.jpg 
    video_cut_images/Image234.jpg 
    video_cut_images/Image235.jpg 
    video_cut_images/Image236.jpg 
    video_cut_images/Image237.jpg 
    video_cut_images/Image238.jpg 
    video_cut_images/Image239.jpg 
    video_cut_images/Image240.jpg 
    video_cut_images/Image241.jpg 
    video_cut_images/Image242.jpg 
    video_cut_images/Image243.jpg 
    video_cut_images/Image244.jpg 
    video_cut_images/Image245.jpg 
    video_cut_images/Image246.jpg 
    video_cut_images/Image247.jpg 
    video_cut_images/Image248.jpg 
    video_cut_images/Image249.jpg 
    video_cut_images/Image250.jpg 
    video_cut_images/Image251.jpg 
    video_cut_images/Image252.jpg 
    video_cut_images/Image253.jpg 
    video_cut_images/Image254.jpg 
    video_cut_images/Image255.jpg 
    video_cut_images/Image256.jpg 
    video_cut_images/Image257.jpg 
    video_cut_images/Image258.jpg 
    video_cut_images/Image259.jpg 
    video_cut_images/Image260.jpg 
    video_cut_images/Image261.jpg 
    video_cut_images/Image262.jpg 
    video_cut_images/Image263.jpg 
    video_cut_images/Image264.jpg 
    video_cut_images/Image265.jpg 
    video_cut_images/Image266.jpg
    video_cut_images/Image267.jpg 
    video_cut_images/Image268.jpg 
    video_cut_images/Image269.jpg 
    video_cut_images/Image270.jpg 
    video_cut_images/Image271.jpg 
    video_cut_images/Image272.jpg 
    video_cut_images/Image273.jpg 
    video_cut_images/Image274.jpg 
    video_cut_images/Image275.jpg 
    video_cut_images/Image276.jpg 
    video_cut_images/Image277.jpg 
    video_cut_images/Image278.jpg 
    video_cut_images/Image279.jpg 
    video_cut_images/Image280.jpg 
    video_cut_images/Image281.jpg 
    video_cut_images/Image282.jpg 
    video_cut_images/Image283.jpg 
    video_cut_images/Image284.jpg 
    video_cut_images/Image285.jpg 
    video_cut_images/Image286.jpg 
    video_cut_images/Image287.jpg 
    video_cut_images/Image288.jpg 
    video_cut_images/Image289.jpg 
    video_cut_images/Image290.jpg 
    video_cut_images/Image291.jpg 
    video_cut_images/Image292.jpg 
    video_cut_images/Image293.jpg 
    video_cut_images/Image294.jpg 
    video_cut_images/Image295.jpg 
    video_cut_images/Image296.jpg 
    video_cut_images/Image297.jpg 
    video_cut_images/Image298.jpg 
    video_cut_images/Image299.jpg 
    video_cut_images/Image300.jpg
    `;
    return data.split("\n")[index];
  }
  
  const frameCount = 173;
  
  const images = [];
  const imageSeq = {
    frame: 0
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub:1.8,
        pin:true,
        trigger:"#home",
      //  markers:true
    },
    onUpdate: render
  });
  
  images[0].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context)
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
  
    // Calculate the scaling factors for both horizontal and vertical dimensions
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
  
    // Use the smaller of the two ratios to ensure the entire image is visible
    var ratio = Math.min(hRatio, vRatio);
  
    // Calculate the dimensions to maintain the aspect ratio
    var newWidth = img.width * ratio;
    var newHeight = img.height * ratio;
    var offsetFromRight = 50;
    // Calculate the center shift to keep the image centered
    var centerShift_x = (canvas.width - newWidth-offsetFromRight);
    var centerShift_y = (canvas.height - newHeight) / 2;
  
    // Clear the canvas and draw the image with the updated dimensions
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, centerShift_x, centerShift_y, newWidth, newHeight);
  }
  
  gsap.to("#home canvas",{
    scale:0.2,
    scrollTrigger:{
        scrub:.1,
        trigger:"#home",
        start:"bottom 100%",
         // markers:true,
    },
  })
  // ScrollTrigger.create({
  //   trigger:"#home",
  //   pin:true,
  //   start:"bottom 100%",
  // })
  
  }
  
  dom()



  //lenis part for smooth scrolling

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf);


// scrolling for images block

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.antiwckid_artwork_sliding_gallery-img',
    scrub:true
 
  }
})
.to('.antiwckid_artwork_sliding_gallery-img', {
  stagger: .2,
  y: -700,
  scrub: true
})

//shuffling for images for hovering effect

// const imgHeader = document.querySelector('.antiwckid_hidden_images_for_hover_effect');
// const imagesArray = Array.from(imgHeader.children);


// function shuffle_images_antiwckid(){
// for (let i = imagesArray.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1));
//   imgHeader.insertBefore(imagesArray[j], imagesArray[i]);
// }
// }

// setInterval(shuffle_images_antiwckid, 1000);

//revealing for the text 
const texts = document.querySelectorAll('.antiwckid_info_text__effect');
const tl1 = gsap.timeline(
    {
        scrollTrigger:{
            trigger:'.antiwckid_info_text-block',
            start:"top center",
            end:"center center"
        }
    }
);
texts.forEach((text)=>{
const overlay = text.querySelector('.antiwckid_info_text__overlay');
tl1.to(overlay,{
    scaleX:0,
    duration:1
})
})

//for the parallax effect

document.addEventListener("mousemove",function(details){
  document.querySelectorAll('.antiwckid_parallax_effect_image_gallery-img').forEach((elem)=>{

    
         const position = elem.getAttribute("value");
         const x = (window.innerWidth - details.clientX*position)/10;
         const y = (-window.innerHeight + details.clientY*position)/10;
 
         elem.style.transform=`translateX(${x/2-100}px) translateY(${y/2}px)`;
  })
 })

