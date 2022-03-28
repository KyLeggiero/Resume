
// MARK: - Disabled Links

function disableDisabledLinks() {
    $(":link[disabled], :visited[disabled]").click(() => false)
}



// MARK: - Reduce Motion

function isDevicePowerfulEnoughForAnimations(callback) {
    function isInternetConnectionHardWired() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
        if (undefined === connection) {
            return undefined
        }
        const connectionType = connection.type

        switch (connectionType) {
            case "ethernet":
                return true

            case "bluetooth":
            case "cellular":
            case "none":
            case "wifi":
            case "wimax":
            case "other":
            case "unknown":
                return false
        }
    }


    function isElectricityFromAWire(callback) {
        window.navigator.getBattery().then(battery => {
            callback(
                battery.charging
                && battery.level == 1
                && !isFinite(battery.dischargingTime)
                && battery.chargingTime == 0
            )

            battery.on
        })
    }


    function isMobileUserAgent() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(window.navigator.userAgent)
    }


    if (isInternetConnectionHardWired()
        && !isMobileUserAgent()) {
        isElectricityFromAWire(isElectricityFromAWire => {
            callback(isElectricityFromAWire)
        })
    }
}


function setUpAutoReduceMotion() {
    isDevicePowerfulEnoughForAnimations(isDevicePowerfulEnoughForAnimations => {
        if (isDevicePowerfulEnoughForAnimations) {
            $(":root").removeClass("reduce-motion")
        }
        else {
            $(":root").addClass("reduce-motion")
        }

        $("#reduce-motion-toggle").prop('checked', !isDevicePowerfulEnoughForAnimations)
    })
}


function isReduceMotion() {
    return window.localStorage.getItem('org.bh.reduce-motion') === "true"
}


function setReduceMotion(shouldReduceMotion) {
    window.localStorage.setItem('org.bh.reduce-motion', shouldReduceMotion)
    shouldReduceMotion = isReduceMotion()
    $(":root").toggleClass("reduce-motion", shouldReduceMotion)
    $("#reduce-motion-toggle").prop("checked", shouldReduceMotion)
}


function setUpReduceMotionCheckBox() {
    $("#reduce-motion-toggle").change(() => {
        setReduceMotion($("#reduce-motion-toggle").is(":checked"))
    })
    setReduceMotion(isReduceMotion())
}



// // MARK: - Touch Compatibility
//
// function setUpMenuTouchCompatibility() {
//     const hoverParent = $(".shows-child-on-hover")
//
//     hoverParent.bind("tap", event => {
//         const shouldShowMenu = event.target.is(":hover") || event.target.is(":focus")
//
//         // 🤷🏼
//     })
// }



// MARK: - Startup

$(() => {
    disableDisabledLinks()

    setUpAutoReduceMotion()
    setUpReduceMotionCheckBox()
    //setUpMenuTouchCompatibility()
})
