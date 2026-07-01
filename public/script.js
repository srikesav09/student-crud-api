const API = "http://localhost:5000/api/students";

const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

let editId = null;

async function loadStudents(){

    const res = await fetch(API);
    const students = await res.json();

    table.innerHTML = "";

    students.forEach(student=>{

        table.innerHTML += `
        <tr>

            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.department}</td>

            <td>

                <button
                    class="edit"
                    onclick="editStudent('${student._id}')">
                    Edit
                </button>

                <button
                    class="delete"
                    onclick="deleteStudent('${student._id}')">
                    Delete
                </button>

            </td>

        </tr>
        `;

    });

}

form.addEventListener("submit",async(e)=>{

    e.preventDefault();

    const student={

        name:document.getElementById("name").value,
        age:document.getElementById("age").value,
        department:document.getElementById("department").value

    };

    if(editId){

        await fetch(API+"/"+editId,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(student)
        });

        editId=null;

    }else{

        await fetch(API,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(student)
        });

    }

    form.reset();

    loadStudents();

});

async function deleteStudent(id){

    await fetch(API+"/"+id,{
        method:"DELETE"
    });

    loadStudents();

}

async function editStudent(id){

    const res = await fetch(API+"/"+id);

    const student = await res.json();

    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("department").value = student.department;

    editId=id;

}

loadStudents();