async function catchImages(images) {
  for (image of images) {
    const response = await fetch(image);
    const blob = await response.blob();
    document.body.innerHTML += `
        <img src="${URL.createObjectURL(blob)}" width="400"></img>
        `;
  }
}

async function catchTexts(texts) {
  for (text of texts) {
    const response = await fetch(text);
    const data = await response.text();
    document.body.innerHTML += `
              <p>${data}</p>
              `;
  }
}

catchImages([
  "images/rainbow.jpg",
  "images/design1.jpg",
  "images/design2.jpg",
  "images/design3.jpg",
]).catch((error) => {
  console.error(error);
});

catchTexts(["texts/post1.txt", "texts/post2.txt", "texts/post3.txt"]).catch(
  (error) => {
    console.error(error);
  }
);
