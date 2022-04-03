const banderas = document.getElementById('banderas')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        banderillas(data)
        formularioCliente(data)
        filtros(data)
    } catch (error) {
        console.log(error)
    }
}

const banderillas = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card">
          
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>
                    <b>Población: </b>
                    ${item.population.toLocaleString('es')}
                </p>
                <p>
                    <b>Capital: </b>
                    ${item.capital}
                </p>
                <p>
                    <b>Región: </b>
                    ${item.region}
                </p>
                <p>
                    <b>Subregión: </b>
                    ${item.subregion}
                </p>
                <p>
                    <button> <a href="pais.html?name=${item.name}">Más info</a></button>
                </p>
            </div>
        </article>
        `
    });
    banderas.innerHTML = elementos
}