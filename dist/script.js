const cart = document.getElementById("cart")
const cartBox = document.getElementById("cart-box")
const thumbnails = document.querySelectorAll(".small-img")
const mainPic = document.querySelector(".main-pic")
const modal = document.querySelector(".img-modal")
const closeModal = document.getElementById("close-modal")
const modalThumbnails = document.querySelectorAll(".modal-thumbnail")
const modalMainPicBox = document.querySelector(".main-pic-container")
const modalBackwardIcon = modalMainPicBox.lastElementChild.previousElementSibling
const modalForwardIcon = modalMainPicBox.lastElementChild
const modalMainPic = modalMainPicBox.firstElementChild
const btnQty = document.querySelector(".btn-qty")
const minus = btnQty.firstElementChild
const plus = btnQty.lastElementChild
const qtyNum = minus.nextElementSibling
const addToCart = document.querySelector(".add-to-cart")
const cartNum = document.getElementById("cart-num")
const cartItems = document.getElementById("cart-items")
const cartEmpty = document.querySelector(".empty")
const itemQty = document.querySelector(".qty")
const itemTotal = document.querySelector(".total")
const clearCart = document.querySelector(".trash")
const hamburgerMenu = document.querySelector(".hamburger")
const sidebarMenu = document.querySelector(".container")
const closeSidebar = document.querySelector(".close-icon")
const mobileMenu = document.querySelector(".mobile-links")
const mobileBackwardIcon = document.querySelector(".backward-icon")
const mobileForwardIcon = document.querySelector(".forward-icon")

window.onload = () => {
    thumbnails[0].style.border = "2px solid hsl(26, 100%, 55%)"
    thumbnails[0].firstElementChild.style.opacity = "0.5"
    modalThumbnails[0].style.border = "2px solid hsl(26, 100%, 55%)"
    modalThumbnails[0].style.opacity = "0.5"
}

window.onresize = () => {
    if (this.innerWidth <= 640) {
        modal.removeAttribute("style")
    }
}

cart.onclick = () => {
    if (cartBox.style.display) {
        cartBox.removeAttribute("style")
    } else {
        cartBox.style.display = "block"
    }
}

thumbnails.forEach((item, idx) => {
    item.onclick = () => {
        thumbnails.forEach(el => {
            if (el.style.border) {
                el.removeAttribute("style")
                el.firstElementChild.removeAttribute("style")
            }
        });
        mainPic.src = `./images/image-product-${idx + 1}.jpg`
        item.style.border = "2px solid hsl(26, 100%, 55%)"
        item.firstElementChild.style.opacity = "0.5"
    }
});

mainPic.onclick = () => {
    if (window.innerWidth > 640) {
        modal.style.zIndex = "5"
        modal.style.opacity = "1"
    }
}

closeModal.onclick = () => {
    modal.removeAttribute("style")
}

modalThumbnails.forEach((item, idx) => {
    item.onclick = () => {
        modalThumbnails.forEach(el => {
            if (el.style.border) {
                el.removeAttribute("style")
                el.firstElementChild.removeAttribute("style")
            }
        });
        modalMainPic.src = `./images/image-product-${idx + 1}.jpg`
        item.style.border = "2px solid hsl(26, 100%, 55%)"
        item.firstElementChild.style.opacity = "0.5"
    }
});

modalForwardIcon.onclick = () => {
    let i = 0
    modalThumbnails.forEach((item, idx) => {
        if (item.style.border) {
            i = idx
        }
    });
    if (i < 3) {
        modalThumbnails[i].removeAttribute("style")
        modalThumbnails[i].firstElementChild.removeAttribute("style")
        modalThumbnails[i + 1].style.border = "2px solid hsl(26, 100%, 55%)"
        modalThumbnails[i + 1].firstElementChild.style.opacity = "0.5"
        modalMainPic.src = `./images/image-product-${i + 2}.jpg`
    }
}

modalBackwardIcon.onclick = () => {
    let i = 0
    modalThumbnails.forEach((item, idx) => {
        if (item.style.border) {
            i = idx
        }
    });
    if (i > 0) {
        modalThumbnails[i].removeAttribute("style")
        modalThumbnails[i].firstElementChild.removeAttribute("style")
        modalThumbnails[i - 1].style.border = "2px solid hsl(26, 100%, 55%)"
        modalThumbnails[i - 1].firstElementChild.style.opacity = "0.5"
        modalMainPic.src = `./images/image-product-${i}.jpg`
    }
}

minus.onclick = () => {
    if (qtyNum.textContent > 1) {
        qtyNum.textContent--
    }
}

plus.onclick = () => {
    qtyNum.textContent++
}

addToCart.onclick = () => {
    cartNum.style.display = "block"
    cartNum.textContent = qtyNum.textContent
    cartItems.style.display = "block"
    cartEmpty.style.display = "none"
    itemQty.textContent = qtyNum.textContent
    itemTotal.textContent = "$" + (125 * parseInt(qtyNum.textContent)).toString().concat(".00")
}

clearCart.onclick = () => {
    cartNum.removeAttribute("style")
    cartItems.removeAttribute("style")
    cartEmpty.removeAttribute("style")
}

hamburgerMenu.onclick = () => {
    sidebarMenu.style.zIndex = "10"
    sidebarMenu.style.opacity = "1"
    mobileMenu.style.transform = "translateX(12rem)"
}

closeSidebar.onclick = () => {
    sidebarMenu.removeAttribute("style")
    mobileMenu.removeAttribute("style")
}

const imgNameArr = ["image-product-1.jpg", "image-product-2.jpg", "image-product-3.jpg", "image-product-4.jpg"]

mobileForwardIcon.onclick = () => {
    const splitStr = mainPic.src.split("/")
    const imgName = splitStr[splitStr.length - 1]
    let i = 0
    if (imgNameArr.includes(imgName) && imgNameArr.indexOf(imgName) < 3) {
        splitStr[splitStr.length - 1] = imgNameArr[imgNameArr.indexOf(imgName) + 1]
        mainPic.src = splitStr.join("/")
        thumbnails.forEach((el, idx) => {
            if (el.style.border) {
                i = idx
            }
        });
        thumbnails[i].removeAttribute("style")
        thumbnails[i].firstElementChild.removeAttribute("style")
        thumbnails[i + 1].style.border = "2px solid hsl(26, 100%, 55%)"
        thumbnails[i + 1].firstElementChild.style.opacity = "0.5"
    }
}

mobileBackwardIcon.onclick = () => {
    const splitStr = mainPic.src.split("/")
    const imgName = splitStr[splitStr.length - 1]
    if (imgNameArr.includes(imgName) && imgNameArr.indexOf(imgName) > 0) {
        splitStr[splitStr.length - 1] = imgNameArr[imgNameArr.indexOf(imgName) - 1]
        mainPic.src = splitStr.join("/")
        thumbnails.forEach((el, idx) => {
            if (el.style.border) {
                i = idx
            }
        });
        thumbnails[i].removeAttribute("style")
        thumbnails[i].firstElementChild.removeAttribute("style")
        thumbnails[i - 1].style.border = "2px solid hsl(26, 100%, 55%)"
        thumbnails[i - 1].firstElementChild.style.opacity = "0.5"
    }
}