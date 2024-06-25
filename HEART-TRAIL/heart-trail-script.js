const bodyElem = document.querySelector('.bod');

bodyElem.addEventListener('mousemove', (e) => {
  const xPos = e.offsetX;
  const yPos = e.offsetY;

  const spanElem = document.createElement("span")
    spanElem.style.left = xPos + "px";
    spanElem.style.top = yPos + "px";

    const size = Math.random() * 100;
    spanElem.style.height = size + "px";
    spanElem.style.width = size + "px";

    bodyElem.appendChild(spanElem)

    setTimeout(()=>{
      spanElem.remove();
    }, 1000)
})