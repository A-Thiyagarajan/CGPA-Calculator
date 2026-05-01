// Grade point mapping
const gradePoints = {
    'O': 10,
    'A+': 9,
    'A': 8,
    'B+': 7,
    'B': 6,
    'C': 5,
    'U': 0
};

// Subjects array to store subject data
let subjects = [];

/**
 * Add a new subject to the calculator
 */
function addSubject() {
    const subjectId = Date.now();
    const newSubject = {
        id: subjectId,
        name: '',
        credits: 0,
        grade: 'O'
    };

    subjects.push(newSubject);
    renderSubjects();
}

/**
 * Remove a subject from the calculator
 */
function removeSubject(id) {
    subjects = subjects.filter(subject => subject.id !== id);
    renderSubjects();
}

/**
 * Update subject data
 */
function updateSubject(id, field, value) {
    const subject = subjects.find(s => s.id === id);
    if (subject) {
        if (field === 'credits') {
            subject[field] = Math.max(0, parseFloat(value) || 0);
        } else {
            subject[field] = value;
        }
    }
}

/**
 * Render all subjects in the UI
 */
function renderSubjects() {
    const container = document.getElementById('subjectsContainer');

    if (subjects.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>📚 No subjects added yet</p>
                <p style="font-size: 0.9em;">Click "Add Subject" to get started</p>
            </div>
        `;
        return;
    }

    container.innerHTML = subjects
        .map(subject => createSubjectCard(subject))
        .join('');
}

/**
 * Create HTML for a subject card
 */
function createSubjectCard(subject) {
    return `
        <div class="subject-card" id="subject-${subject.id}">
            <div class="form-group">
                <label for="name-${subject.id}">Subject Name</label>
                <input 
                    type="text" 
                    id="name-${subject.id}"
                    value="${subject.name}"
                    placeholder="e.g., Data Structures"
                    onchange="updateSubject(${subject.id}, 'name', this.value)"
                    onkeyup="updateSubject(${subject.id}, 'name', this.value)"
                />
            </div>
            <div class="form-group">
                <label for="credits-${subject.id}">Credits</label>
                <input 
                    type="number" 
                    id="credits-${subject.id}"
                    value="${subject.credits}"
                    placeholder="0"
                    min="0"
                    step="0.5"
                    onchange="updateSubject(${subject.id}, 'credits', this.value)"
                />
            </div>
            <div class="form-group">
                <label for="grade-${subject.id}">Grade</label>
                <select 
                    id="grade-${subject.id}"
                    onchange="updateSubject(${subject.id}, 'grade', this.value)"
                >
                    <option value="O" ${subject.grade === 'O' ? 'selected' : ''}>O (10)</option>
                    <option value="A+" ${subject.grade === 'A+' ? 'selected' : ''}>A+ (9)</option>
                    <option value="A" ${subject.grade === 'A' ? 'selected' : ''}>A (8)</option>
                    <option value="B+" ${subject.grade === 'B+' ? 'selected' : ''}>B+ (7)</option>
                    <option value="B" ${subject.grade === 'B' ? 'selected' : ''}>B (6)</option>
                    <option value="C" ${subject.grade === 'C' ? 'selected' : ''}>C (5)</option>
                    <option value="U" ${subject.grade === 'U' ? 'selected' : ''}>U (0)</option>
                </select>
            </div>
            <button 
                class="btn-remove" 
                onclick="removeSubject(${subject.id})"
                title="Remove this subject"
            >
                Remove
            </button>
        </div>
    `;
}

/**
 * Calculate and display CGPA
 */
function calculateCGPA() {
    if (subjects.length === 0) {
        document.getElementById('semesterGPA').textContent = '0.00';
        document.getElementById('totalCredits').textContent = '0';
        document.getElementById('totalWeightedGrade').textContent = '0.00';
        return 0;
    }

    let totalCredits = 0;
    let totalWeightedGrade = 0;

    subjects.forEach(subject => {
        const credits = parseFloat(subject.credits) || 0;
        const points = gradePoints[subject.grade] || 0;
        
        totalCredits += credits;
        totalWeightedGrade += (points * credits);
    });

    let semesterGPA = 0;
    if (totalCredits > 0) {
        semesterGPA = totalWeightedGrade / totalCredits;
    }

    // Update display
    document.getElementById('semesterGPA').textContent = semesterGPA.toFixed(2);
    document.getElementById('totalCredits').textContent = totalCredits.toFixed(2);
    document.getElementById('totalWeightedGrade').textContent = totalWeightedGrade.toFixed(2);

    return semesterGPA;
}

/**
 * Calculate cumulative GPA including previous semester data
 */
function calculateCumulativeGPA() {
    const previousCGPA = parseFloat(document.getElementById('previousCGPA').value) || 0;
    const previousCredits = parseFloat(document.getElementById('previousCredits').value) || 0;

    // Get current semester GPA
    let currentCredits = 0;
    let currentWeightedGrade = 0;

    subjects.forEach(subject => {
        const credits = parseFloat(subject.credits) || 0;
        const points = gradePoints[subject.grade] || 0;
        
        currentCredits += credits;
        currentWeightedGrade += (points * credits);
    });

    // Calculate total credits and cumulative GPA
    let totalCredits = previousCredits + currentCredits;
    let cumulativeGPA = 0;

    if (totalCredits > 0) {
        const previousWeightedGrade = previousCGPA * previousCredits;
        const totalWeightedGrade = previousWeightedGrade + currentWeightedGrade;
        cumulativeGPA = totalWeightedGrade / totalCredits;
    }

    // Update cumulative GPA display
    document.getElementById('cumulativeGPA').textContent = cumulativeGPA.toFixed(2);
    document.getElementById('totalAllCredits').textContent = totalCredits.toFixed(2);
    document.getElementById('displayPreviousCGPA').textContent = previousCGPA.toFixed(2);
    document.getElementById('displayPreviousCredits').textContent = previousCredits.toFixed(2);

    return cumulativeGPA;
}

/**
 * Update all calculations (called when data changes)
 */
function updateCalculation() {
    calculateCGPA();
    calculateCumulativeGPA();
}

/**
 * Reset the calculator
 */
function resetCalculator() {
    if (subjects.length === 0 && 
        (parseFloat(document.getElementById('previousCGPA').value) || 0) === 0 &&
        (parseFloat(document.getElementById('previousCredits').value) || 0) === 0) {
        alert('No data to reset!');
        return;
    }

    if (confirm('Are you sure you want to reset all subjects and previous semester data? This action cannot be undone.')) {
        subjects = [];
        document.getElementById('previousCGPA').value = '0';
        document.getElementById('previousCredits').value = '0';
        renderSubjects();
    }
}

/**
 * Download the CGPA report as a text file
 */
function downloadReport() {
    if (subjects.length === 0) {
        alert('Please add at least one subject to download a report.');
        return;
    }

    const semesterGPA = document.getElementById('semesterGPA').textContent;
    const cumulativeGPA = document.getElementById('cumulativeGPA').textContent;
    const totalCredits = document.getElementById('totalCredits').textContent;
    const totalWeightedGrade = document.getElementById('totalWeightedGrade').textContent;
    const previousCGPA = document.getElementById('displayPreviousCGPA').textContent;
    const previousCredits = document.getElementById('displayPreviousCredits').textContent;
    const totalAllCredits = document.getElementById('totalAllCredits').textContent;

    // Generate report content
    let reportContent = `CGPA CALCULATOR REPORT
========================
Generated: ${new Date().toLocaleString()}

CUMULATIVE SUMMARY
------------------
Previous CGPA: ${previousCGPA}
Previous Credits: ${previousCredits}
Semester GPA: ${semesterGPA}
Current Semester Credits: ${totalCredits}
---
Cumulative GPA: ${cumulativeGPA}
Total Credits: ${totalAllCredits}

CURRENT SEMESTER BREAKDOWN
--------------------------
Total Credits: ${totalCredits}
Total Weighted Grade Points: ${totalWeightedGrade}
`;

    subjects.forEach((subject, index) => {
        reportContent += `\n${index + 1}. ${subject.name || 'Unnamed Subject'}
   Credits: ${subject.credits}
   Grade: ${subject.grade} (${gradePoints[subject.grade]} points)
   Weighted Points: ${(subject.credits * gradePoints[subject.grade]).toFixed(2)}
`;
    });

    reportContent += `\n\nGRADE SCALE REFERENCE
---------------------
O  = 10 Points (Outstanding)
A+ = 9 Points
A  = 8 Points
B+ = 7 Points
B  = 6 Points
C  = 5 Points
U  = 0 Points (Fail)

GPA INTERPRETATION
------------------
Excellent: 9.0 - 10.0
Good:      7.0 - 8.9
Average:   5.0 - 6.9
Below Avg: 0.0 - 4.9

FORMULA
-------
Semester GPA = Sum of (Grade Points × Credits) / Sum of Credits
Cumulative GPA = [Previous CGPA × Previous Credits + Semester GPA × Current Credits] / Total Credits
`;

    // Create and download file
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(reportContent));
    element.setAttribute('download', `CGPA_Report_${new Date().getTime()}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

/**
 * Initialize the calculator with one empty subject
 */
document.addEventListener('DOMContentLoaded', function() {
    addSubject();
});

/**
 * Keyboard shortcut support
 */
document.addEventListener('keydown', function(event) {
    // Ctrl+N or Cmd+N to add new subject
    if ((event.ctrlKey || event.metaKey) && event.key === 'n') {
        event.preventDefault();
        addSubject();
    }
    // Ctrl+R or Cmd+R to reset (prevented by browser)
    // Ctrl+S or Cmd+S to download report
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
        downloadReport();
    }
});
