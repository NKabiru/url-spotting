import { createWorker } from 'tesseract.js'

const worker = createWorker({
    logger: m => console.log(m)
});

const result = document.getElementById('result');

let recognize = async (imageElement) => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize();

    const { data: { text } } = await worker.recognize(imageElement);

    console.log(text);
    result.innerText = text;
};

const image = document.getElementById('url-image');
recognize(image);