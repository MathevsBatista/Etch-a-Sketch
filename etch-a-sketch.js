const draw = document.querySelector(".draw");
let size = 16;

function start() {
    const draw = document.querySelector(".draw");

    for(let i = 0; i < size; i++) {
	for(let j = 0; j < size; j++) {
	    const div = document.createElement("div");
	    div.setAttribute("class","box");
	    div.addEventListener("mouseover", () => {
		div.classList.add("mark");
	    })
	    draw.appendChild(div);
	}
    }
}

const buttonSize = document.querySelector(".setting .size");
const buttonClear = document.querySelector(".setting .clear");

buttonSize.addEventListener("click", () => {
    size = prompt("Enter the size of sketch pad");

    const boxList = Array.from(draw.childNodes);

    boxList.forEach(box => {
	box.remove();
    });

    for(let i = 0; i < size; i++) {
	for(let j = 0; j < size; j++) {
	    const div = document.createElement("div");
	    div.setAttribute("class","box");
	    div.addEventListener("mouseover", () => {
		div.classList.add("mark");
	    })
	    let boxSize = 100/size + "%";
	    div.style.width = boxSize;
	    div.style.height = boxSize;
	    draw.appendChild(div);
	}
    }
});

buttonClear.addEventListener("click", () => {
    const boxList = Array.from(draw.childNodes);

    boxList.forEach(box => {
	box.remove();
    });

    for(let i = 0; i < size; i++) {
	for(let j = 0; j < size; j++) {
	    const div = document.createElement("div");
	    div.setAttribute("class","box");
	    div.addEventListener("mouseover", () => {
		div.classList.add("mark");
	    })
	    let boxSize = 100/size + "%";
	    div.style.width = boxSize;
	    div.style.height = boxSize;
	    draw.appendChild(div);
	}
    }
});

start();

