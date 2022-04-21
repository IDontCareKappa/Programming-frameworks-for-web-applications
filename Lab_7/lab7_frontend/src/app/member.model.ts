export class Member {
    name: string;
    mail: string;
    membershipDate: Date;
    membershipType: string;
    exercises: string[];
    payment: string;
    phone: string;
    constructor(name: string, mail: string, membershipDate: Date, membershipType: string,
        exercises: string[], payment: string, phone: string) {
        this.name = name;
        this.mail = mail;
        this.phone = phone;
        this.membershipDate = membershipDate;
        this.membershipType = membershipType;
        this.exercises = exercises;
        this.payment = payment;
    }
}
