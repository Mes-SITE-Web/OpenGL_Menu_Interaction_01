const turbulence = document.querySelector("feTurbulence");

function updateNoise() {
  const randomSeed = Math.random() * 100; // Generate a random seed
  turbulence.setAttribute("seed", randomSeed); // Update the seed value
  requestAnimationFrame(updateNoise);
}

updateNoise();
