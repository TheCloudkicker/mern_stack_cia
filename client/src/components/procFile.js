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

                if (str.indexOf('Lorem') >= 0) {
                    str = str.replace('Lorem', fill);
                    newtext = newtext + str
                }

                newtext = newtext + str + "\n"
            }

            console.log('newtext', newtext)

            let lines2 = newtext.split("\n");

            for (var s = 0; s < lines2.length; s++) {

                console.log('text', lines2[s])

            }

            // var data = new Blob([lines2], { type: 'text/plain' });
            // var hrefLink = window.URL.createObjectURL(data);

            const downloadLink = window.document.createElement('a');

            downloadLink.href = window.URL.createObjectURL(new Blob([lines2], { type: 'text/plain' }));
            downloadLink.download = file.name
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