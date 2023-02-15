function myFunction(id) {
    const div = ["myDIV1","myDIV2"]
    var x = document.getElementById(div[id]);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }