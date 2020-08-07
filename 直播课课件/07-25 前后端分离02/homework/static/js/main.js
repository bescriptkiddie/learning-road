import PreviewImg from "./PreviewImg.js";
import ShowImg from "./ShowImg.js";
import upload from "./api/upload.js";
import getPhotos from "./api/get-photos.js";

const imgFileElement = document.querySelector(".imgFile");
const loadContainer = document.querySelector(".loadContainer");
const showContainer = document.querySelector(".showContainer");
const uploadBtn = document.querySelector(".uploadBtn");
const wantUpload = document.querySelector(".wantUpload");
const parentElement = document.querySelector(".photoContainer");

(async () => {
  // 渲染
  renderShowImg();
})();

async function renderShowImg() {
  parentElement.innerHTML = ``;
  const res = await getPhotos();
  const data = res.data;
  data.forEach((photoInfo) => {
    new ShowImg(photoInfo);
  });
}

uploadBtn.addEventListener("click", async () => {
  await uploadImg();
  uploadCompleted();
  await renderShowImg();
});

function uploadCompleted() {
  reset();
  hidePreviewContainer();
  hideMaskingView();
}

function hideMaskingView() {
  document.querySelector(".masking").style.display = "none";
}

function reset() {
  wantUpload.innerHTML = ``;
  previewImgs = [];
}

async function uploadImg() {
  for (const previewImg of previewImgs) {
    const result = await upload(previewImg);
  }
}

imgFileElement.addEventListener("change", (e) => {
  console.log("change");
  console.log(e.target.files);

  showPreviewContainer();
  renderPreviewImg(Array.from(e.target.files));
  // hack 选择相同文件不触发 change 事件的问题
  e.target.value = "";
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
