const tabsBtn = document.querySelectorAll('.tabs__nav-btn')
const tabsItems = document.querySelectorAll('.tabs__item')

// Метод forEach выполняет указанную функцию один раз для каждого элемента массива
tabsBtn.forEach(onTabClick)

function onTabClick(item) {
  // Вешаем обработчик события на каждый таб
  item.addEventListener('click', function () {
    let currentBtn = item

    // Заносим в tabId текущее значение атрибута data-tab
    let tabId = currentBtn.getAttribute('data-tab')

    // Выбираем текущий таб (возвращается нод)
    let currentTab = document.querySelector(tabId)

    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function (itemRem) {
        itemRem.classList.remove('active')
      })

      tabsItems.forEach(function (itemRem) {
        itemRem.classList.remove('active')
      })

      currentBtn.classList.add('active')
      currentTab.classList.add('active')
    }
  })
}

document.querySelector('.tabs__nav-btn').click()
