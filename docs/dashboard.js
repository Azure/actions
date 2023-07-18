function resizeNumberWidgetTextToFit() {
    let numberWidgets = document.getElementsByClassName("number_widget")

    for (let i = 0; i < numberWidgets.length; i++) {
        let numberWidget = numberWidgets[i]
        let widgetStyle = getComputedStyle(numberWidget)
        let numberValues = numberWidget.getElementsByClassName("value")

        if (numberValues.length != 1) {
            continue
        }

        let numberValue = numberValues[0]
        let numberStyle = getComputedStyle(numberValue)

        let availableWidth = numberWidget.clientWidth - parseFloat(numberStyle.marginLeft) - parseFloat(numberStyle.marginRight)

        while (numberValue.clientWidth > availableWidth) {
            let newSize = parseFloat(numberStyle.fontSize) - 1

            if (newSize < 16) {
                break
            }

            numberValue.style.fontSize = newSize
        }
    }
}

window.addEventListener('load', function() {
    resizeNumberWidgetTextToFit()
}, false);
