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


        if (matches) {
            for (var i = 0; i < matches.length; i++) {
                parsedArray.push(matches[i].replace(/"/g, ""));
            }
        }


        resolve({
            status: true,
            parsedArray: parsedArray
        })


    })



}