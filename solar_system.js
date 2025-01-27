const canvas = document.getElementById("solarSystem")
const ctx = canvas.getContext("2d")
const centerX = canvas.width / 2
const centerY = canvas.height / 2
let angle = 0
const planets = [
    {name: "Mercurio", color: "gray", semiMajor: 70, semiMinor: 50, size: 5, speed: 0.02 },
    {name: "Venus", color: "yellow", semiMajor: 120, semiMinor: 90, size: 8, speed: 0.015 },
    {name: "Tierra", color: "blue", semiMajor: 170, semiMinor: 130, size: 8, speed: 0.01 },
    {name: "Marte", color: "red", semiMajor: 220, semiMinor: 160, size: 6, speed: 0.008 },
    {name: "Júpiter", color: "orange", semiMajor: 300, semiMinor: 240, size: 14, speed: 0.005 },
    {name: "Saturno", color: "gold", semiMajor: 380, semiMinor: 300, size: 12, speed: 0.003 },
    {name: "Urano", color: "lightblue", semiMajor: 460, semiMinor: 370, size: 10, speed: 0.002 },
    {name: "Neptuno", color: "blue", semiMajor: 520, semiMinor: 420, size: 10, speed: 0.0015 }
]
function drawOrbit (semiMajor, semiMinor) {
    ctx.beginPath()
    ctx.strokeStyle = "white"
    ctx.ellipse(centerX, centerY, semiMajor, semiMinor, 0, 0, 2 * Math.PI)
    ctx.stroke()
}
function drawPlanet(planets, angle) {
    const x = centerX + planets.semiMajor * Math.cos(angle)
    const y = centerY + planets.semiMinor * Math.sin(angle)
    ctx.beginPath()
    ctx.fillStyle = planets.color
    ctx.arc(x, y, planets.size, 0, 2 * Math.PI)
    ctx.fill()
    ctx.fillStyle = "white"
    ctx.font = "12px Arial"
    ctx.fillText(planets.name, x + 10, y)
}
function drawSun() {
    ctx.beginPath()
    ctx.fillStyle = "orange"
    ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI)
    ctx.fill()
    ctx.fillStyle = "white"
    ctx.font = "14px Arial"
    ctx.fillText("Sol", centerX - 10, centerY - 25)
}
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSun()
    planets.forEach(planets => drawOrbit(planets.semiMajor, planets.semiMinor));
    planets.forEach((planets, index) => {
      drawPlanet(planets, angle * planets.speed);
    });
    angle += 1;
    requestAnimationFrame(animate);
}
animate()