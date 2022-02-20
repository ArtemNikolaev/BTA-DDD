import { randomUUID } from 'crypto'
import {Intermediary} from "../../shared/intermediaryFactory";

class IntermediaryModel {
    private value = {};

    async createIntermediary(intermediary: Intermediary): Promise<Intermediary> {
        const id = randomUUID();
        const createdAt = Date.now();
        const result = Object.assign({}, intermediary, { id, createdAt });
        this.value[id] = result;

        return Promise.resolve(result);
    }

    async getIntermediary(id) {
        return Promise.resolve(this.value[id]);
    }

    async updateIntermediary(intermediary: Intermediary): Promise<Intermediary> {
        this.value[intermediary.id] = intermediary;
        return Promise.resolve(intermediary);
    }

    async deleteIntermediary(id) {
        delete this.value[id];

        return Promise.resolve();
    }

    async getAll() {
        return Promise.resolve(Object.values(this.value));
    }
}

export const intermediaryModel = new IntermediaryModel();