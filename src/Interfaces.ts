export interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

export function getPerson(): IPersonData {
    return {
        name: 'Petr',
        secondName: 'Smith',
        age: 7,
    };
}

export interface IStudentData {
    name: string;
    secondName: string;
    age: number;
    phone?: string;
}

export function getStudentsData(): IStudentData[] {
    let ivan: IStudentData = {
        name: 'Ivan',
        secondName: 'Petrov',
        age: 20,
        phone: '+7(555)555-55-50',
    };
    let stepan: IStudentData = {
        name: 'Stepan',
        secondName: 'Petrov',
        age: 19,
        phone: '+7(555)555-55-51',
    };
    let petr: IStudentData = { name: 'Petr', secondName: 'Ivanov', age: 19 };
    return [ivan, stepan, petr];
}
