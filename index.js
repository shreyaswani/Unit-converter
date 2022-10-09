var convertBtn = document.getElementById("convert-btn")
var inputEl = document.getElementById("input")
var inputEll = document.getElementById("input")
var inputElll = document.getElementById("input")
var lengthEl = document.getElementById("length-el")
var lengthEll = document.getElementById("length-ell")
var lengthElll = document.getElementById("length-elll")

var meterToFeet =  3.281
var literToGallon =  0.264
var kiloToPound =  2.204


convertBtn.addEventListener("click", function() {
    var baseValue = inputEl.value
    var baaseValue = inputEll.value
    var baaaseValue = inputElll.value

    var pqr = baseValue * meterToFeet
    var xyz = baseValue / meterToFeet
    var rqp = pqr.toFixed(3)
    var zyx = xyz.toFixed(3)

    var efg = baaseValue * literToGallon
    var abc = baaseValue / literToGallon
    var gfe = efg.toFixed(3)
    var cba = abc.toFixed(3)

    var hij = baaseValue * kiloToPound
    var stu = baaseValue / kiloToPound
    var jih = hij.toFixed(3)
    var uts = stu.toFixed(3)

    lengthEl.textContent = `${baseValue} meters = ${rqp} feets | ${baseValue} feets = ${zyx} meters`

    lengthEll.textContent = `${baaseValue} Liters = ${gfe} gallons | ${baaseValue} gallons = ${cba} liters`

    lengthElll.textContent = `${baaaseValue} Kilos = ${jih} pounds | ${baaaseValue} pounds = ${uts} kilos`
})
