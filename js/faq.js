function myFunction(id) {
    const div = ["rep0","rep1","rep2","rep3","rep4"]
    var x = document.getElementById(div[id]);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }