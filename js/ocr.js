import { createWorker } from 'tesseract.js'

const worker = createWorker({
    logger: m => console.log(m)
});

const result = document.getElementById('result');

let recognize = async ({target: {files}}) => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize();

    const { data: { text } } = await worker.recognize(files[0]);

    console.log(text);
    result.innerText = text;
};

const uploader = document.getElementById('uploader');
uploader.addEventListener('change', recognize);