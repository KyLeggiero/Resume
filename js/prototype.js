
const ThemeBrightness = {
    black : "brightness-black",
    dark : "brightness-dark",
    light : "brightness-light",
    white : "brightness-white",
}

let userWantsHighContrastModeNext = false



function disableDisabledLinks() {
    $(":link[disabled], :visited[disabled]").click(() => false)
}


function didClickBrightnessToggle() {
    if ($(":root").hasClass("brightness-dark")) {
        $(":root").removeClass("brightness-dark").addClass("brightness-light")
    }
    else {
        $(":root").removeClass("brightness-light").addClass("brightness-dark")
    }
    return false;
}


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


function setDarkMode(isDarkMode) {
    setThemeBrightness(isDarkMode ? ThemeBrightness.dark : ThemeBrightness.light)
}


function isDarkBrightness() {
    switch (currentThemeBrightness()) {
        case ThemeBrightness.black:
        case ThemeBrightness.dark:
            return true

        default:
            return false
    }
}


function setHighContrastDarkMode(isHighContrastDarkMode) {
    setThemeBrightness(isHighContrastDarkMode ? ThemeBrightness.black : ThemeBrightness.white)
}


function isHighContrastBrightness() {
    switch (currentThemeBrightness()) {
        case ThemeBrightness.black:
        case ThemeBrightness.white:
            return true

        default:
            return false
    }
}


function setThemeBrightness(brightness) {
    $(":root").removeClass((_, className) => {
        return className.match(/(\bbrightness-\w+)/gim)
    })

    $(":root").addClass(brightness)
}


function currentThemeBrightness() {
    return $(":root")[0].className.match(/\bbrightness-\w+/gi)[0]
}


function setReduceMotion(shouldReduceMotion) {
    $(":root").toggleClass("reduce-motion", shouldReduceMotion)
}


function setUpDarkModeCheckBox() {
    $("#dark-mode-toggle").click(event => {
        if (event.altKey || event.ctrlKey || event.shiftKey) {
            userWantsHighContrastModeNext = true
        }
        else {
            userWantsHighContrastModeNext = false
        }
    })

    $("#dark-mode-toggle").change(event => {
        if (userWantsHighContrastModeNext) {
            userWantsHighContrastModeNext = false
            const wasDarkModeAlready = isDarkBrightness()
            const shouldCheckDarkModeCheckBox = wasDarkModeAlready

            if (isHighContrastBrightness()) {
                setDarkMode(wasDarkModeAlready)
            }
            else {
                setHighContrastDarkMode(wasDarkModeAlready)
            }

            $("#dark-mode-toggle").prop("checked", shouldCheckDarkModeCheckBox)
            return shouldCheckDarkModeCheckBox
        }
        else {
            setDarkMode($("#dark-mode-toggle").is(":checked"))
        }
    })

    $("#dark-mode-toggle").prop("checked", isDarkBrightness())
}


function setUpReduceMotionCheckBox() {
    $("#reduce-motion-toggle").change(event => {
        setReduceMotion($("#reduce-motion-toggle").is(":checked"))
    })
    $("#reduce-motion-toggle").prop("checked", true)
}


function setUpMenuTouchCompatibility() {
    const hoverParent = $(".shows-child-on-hover")

    hoverParent.bind("tap", event => {
        const shouldShowMenu = event.target.is(":hover") || event.target.is(":focus")

        // 🤷🏼
    })
}


$(() => {
    disableDisabledLinks()

    setUpAutoReduceMotion()
    setUpDarkModeCheckBox()
    setUpReduceMotionCheckBox()
    setUpMenuTouchCompatibility()
})
