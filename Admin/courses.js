const courses = [{
    code : '201CSL203',
    link : 'rectangle65.html',
    name : 'Computer Organization & Microprocessors-TH',
    sessions : 42
},
{
    code : '201CSL203',
    link : 'rectangle65.html',
    name : 'Computer Organization & Microprocessors-TH',
    sessions : 42
},
{
    code : '201CSL203',
    link : 'rectangle65.html',
    name : 'Computer Organization & Microprocessors-TH',
    sessions : 42
},
{
    code : '201CSL203',
    link : 'rectangle65.html',
    name : 'Computer Organization & Microprocessors-TH',
    sessions : 42
},
{
    code : '201CSL203',
    link : 'rectangle65.html',
    name : 'Computer Organization & Microprocessors-TH',
    sessions : 42
}];

let courseList = '';
courses.forEach((course) =>{
    courseList += `
    <tr>
    <td>${course.code}</td>
    <td><a href="${course.link}">${course.name}</a></td>
    <td>${course.sessions}</td>
</tr>
    `;
});

document.querySelector('.js-table')
.innerHTML = courseList;




