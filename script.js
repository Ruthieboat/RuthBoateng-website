let menu = document.querySelector("#header ul");
let bar = document.querySelector("#header .fa-bars");

bar.addEventListener("click", function () {
    menu.classList.toggle("show");
})


const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
const numballs = 90;
const balls = [];

for (let i = 0; i < numballs; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background=colors[Math.floor(Math.random()*colors.length)];
    ball.style.left = `${Math.floor(Math.random) * 100}vw`;
    ball.style.top = `${Math.floor(Math.random) * 100}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = `${Math.random()}em`;
    ball.push(ball);
    document.getElementById('hero-area').append(ball)
}


balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i * 2 === 0 ? -11 : 11),
        y: Math.random() * 12
    };

    let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 2000,
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out",
        }
    );
})