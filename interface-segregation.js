
/*
Interface Segregation Principle
We do not have interfaces in JS but we could do some workaround
*/

class FileProcessor {
    constructor(fileName) {
        this.fileName = fileName
    }
}

const pdf = {
    processPDFFile() {
         console.log(`Processing PDF from ${this.fileName}`);
    }
};

const svg = {
    processSVGFile() {
        console.log(`Processing SVG from ${this.fileName}`);
   }
}

class PDFFileProcessor extends FileProcessor {}
class SVGFileProcessor extends FileProcessor {}

Object.assign(PDFFileProcessor.prototype, pdf);
Object.assign(SVGFileProcessor.prototype, svg);

const pdfProcessor = new PDFFileProcessor('test.pdf');
const svgProcessor = new SVGFileProcessor('test.svg');

console.log(pdfProcessor.processPDFFile());
console.log(svgProcessor.processSVGFile());
