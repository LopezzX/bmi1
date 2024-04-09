function calculatorbmi(){
    let weight = document.getElementById("weight").value
    let height = document.getElementById('height').value

    let bmi = weight / ((height / 100) ** 2)
    console.log(bmi.toFixed(2))

    document.getElementById('heading').innerHTML = 'ดัชนีมวลกายของคุณคือ'
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(2)

    if(bmi <= 18.49) {
        document.getElementById('message').innerHTML = 'น้ำหนักน้อย / ผอม	มากกว่าคนปกติ'
        console.log('น้ำหนักน้อย / ผอม	มากกว่าคนปกติ')
    } 
    else if(bmi >= 18.50 && bmi <= 22.90) {
        document.getElementById('message').innerHTML = 'ปกติ (สุขภาพดี)	เท่าคนปกติ'
        console.log('ปกติ (สุขภาพดี)	เท่าคนปกติ')
    }
    else if(bmi >= 23 && bmi <= 24.90) {
        document.getElementById('message').innerHTML = 'ท้วม / โรคอ้วนระดับ 1	อันตรายระดับ 1'
        console.log('ท้วม / โรคอ้วนระดับ 1	อันตรายระดับ 1')
    }
    else if(bmi >= 25 && bmi <= 29.90) {
        document.getElementById('message').innerHTML = 'อ้วน / โรคอ้วนระดับ 2	อันตรายระดับ 2'
        console.log('อ้วน / โรคอ้วนระดับ 2	อันตรายระดับ 2')
    }
    else if(bmi > 30) {
        document.getElementById('message').innerHTML = 'อ้วนมาก / โรคอ้วนระดับ 3	อันตรายระดับ 3'
        console.log('อ้วนมาก / โรคอ้วนระดับ 3	อันตรายระดับ 3')
    }
}
function reload(){
    window.location.reload(
    )
}
AOS.init();
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
        loop: false
    })
    .add({
        targets: '.ml13 .letter',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
    })
var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;

};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];


    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);

    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);

    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;

    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;

    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;

    }

    setTimeout(function () {
        that.tick();

    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');

    for (var i = 0; i < elements.length; i++) {

        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);

        }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);

};
