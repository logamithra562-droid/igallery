const gallery = [
    { src: "zooto1.png", caption: "Nick Wilde" },
    { src: "zooto2.png", caption: "Finnick" },
    { src: "zooto3.png", caption: "Bellwether" },
    { src: "zooto4.png", caption: "judy" },
];
let index = 0;
function changeImage(type) {
    if (type === "next") 
    {
        index++;
        if(index >= gallery.length)
        {
            index = 0;
        }
    }
    if (type === "prev") 
    {
        index--;
        if(index < 0)
        {
            index = gallery.length - 1;
        }
    }
    document.getElementById("Image").src = gallery[index].src;
    document.getElementById("Text").innerText = gallery[index].caption;
}