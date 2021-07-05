import axios from 'axios'
import { SAVE_FILE_TO_SERVER } from './types'

export const saveFileToServer = file => (dispatch, getState) => {

    const url = '/api/v1/files'

    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = {
        title: file.fileName,
        "uploadedBy": file.user,
        "redactedValues": "red sox1",
        "text": file.fileText,
        "redactedValues": JSON.stringify(file.params)
    }

    console.log('Saving to Server', body)

    axios
        .post(url, body, config)
        .then(res => {
            console.log("res", res)
            dispatch({
                type: SAVE_FILE_TO_SERVER,
                payload: res.data,
            });

        })
        .catch(err => {
            console.error("ERR", err)
        });

}