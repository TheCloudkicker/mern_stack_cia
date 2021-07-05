export const procFile = (file, paramsArray) => {



    return new Promise((resolve, reject) => {

        console.log('proc', file, paramsArray)

        let newtext = ''
        const fill = 'XXXX'
        var reader = new FileReader();
        reader.addEventListener('load', function (e) {
            // contents of the file
            let text = e.target.result;
            let lines = text.split("\n");
            let str = ''

            for (var r = 0; r < lines.length; r++) {

                str = lines[r]

                for (var a = 0; a < paramsArray.length; a++) {

                    if (str.indexOf(paramsArray[a]) >= 0) {

                        str = str.replace(paramsArray[a], fill);
                    }

                    newtext = newtext + str + "\n"
                }
            }


            let lines2 = newtext.split("\n");


            // var data = new Blob([lines2], { type: 'text/plain' });
            // var hrefLink = window.URL.createObjectURL(data);

            const downloadLink = window.document.createElement('a');

            downloadLink.href = window.URL.createObjectURL(new Blob([lines2], { type: 'text/plain' }));

            let fName = file.name.split('.')[0]
            downloadLink.download = fName + '-redacted.txt'
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);


            resolve({
                status: true,
                newtext: newtext,
                numInstances: 0,
            })


        });

        reader.readAsText(file);
    })









}