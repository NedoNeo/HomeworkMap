export default class ErrorRepository {
    constructor() {
        this.codeErrors = new Map();
        this.codeErrors.set(404, "Not found");
        this.codeErrors.set(405, "you have very beautiful eyes, it is prohibited here");
        this.codeErrors.set(12, "you are awesome");

    }

    addError(code, description) {
        this.codeErrors.set(code, description);
    }

    translate(code) {
        if(this.codeErrors.has(code)) {
            return this.codeErrors.get(code);
        } else {
            return "Unknown error";
        }
    }


}