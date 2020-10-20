/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const promoAdv = document.querySelectorAll(".promo__adv img"),
        promoGenre = document.querySelectorAll(".promo__genre"),
        promoBg = document.querySelectorAll(".promo__bg"),
        promoInteractiveList = document.querySelector(".promo__interactive-list"),
        form = document.querySelector(".add"),
        btn = form.querySelector("button"),
        input = form.querySelectorAll("input");

    const deledeAdv = (arr) => {
        promoAdv.forEach(element => {
            element.remove();
        });
    };

    const makeChanges = () => {
        promoGenre[0].textContent = "драма";

        promoBg[0].style.backgroundImage = "url(../appFilm/img/bg.jpg)";
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function addFilm(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                addFilm(films, parent);
            });
        });
    }

    btn.addEventListener("click", function (event) {
        event.preventDefault();

        let addInput = input[0].value;

        if (addInput == false) {

        } else {
            if (input[1].checked == true) {
                console.log("Добавляем любимый фильм");
            } else {
    
            }

            if (addInput.length > 21) {
                addInput = `${addInput.substring(0, 22)}...`;
            }

            movieDB.movies.push(addInput);
            sortArr(movieDB.movies);

            addFilm(movieDB.movies, promoInteractiveList);

            input[0].value = "";
        }
    });

    deledeAdv(promoAdv);
    makeChanges();
    addFilm(movieDB.movies, promoInteractiveList);
});