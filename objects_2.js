///// pravljenje prvog objekta //////

function Student(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.getData = function () {
        return "Name: " + this.name + ", " + "Age" + this.age + ", " + "Id" + this.id;

    }
}

///// pravljenje drugog objekta //////

function Subject(name, description) {
    this.name = name;
    this.description = description;
    this.getData = function () {
        return "Name: " + this.name + ", " + "Description: " + this.description;
    }

}

///// pravljenje treceg objekta //////

function Classroom(name) {
    this.name = name;
    this.subjects = [];
    this.students = [];
    this.addSubject = function (sub) {
        this.subjects.push(sub)
    }
    this.addStudent = function (stud) {
        this.students.push(stud)
    }
    this.toString = function () {
        var resSub = "";
        for (var i = 0; i < this.subjects.length; i++) {
            resSub += this.subjects[i].getData() + '\n\t';
        }
        var resStud = "";
        for (var i = 0; i < this.students.length; i++) {
            resStud += this.students[i].getData() + '\n\t';
        }
        return resSub + resStud

    }

}

var firstSubject = new Subject("Web Desing", "HTML, CSS");
var secondSubject = new Subject("Programing principles", "JS");

var firstStudent = new Student("Ksenija", 26, 1345);
var secondStudent = new Student("Milos", 28, 2568);

var bit008 = new Classroom("Bit");
bit008.addSubject(firstSubject);
bit008.addSubject(secondSubject);
bit008.addStudent(firstStudent);
bit008.addStudent(secondStudent);
console.log(bit008.toString());
console.log(bit008);
