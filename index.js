// Grade System Code
function getDegree() {
    let degree = +prompt('أدخل درجتك');

    switch (true) {
        case (degree >= 0 && degree < 50):
            console.log('ضعيف جداً');
            break;
        case (degree >= 50 && degree < 65):
            console.log('مقبول');
            break;
        case (degree >= 65 && degree < 75):
            console.log('جيد');
            break;
        case (degree >= 75 && degree < 85):
            console.log('جيد جداً');
            break;
        case (degree >= 85 && degree <= 100):
            console.log('امتياز');
            break;
        default:
            console.log('أدخل درجة صحيحة.');
            break;
    }
}

// AC Remote Code
let acDegrees = 16;
let acStatus = false;
let fanSpeed = 0;

function toggleAC() {
    if (acStatus == false) {
        acStatus = true;
        console.log('AC is ON');
    } else if (acStatus == true) {
        acStatus = false;
        console.log('AC is OFF');
    }
}

function increment() {
    if (acStatus == false) {
        alert('AC is Off ,Please turned On!')
    }
    if (acDegrees < 30 && acStatus == true) {
        acDegrees++;
        console.log('AC Temperature is : ' + acDegrees);
    } else if (acDegrees >= 30) {
        alert('Maximum Degree');
    }
}

function decrement() {
    if (acStatus == false) {
        alert('AC is Off ,Please turned On!')
    }

    if (acDegrees > 16 && acStatus == true) {
        acDegrees -= 1;
        console.log('AC Temperature is : ' + acDegrees);
    } else if (acDegrees <= 16 && acStatus == true) {
        alert('Minimum Degree');
    }
}

function fanButton() {
    if (acStatus == false) {
        alert('AC is Off ,Please turned On!')
    }

    if (fanSpeed < 3 && acStatus == true) {
        fanSpeed++;
        console.log('Fan level is : ' + fanSpeed);
    } else if (acStatus == true) {
        fanSpeed = 1;
        console.log('Fan level is : ' + fanSpeed);
    }
}