let output = document.querySelector(".output");
const person = {
    name: "Pawlos",
    age: 16,
    birthdate: "19-08-2006",
    gender: "male",
    empathize: true,
    hobby: ["football", "swimming", "sleeping", "eating"],
    nameChange: function () {
        return "";
    },
    empathizeChange: function () {
        return "";
    },
    rename: function(empathize){
        return (this.empathize = empathize)
    },
    addHobbies: function(hobby){
        this.hobby.push(hobby)

    }
}

person.name = "Gerrad";
person.rename(false)
person.addHobbies("church")

output.innerHTML = `

<p>${person.name}</p>
<p>${person.age}</p> 
<p>${person.birthdate}</p>
<p>${person.gender}</p>
<p>${person.empathize}</p>
<p>${person.hobby}</p>
`