const utilities = {
  scroll(id, yOffset) {
    setTimeout(() => {
      const div = document.getElementById(`${id}`)
      const y = div.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth"})
    }, 100)
  }
}

export default utilities;
