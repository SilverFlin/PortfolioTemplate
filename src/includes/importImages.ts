function getBackgroundImage(imageName: string): { backgroundImage: string } {
    const url: string = new URL(imageName, import.meta.url).href
    return {
        backgroundImage: `url('${url}')`
    }
}

export { getBackgroundImage }