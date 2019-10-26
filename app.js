var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

window.addEventListener('load', () => {
    var currentLight = 1;
    $("#green-light").css("background-color", "green")
    let changeLightButton = document.getElementById('change-light-button')
    changeLight(changeLightButton, currentLight)
})
function changeLight(changeLightButton, currentLight) {
    changeLightButton.addEventListener('click', function () {
        var green = $("#green-light"); var yellow = $("#yellow-light"); var red = $("#red-light")

        switch (currentLight) {
            case 1:
                green.css("background-color", "grey")
                yellow.css("background-color", "yellow")
                red.css("background-color", "grey")
                break;
            case 2:

                green.css("background-color", "grey")
                yellow.css("background-color", "grey")
                red.css("background-color", "red")
                break;
            case 3:

                green.css("background-color", "green")
                yellow.css("background-color", "grey")
                red.css("background-color", "grey")
                currentLight = 0;
                break;
        }
        currentLight++
    })
}