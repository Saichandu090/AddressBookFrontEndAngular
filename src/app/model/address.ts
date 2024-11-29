export interface Address{
    fullName:string;
    phoneNumber:number;
    address:string;
    city:string;
    state:string;
    zipCode:number;
}

export class ResponseAddress{
    id:number;
    fullName:string;
    phoneNumber:number;
    address:string;
    city:string;
    state:string;
    zipCode:number;

    constructor(){
        this.id=0,
        this.fullName='',
        this.phoneNumber=0,
        this.address='',
        this.city='',
        this.state='',
        this.zipCode=0
    }
}
