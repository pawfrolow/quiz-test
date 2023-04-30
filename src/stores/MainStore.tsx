import { makeAutoObservable } from 'mobx';

class MainStore {
    name = '';
    score = 0;

    constructor() {
        makeAutoObservable(this);
    }

    set setName(value: string) {
        this.name = value;
    }

    increaseScore(value: number) {
        this.score += value;
    }

    resetScore() {
        this.score = 0;
    }
}

const mainStore = new MainStore();

export default mainStore;
