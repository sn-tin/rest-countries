const hoverAnimate = {
    start: {
        scale: 1
    },
    end: {
        scale: 1.05,
        transition: { duration: 0.5 }
    }
}

const dropdownAnimate = {
    start: {
        height: 0
    }, 
    end: {
        height: "200px",
        transition: {
            duration: 0.5
        }
    },
    exit: {
        height: 0,
        transition: {
            duration: 0.5
        }
    }
}

const dropdownListAnimate = {
    start: {
        opacity: 0
    }, 
    end: {
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
}

export { hoverAnimate, dropdownAnimate, dropdownListAnimate }