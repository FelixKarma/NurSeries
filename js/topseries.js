const cta = document.querySelector(".cta");

// const scaleTween = gsap.to(cta, {scale:1, paused:true});
const scaleTween = gsap.from(cta, {scale:0.8, paused:true, repeat:-1, yoyo:true});

cta.addEventListener("mouseenter", ()=> scaleTween.restart())

cta.addEventListener("mouseleave", ()=> {
  //gsap.to(cta, {scale:0.8, overwrite:true})
  // we don't overwrite the animation, the scale tween woul be run for ever. but the problem with overwrite is that it kills the scaletweens.
  
  gsap.to(cta, {scale:0.8})
  scaleTween.pause();
  
  
	// scaleTween.reverse()
	//create a new tween to return to normal size smoothly
	// gsap.to(cta, {scale:0.8})
	
})