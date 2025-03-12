// Code:
let complexData = {
departments: [
{
name: "Sales",
employees: [
{ name: "Eve", projects: ["Project A", "Project B"] },
{ name: "Frank", projects: ["Project C"] }
]
},
{
name: "Engineering",
employees: [
{ name: "Grace", projects: ["Project X", "Project Y", "Project Z"] }
]
}
]
};
console.log("Grace's second project:", complexData.departments[1].employees[0].projects[1]);