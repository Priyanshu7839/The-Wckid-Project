var tl = gsap.timeline({scrollTrigger:{
    trigger:".main",
    start:"50% 50%",
    end:"150% 50%",
    scrub:1,
    pin:true,
}});

tl
.to(".top",{
    top:"-50%"
},'a')
.to(".bottom",{
    bottom:"-50%"
},'a')
.to(".top-h",{
    bottom:"-50%"
},'a')
.to(".bottom-h",{
   top:"-50%"
},'a')

.to(".left",{
    left:"-50%"
},'b')
.to(".right",{
    right:"-50%"
},'b')
.to(".left-h-1,.left-h-2",{
    left:"50vw"
},'b')
.to(".right-h-1",{
   right:"50vw"
},'b')


.to(".top-2",{
    top:"-50%"
},'c')
.to(".bottom-2",{
    bottom:"-50%"
},'c')
.to(".top-2-h",{
    top:"100%"
},'c')
.to(".bottom-2-h",{
   top:"-50%"
},'c')
.to(".bottom",{
   zIndex:"-2",
   visibility:"hidden"
},'d')
.to(".bottom-2",{
   zIndex:"-2",
   visibility:"hidden"
},'d')





