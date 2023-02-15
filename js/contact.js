function myFunction(id) {
    const div = ["myDIV1","myDIV2","myDIV3","myDIV4","myDIV5"]
    var x = document.getElementById(div[id]);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }