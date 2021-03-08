function compute() {
    const principal = document.getElementById("principal").value;
    if (principal < 1) {
        alert('Enter a positive number')
        return
    }
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;
    document.getElementById("result").innerHTML = `
If you deposit <mark>${principal}</mark>, <br>
at an interest rate of <mark>${rate}%</mark>.<br>
You will receive an amount of <mark>${parseInt(principal, 10) + parseInt(interest, 10)}</mark>,<br>
in the year ${getFutureYear(years)}
    `
}

function sliderChange() {
    const rate = document.getElementById("rate").value;
    document.getElementById("sliderValue").innerHTML = rate
}

function getFutureYear(years) {
    const d = new Date();
    const currentYear = d.getFullYear()
    return parseInt(currentYear, 10) + parseInt(years, 10)
}
