function createFallingImage(s) {
    const originalImage = document.querySelector('.img1');
    const fallingImage = originalImage.cloneNode(true);
    fallingImage.style.display = 'block';
    fallingImage.style.position = 'absolute';
    const screenWidth = window.innerWidth;
    const startX = Math.random() * window.innerWidth - 170;
    const speed = 1 + Math.random() * s;
    fallingImage.style.left = `${startX}px`;
    fallingImage.style.top = `-100px`; 
    document.body.appendChild(fallingImage);
    let positionY = -100;
    function animate() {
        positionY += speed;
        fallingImage.style.top = `${positionY}px`;
        if (positionY + 270 > window.innerHeight) {
            fallingImage.remove();
        } else {
            requestAnimationFrame(animate);
        }
    }
    animate();
}
let r = 0.5
setInterval(() => createFallingImage(r), 2000);

document.getElementById('start_game').addEventListener('click', function() {
    window.location.href = 'game/start.html';
});
