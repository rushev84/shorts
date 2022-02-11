import { Select } from './select/select'
import './select/styles.scss'

// Конструктор класса принимает в себя два параметра.
// Первый - селектор, т.е. тот корневой элемент, куда
// надо будет зарендерить контент нашего плагина.
// Второй - объект, где идёт настройка элементов

const select = new Select('#select', {})

// заносим в консоль для дебага
window.s = select