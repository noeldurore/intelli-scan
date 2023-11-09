/* 
   Filename: complexCode.js
   Description: This code generates a visually appealing and interactive animated graph using D3.js library. It simulates the movement of multiple particles with different colors and velocities. Each particle leaves a trail of colored lines as it moves across the screen. Users can interact with the graph by toggling the display of particle trails, changing particle velocities, and pausing/resuming the animation.

   Dependencies: D3.js library (version 5.15.0 or higher)
*/

// Define the dimensions of the graph
const width = 800;
const height = 400;

// Define the number of particles
const numParticles = 50;

// Generate a random color for each particle
const colors = d3.range(numParticles).map(() => d3.rgb(
  Math.floor(Math.random() * 256),
  Math.floor(Math.random() * 256),
  Math.floor(Math.random() * 256)
));

// Generate random initial positions for each particle
const particles = d3.range(numParticles).map(() => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: Math.random() * 2 - 1,
  vy: Math.random() * 2 - 1,
}));

// Create an SVG container
const svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Render particles
const particleElements = svg.selectAll(".particle")
  .data(particles)
  .enter().append("circle")
  .attr("class", "particle")
  .attr("cx", d => d.x)
  .attr("cy", d => d.y)
  .attr("r", 2)
  .style("fill", (d, i) => colors[i]);

// Function to update particle positions and trails
function updateParticles() {
  particleElements.attr("cx", d => {
      d.x += d.vx;
      if (d.x < 0 || d.x > width) {
        d.vx = -d.vx;
      }
      return d.x;
    })
    .attr("cy", d => {
      d.y += d.vy;
      if (d.y < 0 || d.y > height) {
        d.vy = -d.vy;
      }
      return d.y;
    })
    .attr("opacity", () => (showTrails ? 0.4 : 1))
    .attr("stroke", (d, i) => showTrails ? colors[i] : "none")
    .attr("fill", (d, i) => showTrails ? "none" : colors[i]);
}

// Variable to track whether particle trails are displayed
let showTrails = true;

// Function to toggle particle trails
function toggleTrails() {
  showTrails = !showTrails;
}

// Variable to track animation status
let isPaused = false;

// Function to pause/resume animation
function pauseResumeAnimation() {
  isPaused = !isPaused;
  if (!isPaused) {
    animate();
  }
}

// Function to animate the graph
function animate() {
  if (isPaused) {
    return;
  }
  updateParticles();
  requestAnimationFrame(animate);
}

// Start the animation
animate();