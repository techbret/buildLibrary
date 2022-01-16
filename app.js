class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = 0;
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }
}