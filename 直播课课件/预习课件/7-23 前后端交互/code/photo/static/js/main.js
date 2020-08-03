import PreviewImg from "./PreviewImg.js";
import upload from "./upload.js";
const imgFileElement = document.querySelector(".imgFile");
const loadContainer = document.querySelector(".loadContainer");
const showContainer = document.querySelector(".showContainer");
const uploadBtn = document.querySelector(".uploadBtn");
const wantUpload = document.querySelector(".wantUpload");

uploadBtn.addEventListener("click", async () => {
  console.log("upload");
  await uploadImg();
  reset();
});

function reset() {
  wantUpload.innerHTML = ``;
  previewImgs = [];
  hidePreviewContainer();
}

async function uploadImg() {
  for (const previewImg of previewImgs) {
    const result = await upload(previewImg);
    console.log(result);
  }
}

imgFileElement.addEventListener("change", (e) => {
  console.log(e.target.files);

  showPreviewContainer();
  renderPreviewImg(Array.from(e.target.files));
});

let previewImgs = [];
function renderPreviewImg(files) {
  files.forEach((file) => {
    const previewImg = new PreviewImg(file);
    previewImgs.push(previewImg);
  });
}

function showPreviewContainer() {
  loadContainer.style.display = "block";
  showContainer.style.display = "none";
}
function hidePreviewContainer() {
  loadContainer.style.display = "none";
  showContainer.style.display = "block";
}
