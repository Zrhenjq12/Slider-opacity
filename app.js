let massImg = document.querySelectorAll('img')

console.log(massImg);
let i = 0;

function nextImg(event) {
    if (i < massImg.length - 1) {
        massImg[i].className = ' '
        massImg[i + 1].className = 'active'
        i++;
    }

}

function prefImg() {
    if (i != 0) {
        massImg[i].className = ' '
        massImg[i - 1].className = 'active'
        i--;
    }
}
document.querySelector('.next').addEventListener('click', nextImg)
document.querySelector('.pref').addEventListener('click', prefImg)