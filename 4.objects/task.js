function Student(name, gender, age) {
    this.name = name;
    this.gender = gender; 
    this.age = age;
  }
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty('excluded')) {
        return; 
      }
      
      if (!this.marks) {
        this.marks = []; 
      }
      
      this.marks.push(...marks);
  }
  
  Student.prototype.getAverage = function () {
    let average = 0;
    if (this.marks && this.marks.length > 0) {
      let sum = this.marks.reduce((acc, item) => acc + item, 0);
      average = sum / this.marks.length;
    }
    return average;
  }
  
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    this.marks = undefined;
    this.excluded = reason;
  }