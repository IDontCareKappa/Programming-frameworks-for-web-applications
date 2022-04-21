export class Member {
    name: string;
    mail: string;
    membershipDate: Date;
    membershipType: string;
    constructor(name: string, mail: string, membershipDate: Date, membershipType: string) {
        this.name = name;
        this.mail = mail;
        this.membershipDate = membershipDate;
        this.membershipType = membershipType;
    }
}
