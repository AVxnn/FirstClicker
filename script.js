// Довольно таки много кода для обычного кликера но во втором я более менее исправил данные забары)




let click = document.querySelector('.buttonclick');         // Поиск нужных элементов // Кнопки 'клик'
let buttonshop = document.querySelector('.buttonshop');     // Кнопки покупки
let dollorchange = document.querySelector('.dollorchange');       // Денег 
let shopOneClick = document.querySelector('.shopClick');    // Текст магазина
let allClick = document.querySelector('.allClick');     // Счет кликов
let blackline = document.querySelector('.progress-bar'); // Прогресс лайн
let lvltextchange = document.querySelector('.lvltextchange'); // лвл текст
let ks = document.querySelector('.ks'); // клики
let aks = document.querySelector('.aks'); // автоклики
let clicksecond = document.querySelector('.clicksecond'); // клик в сек
let clickall = document.querySelector('.allClick'); // всего кликов стата
let allBuy = document.querySelector('.allBuy'); // всего купленно стата
let allautoclicker = document.querySelector('.allautoclicker'); // всего автокликов стата
// Главные переменные


let countShop = [200, 2000, 20000, 2000, 0, 1, 0]; // массив с инфой про магазин

let statsGame = [1, 0, 0, 0, 100, 0]; // массив с инфой про игрока


let arr = [];
let allClicksone = 0; //
let nameButtonclick;
let textShopclick;

let i = 0;
let moneyDol = 0; // переменные
let cliker = 0;
let allBuySave = 0;
let allautoclickerSave = 0;
let alllClickSave = 0;
let autoclicksecondSave = 0;
let lvltextSave = 0;
// Сохранение переменных



// Главные переменныe
    
let clickbutton = function () { // Добавляет деньги при нажатие на кнопку 'клик'
    countShop[4] += countShop[5];
    statsGame[0] += countShop[5];
    statsGame[5] += 1;
    localStorage.setItem('array', JSON.stringify(countShop));
    localStorage.setItem('statsArray', JSON.stringify(statsGame));
    allClicksone++;
    statsGame[2]++;
    clickall.innerHTML = statsGame[2];
    console.log(statsGame[3]);
};

setInterval(() => {         // Таймер добавления денег каждую секунду товар 4
        countShop[4] += countShop[6];
        dollorchange.innerHTML = countShop[4]; 
        statsGame[0] += countShop[6];
        allautoclicker.innerHTML = statsGame[0];
}, 1000);

let runGame = function () { // Запуск игры при нажатие на кнопку 'клик'
    blackload();
    clickbutton();
    changeLvlText();
    dollorchange.innerHTML = countShop[4];
    allautoclicker.innerHTML = statsGame[0];
    
};


window.onload = function() { // ЗАГРУЗКА ВСЕХ СОХРАНЕНИЙ ИЗ LOCALSTORAGE
    if(true){
        countShop = JSON.parse(localStorage.array);
        statsGame = JSON.parse(localStorage.statsArray);
        dollorchange.innerHTML = countShop[4];
        aks.innerHTML = countShop[6];
        document.querySelector('.textshopone').innerHTML = countShop[0];
        document.querySelector('.textshoptwo').innerHTML = countShop[1];
        document.querySelector('.textshopthire').innerHTML = countShop[2];
        document.querySelector('.textshopfried').innerHTML = countShop[3];
        ks.innerHTML = countShop[5];
        document.querySelector('.allautoclicker').innerHTML = statsGame[0];
        document.querySelector('.allBuy').innerHTML = statsGame[1];
        document.querySelector('.allClick').innerHTML = statsGame[2];
        document.querySelector('.clicksecond').innerHTML = countShop[5];
        document.querySelector('.autoclicksecond').innerHTML = countShop[6];
        document.querySelector('.lvltextchange').innerHTML = statsGame[3];
        blackline.style.width = statsGame[5] + '%';
    }
};




