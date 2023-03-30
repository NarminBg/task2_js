var morning = 'Morning shift';
var afternoon = 'Afternoon shift';
var evening = 'Evening shift';

function Search() {
    var i = document.getElementById('group').value;
    console.log(i);
    var g = Number(i.slice(-2));

    
    switch (g) {
        case 1:
            document.getElementById('result').innerHTML = 1;
            document.body.style.backgroundImage = 'url(images/morning.jpg)';
            break;
        case 2:
            document.getElementById('result').innerHTML = 2;
            document.body.style.backgroundImage = 'url(images/afternoon.jpg)';
            break;
        case 3:
            document.getElementById('result').innerHTML = 3;
            document.body.style.backgroundImage = 'url(images/evening.jpg)';
            break;
    }
    
}
