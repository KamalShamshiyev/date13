let btn = document.querySelector('#showDate')
let p = document.querySelector('#date')
let input = document.querySelector('#currDate')

function showDate(){
    let d = new Date(input.value);
    p.innerHTML = ' '
    switch(d.getDay()) {
        case 0:
            p.innerHTML += 'Bazar';
            break;
        case 1:
            p.innerHTML += ' Bazar ertəsi';
            break;
        case 2:
            p.innerHTML += ' Çərşənbə axşamı';
            break;
        case 3:
            p.innerHTML += ' Çərşənbə';
            break;
        case 4:
            p.innerHTML += ' Cümə axşamı';
            break;
        case 5:
            p.innerHTML += ' Cümə';
            break;
        case 6:
            p.innerHTML += ' Şənbə';
            break;
    }
    switch(d.getMonth()) {
        case 0:
            p.innerHTML += ' Yanvar';
            break;
        case 1:
            p.innerHTML += ' Fevral';
            break;
        case 2:
            p.innerHTML += ' Mart';
            break;
        case 3:
            p.innerHTML += ' Aprel';
            break;
        case 4:
            p.innerHTML += ' May';
            break;
        case 5:
            p.innerHTML += ' İyun';
            break;
        case 6:
            p.innerHTML += ' İyul';
            break;
        case 7:
            p.innerHTML += ' Avqust';
            break;
        case 8:
            p.innerHTML += ' Sentyabr';
            break;
        case 9:
            p.innerHTML += ' Oktyabr';
            break;
        case 10:
            p.innerHTML += ' Noyabr';
            break;
        case 11:
            p.innerHTML += ' Dekabr';
            break;      
    }
    p.innerText += " " + d.setDate('23')
}

btn.addEventListener('click', showDate)