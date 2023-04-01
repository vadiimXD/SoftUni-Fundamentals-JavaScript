function extractFile(file) {

    let fileItems = file.substring(file.lastIndexOf("\\") + 1)
    let fileName = fileItems.substring(0, fileItems.lastIndexOf("."))
    let fileExtension = fileItems.substring(fileItems.lastIndexOf(".") + 1)
    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${fileExtension}`)

}

extractFile('C:\\Internal\\training-internal\\Template.pptx');