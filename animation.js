const tl = gsap.timeline();
tl.registerPlugin(ScrollTrigger)
  .from(".sticky img,a", { duration: 1, x: "-100%", stagger: 0.1 })
  .from("#section1 div h1", { duration: 2, y: "-100px" })
  .from("#section1 div p", { duration: 3, opacity: 0 })
  .from("#section1 div h3", { duration: 2, y: "100px" });
gsap.from("#section3 div div", {
  ScrollTrigger: {
    trigger: "#section3 div div",
    triggerAction: "restart pause reverse pause",
  },
  duration: 5,
  x: "-100%",
});
gsap.from(".tab1", { duration: 2, x: "-100px" });
gsap.from(".tab2", { duration: 2, x: "100px" });
// gsap.from(".char", { duration: 3, y: "20px" });
