let open = document.querySelector(".header__nav-item--primary");
let close = document.querySelector(".close-btn");
let tl = gsap.timeline();

tl.to(".overlay", {
	opacity: 1,
	x: 0,
	scale: 1,
	duration: 0.5,
	pointerEvents: "auto",
});
tl.to(".stagger", { x: 0, opacity: 1, stagger: 0.3 }, "-=.6");
tl.pause();

open.addEventListener("click", () => {
	tl.play();
});

close.addEventListener("click", () => {
	tl.reverse();
});
