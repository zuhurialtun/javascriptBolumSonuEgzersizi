let urunFormDOM = document.querySelector('#urunForm')
urunFormDOM.addEventListener("submit", urunList)

const alertDOM = document.querySelector("#alert") // hata mesajı DOM

const alertFunction = (baslik, metin, className = "danger") => `
    <div class="alert alert-${className} alert-dismissible fade show" role="alert">
        <strong>${baslik}</strong> ${metin}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
`

function urunList(event) {
    event.preventDefault()
    console.log("deneme")
    const URUN_AD = document.querySelector('#urunAdi')
    const URUN_FIYAT = document.querySelector('#fiyat')
    if (URUN_AD.value && URUN_FIYAT.value) {
        urunEkle(URUN_AD.value, URUN_FIYAT.value)
        URUN_AD.value = ""
        URUN_FIYAT.value = ""
    }
    else {
        alertDOM.innerHTML = alertFunction(
            "Baslik Bilgisi",
            "Eksik Bilgi Girdiniz",
            "danger"
        )
    }
}

let shopListDOM = document.querySelector('#shopList')
let shopListTotalDOM = document.querySelector('#shopListTotal')

let totalPrice = document.querySelector('#shopListTotal>li>span').innerHTML
let price = parseInt(totalPrice.slice(0,totalPrice.search(" TL")))

const urunEkle = (urunAd,urunFiyat) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    ${urunAd}
    <span class="badge bg-primary rounded-pill">${urunFiyat} TL</span>
    `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )
    shopListDOM.append(liDOM)
    price += parseInt(urunFiyat)
    shopListTotalDOM.innerHTML = `
        <li class="list-group-item d-flex justify-content-between align-items-center">Toplam Tutar: <span class="badge bg-success bg-gradient rounded-pill">${price} TL</span></li>
    `
}