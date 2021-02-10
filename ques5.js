let data = [
    { Name: "Akanksha", Age: 23, Salary: 13000, DOB: "02 Aug 1997"},
    { Name: "Ayush", Age: 18, Salary: 3000, DOB: "13 Oct 2002"},
    { Name: "Riya", Age: 22, Salary: 8000, DOB: "10 Feb 1998"},
    { Name: "Mohit", Age: 16, Salary: 4000, DOB: "10 Aug 2005"},
    {Name: "Shivam", Age: 23, Salary: 15000, DOB: "08 Aug 1997"},
];
console.log(data);

let filterData = [];
for (let i = 0; i<data.length; i++)
{
    if(data[i].Salary > 5000)
    {
        filterData.push(data[i]);
    }
} 
console.log(filterData);


let groupAge = {};

for(let i = 0; i<data.length; i++)
{
    if(!groupAge[data[i].Age])
    {
        groupAge[data[i].Age] = [];
        console.log(groupAge);
    }
    groupAge[data[i].Age].push(data[i]);
}
console.log(groupAge);



for(let i = 0; i<data.length; i++)
{
    if(data[i].Salary < 1000 && data[i].Age > 20)
    {
        console.log(data[i]);
        data[i].Salary *= 5;
        console.log(data[i]);
    } 
}