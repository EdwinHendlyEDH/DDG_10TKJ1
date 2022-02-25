// variable locked untuk saya lock jikalau user klik banyak kali
let locked = false;


function imgSlider(a){
    // mengganti src dari img yang besak itu menjadi yang nnti di masukin ke parameter a
    const bigThumb = document.querySelector('.starbucks')
    bigThumb.classList.add("slide")
    

    // animation play state
    setTimeout(function(){
        // mengubah src gambarnya pas animasi sudah setengah berjalan
        bigThumb.src = a;
    }, 500)
    
    setTimeout(() => {
        bigThumb.classList.remove('slide');

        // ubah lagi jadi false supaya animasi bisa untuk yang lain
        locked = false
    }, 1000);
    
}

function ubahWarnaBulatan(a){
    const circle = document.querySelector('.circle')
    circle.style.background = a;
}

function ubahWarnaInterface(a){
    const button = document.querySelector(".textBox a");
    const span = document.querySelector(".textBox span");
    const linkNav = document.querySelectorAll("header ul li a")
    button.style.background = a;
    span.style.color = a;
    linkNav.forEach(e=>e.style.setProperty("--hover-color", a))
}



// ketika thumb img di klik kita akan manggil function imgSlider

// ambil container
const thumb = document.querySelector(".thumb")

const warna = {
    img1 : "#017143",
    img2: "#eb7495",
    img3: "#d752b1"
}

let activeThumb = ''


thumb.addEventListener('click', function(e){
    if (e.target.classList.contains("img-thumb")){
        
        // jika lock maka tidak bisa masuk ke sini
        if (!locked){
            // remove hover efek pada linya supaya pas active tidak perlu hover lagi - kelemahan adalah ketika saya klik pertama kali dia masih hover tpi setelah itu tidak (ada solusi?)
            e.target.parentElement.classList.remove("for-hover")
            
            if (activeThumb != ""){
                activeThumb.classList.remove("active")
                
                // untuk jikalau ada minuman yang diklik dua kali atau lebih maka for hover tidak akan ditambakan karena masih merupakan element sebelumnya
                if (activeThumb != e.target){
                    activeThumb.nextElementSibling.style.display = 'none';
                    activeThumb.classList.add("active-down");
                    activeThumb.parentElement.classList.add("for-hover");
                }
            }
            
            activeThumb = e.target
            e.target.classList.add('active')
            e.target.nextElementSibling.style.display = "block";
            activeThumb.classList.remove("active-down");


            // set locked menjadi true yang artinya dia sudah di lock 
            locked = true

            // change warna dan img
            const imgClassKedua = e.target.classList.item(1)
            imgSlider(`img/${imgClassKedua}.png`)
            ubahWarnaBulatan(warna[imgClassKedua])
            ubahWarnaInterface(warna[imgClassKedua])
        }
    }
})


// toggle
let menuToggle = document.querySelector(".toggle")
let navigationOpen = document.querySelector(".navigation")

menuToggle.addEventListener('click', function(){
    menuToggle.classList.toggle("open-nav")
    navigationOpen.classList.toggle("open-nav")
})


