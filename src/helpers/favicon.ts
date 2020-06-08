function setFavicon(isDarkMode: boolean) {
    // Change elements with favicon class
    const faviconElements = document.getElementsByClassName("favicon")
    for (let index = 0; index < faviconElements.length; index++) {
        const favicon = faviconElements[index]
        const attribute = favicon.attributes.getNamedItem("href")
        if (attribute !== null) {
            const currentModeIsDark = attribute.value.indexOf("/favicon-bw-inverted/") !== -1
            if (currentModeIsDark !== isDarkMode) {
                const attributeValue = isDarkMode
                    ? attribute.value.replace("/favicon-bw/", "/favicon-bw-inverted/")
                    : attribute.value.replace("/favicon-bw-inverted/", "/favicon-bw/")
                favicon.setAttribute("href", attributeValue)
            }
        }
    }
    // Change elements with app-image class
    const appImageElements = document.getElementsByClassName("app-image")
    for (let index = 0; index < appImageElements.length; index++) {
        const appImage = appImageElements[index]
        const attribute = appImage.attributes.getNamedItem("content")
        if (attribute !== null) {
            const currentModeIsDark = attribute.value.indexOf("/favicon-bw-inverted/") !== -1
            if (currentModeIsDark !== isDarkMode) {
                const attributeValue = isDarkMode
                    ? attribute.value.replace("/favicon-bw/", "/favicon-bw-inverted/")
                    : attribute.value.replace("/favicon-bw-inverted/", "/favicon-bw/")
                appImage.setAttribute("content", attributeValue)
            }
        }
    }
    // Change elements with app-color class
    const appColorElements = document.getElementsByClassName("app-color")
    for (let index = 0; index < appColorElements.length; index++) {
        const appColor = appColorElements[index]
        const attribute = appColor.attributes.getNamedItem("content")
        if (attribute !== null) {
            const currentModeIsDark = attribute.value.indexOf("#3B3B3B") !== -1
            if (currentModeIsDark !== isDarkMode) {
                const attributeValue = isDarkMode ? "#3B3B3B" : "#FFFFFF"
                appColor.setAttribute("content", attributeValue)
            }
        }
    }
}

export function setDynamicFavicon() {
    if (window && window.matchMedia) {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        setFavicon(mediaQuery.matches)
        mediaQuery.addEventListener("change", (newMediaQuery) => {
            setFavicon(newMediaQuery.matches)
        })
    }
}
