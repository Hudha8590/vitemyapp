function StudentDetails(){
    const students = [
  { id: 1, name: "Aisha", grade: "A" },
  { id: 2, name: "Rahul", grade: "B" },
  { id: 3, name: "Meera", grade: "A" },
  { id: 4, name: "Kiran", grade: "C" }
];
const listItems=students.map(student=><li key={student.id}>{student.name}:&nbsp;{student.grade}</li>)
return (
  <ul>{listItems}</ul>
)
}
export default StudentDetails