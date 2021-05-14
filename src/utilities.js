const utilities = {
  scroll(id) {
    setTimeout(() => {
      const div = document.getElementById(`${id}`)
      div.scrollIntoView({behavior: "smooth"})
    }, 100)
  }
}

export default utilities;