let blackload = function(){ // Полоса прогресса левла
    blackline.style.width = statsGame[5] + '%';
    if(statsGame[5] > 100){
            statsGame[3] = statsGame[4] / 100;
            lvltextchange.innerHTML = statsGame[3];
            console.log(statsGame[3]);
            statsGame[4] += 100;
            alert('Поздравляю вы повысили свой лвл в честь этого вам начислен бонус');
            countShop[4] += 1000;
            statsGame[0] += 1000;
        blackline.style.width = '1%';
        statsGame[5] = 0;
    }
};

let changeLvlText = function(){

};

/////////// Магазин /////////////

let buttonShop = function(nameButton, textShop){ // Магазин кнопки  все довольно просто можно было бы сделать по удобнее
    // но это во втором кликере
    nameButtonclick = document.querySelector('.' + nameButton);
    textShopclick = document.querySelector('.' + textShop);

    
    if (countShop[4] > 0 && countShop[4] >= textShopclick.innerHTML) {
        if(nameButton == 'buttonshopone'){
            countShop[4] -= countShop[0];
            countShop[0] += 200;
            textShopclick.innerHTML = countShop[0];
        } else if(nameButton == 'buttonshoptwo'){
            countShop[4] -= countShop[1];
            countShop[1] += 2000;
            textShopclick.innerHTML = countShop[1];
        } else if(nameButton == 'buttonshopthire'){
            countShop[4] -= countShop[2];
            countShop[2] += 20000;
            textShopclick.innerHTML = countShop[2];
        }
        countShop[5] += parseInt(nameButtonclick.value);
        textShopclick.innerHTML = textShopclick.innerHTML ;
        dollorchange.innerHTML = countShop[4];
        ks.innerHTML = countShop[5];
        statsGame[1]++;
        allBuy.innerHTML = statsGame[1];
    }
    console.log(nameButtonclick.value, textShopclick, textShopclick.innerHTML);
    
    clicksecond.innerHTML = countShop[5];
};

let buttonShopAuto = function(nameButton, textShop){ // Кнопка в магазине автоклика
    nameButtonclick = document.querySelector('.' + nameButton);
    textShopclick = document.querySelector('.' + textShop);

    if (countShop[4] > 0 && countShop[4] >= countShop[3]) {
        countShop[4] -= countShop[3];
        countShop[3] += 2000;
        dollorchange.innerHTML = countShop[4];
        textShopclick.innerHTML = countShop[3];
        countShop[6] += 10;
        aks.innerHTML = countShop[6];
        statsGame[1]++;
        allBuy.innerHTML = statsGame[1];
        document.querySelector('.autoclicksecond').innerHTML = countShop[6];
    }
};

let buttonShopLvl = function(){ // кнопка покупки в магазине лвла
    nameButtonclick = document.querySelector('.buttonshopfive');
    textShopclick = document.querySelector('.textshopfive');
    if (countShop[4] > 0 && countShop[4] >= 20000) {
        var sumAlert = statsGame[5];
        statsGame[5] = 99;
        countShop[4] -= 20000;
        allClicksone = statsGame[4];
        statsGame[5] = sumAlert;
        dollorchange.innerHTML = countShop[4];
        statsGame[1]++;
        statsGame[3]++;
        statsGame[4] += 100;
        lvltextchange.innerHTML = statsGame[3];
        alert('Поздравляю вы повысили свой лвл в честь этого вам начислен бонус');
        countShop[4] += 1000;
    }
    
    
};

let buttonShopColor = function(){ // кнопка в магазине покупка смены цвета кнопки

    if (countShop[4] > 0 && countShop[4] >= 20000) {
        countShop[4] -= 20000;
        
        dollorchange.innerHTML = countShop[4];
        click.style.backgroundColor = prompt('Введи цвет любой цвет из списка: red, green, gold, blue');
        statsGame[1]++;
    }
    
    
};

document.addEventListener('keydown', function(event) { // хз вроде бы не работает:D
    if (event.code == 13) {
      alert('Отменить!')
    }
  });
  