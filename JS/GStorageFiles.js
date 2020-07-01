const {
    Storage
} = require('@google-cloud/storage');
const path = require('path');

class gStorage {
    constructor() {
        this.storage = new Storage({
            keyFile: 'Please add path to your key file'
        });
        this.bucket = this.storage.bucket(yourbucketname);
        this.filePath = path.join('..', '/tmp/YourFileDetails');
        // I am using the same file path and same file to download and upload
    }

    async uploadFile() {
        try {
            await this.bucket.upload(this.filePath, {
                contentType: "application/json"
            });
        } catch (error) {
            throw new Error(`Error when saving the config. Message :  ${error.message}`);
        }
    }

    async downloadFile() {
        try {
            await this.bucket.file(filename).download({
                destination: this.filePath
            });
        } catch (error) {
            throw new Error(`Error when saving the config. Message :  ${error.message}`);
        }
    }
}
