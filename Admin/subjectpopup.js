function showPopup(subject, faculty) {
    const popup = document.getElementById('subjectPopup');
    popup.innerHTML = `
       <button onclick="hidePopup()">&#8592;</button>
       <center><h2 style="margin-bottom: 10px;">Allocated Subject</h2></center>
        <h3 style="margin-bottom: 10px;">Faculty Name: ${faculty}</h3>
        <table>
            <tr>
                <th>Sr. No</th>
                <th>Course Name</th>
            </tr>
            <tr>
                <td>1</td>
                <td>${subject}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>${subject}</td>
            </tr>
            <tr>
                <td>3</td>
                <td>${subject}</td>
            </tr>
            <tr>
                <td>4</td>
                <td>${subject}</td>
            </tr>
            <!-- Add more rows as needed -->
        </table>
    `;
    popup.style.display = 'block';
}

function hidePopup() {
    const popup = document.getElementById('subjectPopup');
    popup.style.display = 'none';
}