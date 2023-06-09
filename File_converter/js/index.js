var newImage, showImg;
function loadFile(event) {
  showImg = document.getElementById("showImg");
  showImg.src = URL.createObjectURL(event.target.files[0]);

  newImage = document.createElement("img");
  newImage.src = URL.createObjectURL(event.target.files[0]);

  showImg.onload = function () {
    URL.revokeObjectURL(showImg.src);
  };
}

function pdfDown() {
  console.log(newImage);
  var doc = new jsPDF();
  doc.addImage(newImage, 15, 40, 180, 160);
  doc.save("ImgToPDF.pdf");
}
