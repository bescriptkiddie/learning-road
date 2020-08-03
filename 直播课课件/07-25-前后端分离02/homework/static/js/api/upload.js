export default function upload(previewImg) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/upload");
    const formData = new FormData();
    formData.append("img", previewImg.getFile());
    xhr.onload = (e) => {
      resolve(e.target.response);
    };

    xhr.upload.onprogress = (e) => {
      previewImg.updateProgress(e.loaded, e.total);
    };

    xhr.send(formData);
  });
}
