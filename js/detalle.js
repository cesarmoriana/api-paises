const banderas = document.getElementById('banderas')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        
        const filtroData = data.filter(function (item) {
                return item.name === params
            })

        banderillas(filtroData)
    } catch (error) {
        console.log(error)
    }
}


function banderillas(data) {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>
                    <b>Topónimo: </b>
                    ${item.demonym}
                </p>
                <p>
                    <b>Moneda: </b>
                    ${item.currencies[0].name}
                </p>
                <p>
                    <b>Horario: </b>
                    ${item.timezones[0]}
                </p>
                <p>
                    <b>Prefijo TLF: </b>
                    +${item.callingCodes}
                </p>
                <p>
                    <b>Bandera: </b>
                    <img src="${item.flag}" alt="" class="img-fluid">
                   

                </p>
            </div>
        </article>
        `
    })
    banderas.innerHTML = elementos
}
