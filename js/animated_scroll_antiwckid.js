document.addEventListener("DOMContentLoaded",function(){


    // const lenis = new Lenis({
    //     duration:1.2
    // });
    // function raf(time){
    //     lenis.raf(time)
    //     requestAnimationFrame(raf);
    // };

    // requestAnimationFrame(raf);
let workInfoItems_antiwckid = document.querySelectorAll('.work_photo_item_antiwckid');
workInfoItems_antiwckid.forEach(function(item,index){
    item.style.zIndex = workInfoItems_antiwckid.length - index;
});


gsap.set(".work_photo_item_antiwckid",{
    clipPath:function(){
        return "inset(0px 0px 0px 0px)"
    }
});

const animation = gsap.to('.work_photo_item_antiwckid:not(:last-child)',{
    clipPath:function(){
        return "inset(0px 0px 100% 0px)"
    },
    stagger:.5,
    ease:"none"
});

ScrollTrigger.create({
    trigger:'.work_antiwckid',
    start:'top top',
    end:'bottom bottom',
    animation:animation,
    scrub:1,

});

});