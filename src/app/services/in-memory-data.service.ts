import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
      let contatos = [
        {id: 1,  name: 'Nick Shizuko',  email: 'nick@mailinator.com',  mobile:'11-92905-1985'},
        {id: 2,  name: 'Stu Crew',  email: 'Stu@mailinator.com',  mobile:'11-95876-3521'},
        {id: 3,  name: 'John Appleseed',  email: 'John@mailinator.com',  mobile:'11-95766-3251'},
        {id: 4,  name: 'Eddy Bedock',  email: 'Eddy@mailinator.com',  mobile:'11-98456-3451'},
        {id: 5,  name: 'Paul Brennan',  email: 'Paul@mailinator.com',  mobile:'11-92576-6872'},
        {id: 6,  name: 'Michelle Humphrey',  email: 'Michelle@mailinator.com',  mobile:'11-95358-35418'},
        {id: 7,  name: 'Fritz Odgen',  email: 'Fritz@mailinator.com',  mobile:'11-95536-3354'},
      ];
      return {contatos};
  }
}
