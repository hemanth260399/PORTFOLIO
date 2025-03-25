export let fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === "up" ? 60 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 20 : direction === "right" ? -30 : 0
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.9,
                type: "tween",
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}