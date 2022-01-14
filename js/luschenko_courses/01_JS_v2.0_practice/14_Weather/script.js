const cities = {
  520555: 'Nizhniy Novgorod',
  625144: 'Minsk',
  524894: 'Moscow',
  703448: 'Kyiv',
}

const out = document.querySelector('.out')

function createSelect() {
  const select = document.createElement('select')
  select.setAttribute('id', 'city')
  out.appendChild(select)

  for (let key in cities) {
    const option = document.createElement('option')
    option.setAttribute('value', key)
    option.textContent = cities[key]
    select.appendChild(option)
  }
}

const param = {
  url: 'https://api.openweathermap.org/data/2.5/',
  appid: 'c891ac6c5ac17089e053f60644571299',
}

function getWeather() {
  const cityId = document.querySelector('#city').value

  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    .then((weather) => {
      return weather.json()
    })
    .then(showWeather)
}

function showWeather(data) {
  console.log(data)
  document.querySelector('.package-name').textContent = data.name
  document.querySelector('.price').innerHTML = Math.round(data.main.temp) + '&deg;'
  document.querySelector('.disclaimer').textContent = data.weather[0]['description']
  document.querySelector(
    '.features'
  ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}.png">`
}

createSelect()
getWeather()
document.querySelector('#city').onchange = getWeather
