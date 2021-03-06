import { Teachers as TeachersModel } from '../models';

export class Teachers {
    constructor(data) {
        this.model = {
            teachers: new TeachersModel(data),
        };
    }

    async readTeachers() {
        const collection = await this.model.teachers.readTeachers();

        return collection;
    }

    async readTeacherById() {
        const document = await this.model.teachers.readTeacherById();

        return document;
    }

    async createTeacher() {
        const document = await this.model.teachers.createTeacher();

        return document;
    }

    async updateTeacher() {
        const document = await this.model.teachers.updateTeacher();

        return document;
    }

    async removeTeacher() {
        const document = await this.model.teachers.removeTeacher();

        return document;
    }
}
