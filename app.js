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

class TrafficLight {
    constructor() {
        this.lights = []
    }

    generateLights() {
        const colors = ['green', 'yellow', 'red']
        colors.forEach(color => {
            let light = document.createElement('div')
            light.setAttribute('id', color)
            this.lights.push(light)
        })
        const light = this.lights[0];
        light.classList.add(light.id)
    }

    renderTrafficLight() {
        this.generateLights();
        const trafficLightInstance = document.querySelector('#traffic-light-instance') // <div>
        const trafficContainer = document.createElement('div')
        trafficContainer.classList.add('traffic-container')
        trafficLightInstance.appendChild(trafficContainer) //
        this.lights.forEach(light => {
            trafficContainer.appendChild(light)
        })
    }

    changeLight() {
        const currentLight = this.lights.shift() // green 
        currentLight.classList.remove(currentLight.id)
        this.lights.push(currentLight);
        const nextLight = this.lights[0];
        nextLight.classList.add(nextLight.id)
        console.log(nextLight)
    }
}

window.addEventListener('load', () => {
    const trafficLight = new TrafficLight()
    trafficLight.renderTrafficLight();
    let changeLight = document.getElementById('change-light-button')
    changeLight.addEventListener('click', () => {
        trafficLight.changeLight()
    })
})
