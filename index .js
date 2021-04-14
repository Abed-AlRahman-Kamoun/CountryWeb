fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(json => {
    for (let i = 0; i < json.length; i++) 
    {
        var x = document.createElement('li');
        var content = `<div class="card" style="width:400px;">
                        <img class="card-img-top" src="FF" alt="Card image">
                        <div class="card-body">
                        <h4 class="card-title">NN</h4>
                        <p class="card-text">Region & Borders: RR</p>
                        <p class="card-text">Spoken Language: LL</p>
                        <p class="card-text">Currencies: CC</p>
                        <p class="card-text">Population: PP</p>
                        <a href="https://emirates.com" target="_blank" class="btn btn-primary">Visit Country</a>
                        </div>
                        </div>`;
        var Country = content.replace("FF", json[i].flag);
        Country = Country.replace("NN", json[i].name);
        Country = Country.replace("RR", json[i].region + ' / ' + json[i].borders);
        Country = Country.replace("LL", json[i].languages[0].name);
        Country = Country.replace("CC", json[i].currencies[0].name + ' / ' + json[i].currencies[0].code);
        Country = Country.replace("PP", json[i].population + ' people');
        x.innerHTML = Country;
        x.className = 'list-group-item';
        document.getElementById('myul').appendChild(x);
    }
})