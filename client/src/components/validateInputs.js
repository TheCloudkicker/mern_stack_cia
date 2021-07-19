export const validateString = string => {

    return new Promise((resolve, reject) => {


        if (string.indexOf('"') >= 0 && string.match(/"/g).length % 2 != 0) {

            resolve({
                status: false,
                parsedArray: []
            })

        }

        var matches = /".+?"/.exec(string);
        string = string.replace(/".+?"/, "").replace(/^\s+|\s+$/g, "");
        var parsedArray = string.split(/[ ,]+/);
        console.log('parsedArray', parsedArray)

        var parsedArray = parsedArray.filter(function (el) {
            return !!el;
        });

        if (matches) {
            for (var i = 0; i < matches.length; i++) {

                let text = matches[i].trim()
                text = text.replace(/"/g, "")

                if (text) {
                    parsedArray.push(text);
                }
            }
        }


        resolve({
            status: true,
            parsedArray: parsedArray
        })
    })
}