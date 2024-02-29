document.addEventListener("DOMContentLoaded",function(){


    // const lenis = new Lenis({
    //     duration:1.2
    // });
    // function raf(time){
    //     lenis.raf(time)
    //     requestAnimationFrame(raf);
    // };

    // requestAnimationFrame(raf);
let workInfoItems = document.querySelectorAll('.work_photo_item');
workInfoItems.forEach(function(item,index){
    item.style.zIndex = workInfoItems.length - index;
});


gsap.set(".work_photo_item",{
    clipPath:function(){
        return "inset(0px 0px 0px 0px)"
    }
});

const animation = gsap.to('.work_photo_item:not(:last-child)',{
    clipPath:function(){
        return "inset(0px 0px 100% 0px)"
    },
    stagger:.5,
    ease:"none"
});

ScrollTrigger.create({
    trigger:'.work',
    start:'top top',
    end:'bottom bottom',
    animation:animation,
    scrub:1,

});

});