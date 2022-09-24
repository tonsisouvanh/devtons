const HeaderAnimate = {
  offscreen: {
    opacity: 0, x: -100,
  },
  onscreen: {
    x: 0, opacity: 1,
    transition: {
      duration: 1
    }
  },

}
const DescAnimate = {
  offscreen: {
    opacity: 0, x: -100,
  },
  onscreen: {
    x: 0, opacity: 1,
    transition: {
      duration: 1
    }
  },

}
const projectsDivAnimate = {
  offscreen: {
    opacity: 0, y: 100,
  },
  onscreen: {
    y: 0, opacity: 1,
    transition: {
      type: "spring", duration: 2
    }
  },
}
const scaleAnimate = {
  offscreen: {
    opacity: 0, scale: 0,
  },
  onscreen: {
    scale: 1, opacity: 1,
    transition: {
      type: "spring", bounce: 0.1, duration: 1
    }
  },
}

const fadeBottomAnimate = {
  offscreen: {
    opacity: 0, y: 50,
  },
  onscreen: {
    opacity: 1, y: 0,
    transition: {
      duration: 1
    }
  },
}


export {HeaderAnimate,DescAnimate,projectsDivAnimate,scaleAnimate,fadeBottomAnimate}