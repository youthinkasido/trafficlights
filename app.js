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
        console.log('light that comes in', currentLight)
        if (currentLight === 1) {

            $("#green-light").css("background-color", "grey")
            $("#yellow-light").css("background-color", "yellow")
            $("#red-light").css("background-color", "grey")

        } else if (currentLight === 2) {
            $("#green-light").css("background-color", "grey")
            $("#yellow-light").css("background-color", "grey")
            $("#red-light").css("background-color", "red")

        } else if (currentLight === 3) {
            $("#green-light").css("background-color", "green")
            $("#yellow-light").css("background-color", "grey")
            $("#red-light").css("background-color", "grey")
            currentLight = 1;
            return
        }
        currentLight++
    })

    console.log('light that goes out', currentLight)
}