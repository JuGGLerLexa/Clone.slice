import React, {Component} from 'react';
import Users from "./usersDZ/users";

class App extends Component {

    man = [
        {id: 12, name: "Max", age: 19, wife_id: false},
        {id: 13, name: "Lexa", age: 20, wife_id: true},
        {id: 14, name: "Egor", age: 21, wife_id: true},
        {id: 15, name: "Vlad", age: 20, wife_id: false},
        {id: 16, name: "Dima", age: 20, wife_id: true},
        {id: 17, name: "Kolya", age: 20, wife_id: true},
        {id: 18, name: "Roma", age: 24, wife_id: false},
        {id: 19, name: "Yra", age: 23, wife_id: true},
        {id: 20, name: "Pasha", age: 23, wife_id: false},
        {id: 21, name: "Ananas", age: 123, wife_id: true},
    ];


    woman = [
        {id: 12, name: "Vika", age: 19, husband_id: false},
        {id: 12, name: "Olya", age: 20, husband_id: true},
        {id: 12, name: "Ira", age: 21, husband_id: true},
        {id: 12, name: "Katya", age: 20, husband_id: false},
        {id: 12, name: "Nastya", age: 20, husband_id: true},
        {id: 12, name: "Santa", age: 20, husband_id: true},
        {id: 12, name: "Ylya", age: 24, husband_id: false},
        {id: 12, name: "Erika", age: 23, husband_id: true},
        {id: 12, name: "Zzz", age: 23, husband_id: false},
        {id: 12, name: "Xxx", age: 123, husband_id: true},
    ];





    render() {
        return (
            <div>
                this.man
            </div>
        );
    }
}








export default App;