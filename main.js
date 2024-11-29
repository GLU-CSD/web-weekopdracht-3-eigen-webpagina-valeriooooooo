// Register GSAP plugin
gsap.registerPlugin(ScrollSmoother);

// Create ScrollSmoother instance
ScrollSmoother.create({
  smooth: 1, // Smooth scrolling speed
  effects: true // Enable effects for elements
});

// Add some animations
gsap.from("header", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero h2", { opacity: 0, scale: 0.8, duration: 1, delay: 0.5 });
gsap.from(".lore img", { opacity: 0, x: -200, duration: 1, scrollTrigger: ".lore" });
gsap.from(".gameplay", { opacity: 0, x: 200, duration: 1, scrollTrigger: ".gameplay" });
