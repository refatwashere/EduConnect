```markdown
---

# SMIS - WEB PORTAL Project Document

**Project Name:** SMIS - WEB PORTAL
**Owners:** Robiul Islam Refat
**Timing:**
* **Commencement Date:** April 30, 2025
* **Anticipated Completion Date:** June 6, 2025
* **Current Status:** In Progress

---

## Table of Contents

1.  Project Overview
2.  Project Details
3.  SMIS - WEB PORTAL Technical Implementation (React Frontend & Node.js/PostgreSQL Backend)
4.  SMIS - WEB PORTAL Android Application Implementation
5.  Project Tracking
6.  Project Resources
7.  Project FAQs
8.  Alternative Backend Implementation (Supabase)

---

## 1. Project Overview

This section provides an exhaustive summation of the project's principal objective, its foundational contextualization, the identified problem statement, the delineated strategic goals, and the proposed implementation strategy for the "SMIS - WEB PORTAL" web application. The project is titled "SMIS - WEB PORTAL" and is part of "Refat's Educare".

### Main Purpose

The primary objective of the "SMIS - WEB PORTAL" is to facilitate teachers at St. Mary's International School in effectively organizing and disseminating instructional materials and providing individualized student progress updates. This initiative aims to empower teaching professionals through a robust digital ecosystem for centralizing administrative and communicative functions, enhancing pedagogical effectiveness and fostering a cohesive educational community. The portal's design endeavors to optimize the flow of critical information, ensuring processes are underpinned by a streamlined, accessible, and comprehensive digital infrastructure.

### Background and Problem Statement

Teaching professionals frequently face challenges in administering and distributing pedagogical resources using conventional methods like physical handouts, email, or disparate digital platforms, leading to organizational fragmentation, communication gaps, and increased administrative responsibilities. Managing multiple versions of documents, tasks, and materials across various channels can cause student disorientation and inconsistent access to data. The absence of a unified repository necessitates manual tracking, redundant data entry, and lacks version control, complicating routine operations.

Furthermore, providing timely personalized feedback and progress evaluations to students and guardians is often arduous, resulting in inconsistent information transmission. Manual or semi-digital approaches for recording performance, attendance, and behavioral observations are time-consuming and lack real-time functionality, potentially leading to delayed interventions and hindering parental engagement. These inefficiencies diminish educators' capacity to focus on core teaching activities and impede holistic student development. The project endeavors to ameliorate these issues by centralizing functions using contemporary web technologies for a more integrated system.

### Goals

The paramount objectives for the "SMIS - WEB PORTAL" are designed to revolutionize information management and communication protocols:

* **Centralized Material Management:** Provide teachers with a single platform for uploading, categorizing, and managing course materials, including text, tasks, URLs, and multimedia content. This eliminates the need for multiple services, ensures universal accessibility, and facilitates version control, enhancing consistency and quality of disseminated content.
* **Streamlined Student Updates:** Enable educators to efficiently record and transmit individualized progress evaluations, achievements, and areas needing improvement to students and guardians. This shifts from infrequent updates to a consistent, trackable system for proactive interventions, allowing documentation of performance, feedback, and communications to build a comprehensive digital student portfolio.
* **Enhanced Communication Efficacy:** Cultivate more robust and consistent communication among educators, students, and parents through readily accessible information. The platform serves as the primary channel for announcements, reminders, and specific feedback, consolidating communications and reducing misinterpretation, improving response times, and fostering a collaborative environment.
* **Reduced Administrative Burden:** Automate tasks related to content distribution and performance reporting to conserve teachers' time. Minimizing manual processes allows teachers to reallocate time to pedagogical pursuits, curriculum development, instruction, and professional advancement, augmenting productivity and job satisfaction.
* **Fiscal Prudence in Solution Development:** Engineer and deploy the web application using exclusively free hosting services and technological frameworks, precluding financial impediments or credit card requirements for the school. This commitment ensures a high-value solution without ongoing operational costs, establishing sustainability and accessibility by nullifying financial barriers.

### Proposed Solution (Technology Stack & Hosting)

The "SMIS - WEB PORTAL" will be actualized as a contemporary web application leveraging a robust and adaptable technology stack designed for complimentary deployment and sustainability. This integrated, full-stack approach ensures an enriched user experience and a powerful data management backbone.

* **Frontend Component:** Developed using **React**, a component-based JavaScript library. React's virtual DOM contributes to accelerated update cycles and a fluid user experience. Its component architecture fosters modularity and code reusability, simplifying enhancements and maintenance. Design prioritizes intuitive navigation and accessibility for educators. It facilitates a mobile-responsive interface.
* **Backend Component:** Provided by **Node.js** in conjunction with the **Express.js** framework, furnishing a scalable and efficient API layer. Node.js's asynchronous architecture is suited for processing concurrent requests. Express.js enables expedited development of RESTful APIs for secure user authentication, data persistence, and managing courses, materials, students, and updates. This infrastructure guarantees data integrity, security, and efficient frontend-backend communication.
* **Database System:** **PostgreSQL**, an advanced, open-source object-relational database system, will be used for persistent data storage. It is acclaimed for reliability, feature richness, and high performance, adhering to SQL standards and supporting complex queries with ACID compliance. This makes it optimal for managing structured data like student info, class configs, material metadata, and updates. Its compatibility with complimentary hosting ensures a powerful yet economical data management foundation.
* **Hosting Paradigm (Complimentary & Credit Card-Exempt):** A dual-platform free hosting strategy is adopted.
    * The React frontend will be hosted on **Vercel's free tier**. Vercel offers static site deployment with a global CDN for rapid load times. Its GitHub integration expedites continuous deployment. The free tier is tailored for hobbyist/small-scale projects without mandating credit card info.
    * The Node.js/Express backend and PostgreSQL database will be hosted on **Render's free tier**. Render is a PaaS supporting Node.js applications and managed PostgreSQL instances. While free tiers may have "cold starts," this is deemed acceptable for an internal school portal. Render's commitment to free services without requiring credit card details aligns with financial constraints.

This architectural framework ensures a comprehensive, secure (via token-based authentication), and entirely cost-free web portal.

---

## 2. Project Details

This section outlines the boundaries, approach, target audience, measurement strategy, and key milestones for the project.

### Scope

This section outlines the boundaries of what is and is not included in the project.

* **IN SCOPE:** List the elements that are in scope. Emphasize clarity and alignment.
* **OUT OF SCOPE:** Detail what is out of scope for this project.

### Strategy

This outlines the plan to approach the objectives, breaking it down into manageable steps or phases.

* What methodologies, frameworks, or tools will be used?
* How does this approach align with the overall project vision?

### Target Audience

This describes the audience of the project, considering demographics, behaviors, and preferences.

* Who are the primary stakeholders or end-users of the project?
* What are their specific needs, challenges, or expectations?
* How will the project resonate with this audience?

### Measurement

This establishes how to measure success or progress, considering objectives and key results.

* Which tools will be used to measure progress?
* How frequently will progress be assessed and who will be responsible for this evaluation?

### Milestones

Project milestones with dates and expected outcomes should be listed.

| Milestone 1 |  | Add description |
| :---------- | :- | :-------------- | :---
| Milestone 2 |  | Add description |
| Milestone 3 |  | Add description |

---

## 3. SMIS - WEB PORTAL Technical Implementation (React Frontend & Node.js/PostgreSQL Backend)

This document outlines the project structure and provides the code for both the frontend (React) and backend (Node.js/Express with PostgreSQL) components of the SMIS - WEB PORTAL, based on the provided source materials.

### Frontend (React App)

The frontend is a single-page application built with **React**. It uses `useState` and `useEffect` hooks for state management and side effects like data fetching. Navigation between screens (Login, Dashboard, Class Detail, Student Detail) is handled by changing a `currentView` state variable. Data interaction with the backend is done using the `fetch` API, including sending JWT tokens for authorization. Styling incorporates Tailwind CSS classes.

Based on the structure implied by the main `App` component managing different screen components and the standard React application layout, a likely project structure would be:

#### Inferred Project Tree

```
smis-web-portal-frontend/
├── public/
│   └── index.html # Standard HTML entry point for React app
├── src/
│   ├── App.js # Contains the main App component and all screen components (Login, Dashboard, ClassDetail, StudentDetail)
│   ├── index.js # React entry file, renders App component [Inferred standard CRA structure]
│   ├── index.css # Stylesheet (likely uses Tailwind CSS classes based on component code) [Inferred]
│   └── reportWebVitals.js # Standard Create React App file [Inferred standard CRA structure]
├── package.json # Project dependencies (React, react-dom, etc.) [Inferred standard CRA structure]
└── README.md # Project description [Inferred standard practice]
```
*Note: The exact file structure for components (e.g., separate files for each screen) is not explicitly detailed in the sources, but placing them within `App.js` is shown in source. The structure above represents a standard practice for organizing a React project.*

#### Full Frontend Code (src/App.js)

```javascript
import React, { useState, useEffect } from 'react'; //

// Assuming Tailwind CSS is set up and included in index.css or similar
// And other components like LoginScreen, DashboardScreen, etc. are defined below this in the same file as shown in source

// Main App component
const App = () => { //
// State to manage the current view (login, dashboard, class details, student details)
const [currentView, setCurrentView] = useState('login'); //
// State to store login status
const [isLoggedIn, setIsLoggedIn] = useState(false); //
// State to store current user details (for a simple login system)
const [currentUser, setCurrentUser] = useState(null); //
// State to hold list of classes
const [classes, setClasses] = useState([]); //
// State to hold selected class for detailed view
const [selectedClass, setSelectedClass] = useState(null); //
// State to hold selected student for detailed view
const [selectedStudent, setSelectedStudent] = useState(null); //
// State for general messages/errors
const [message, setMessage] = useState(''); //

// Define the backend API URL.
// IMPORTANT: REPLACE THIS 'http://localhost:3001' WITH YOUR ACTUAL DEPLOYED RENDER BACKEND URL!
// For example: const API_BASE_URL = '[https://your-smis-backend.onrender.com](https://your-smis-backend.onrender.com)';
// If running locally, ensure your Node.js backend is running on port 3001.
const API_BASE_URL = 'http://localhost:3001'; // Default for local development and initial placeholder

useEffect(() => { //
// Log the API base URL to help with debugging connection issues
console.log(`Frontend configured to use API_BASE_URL: ${API_BASE_URL}`); //
}, [API_BASE_URL]); //

// --- Authentication Logic ---
const handleLogin = async (username, password) => { //
try { //
setMessage(''); // Clear previous messages
const response = await fetch(`${API_BASE_URL}/api/login`, { //
method: 'POST', //
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ username, password }),
});

const data = await response.json();

if (response.ok) {
setIsLoggedIn(true);
setCurrentUser({ username: data.username, token: data.token }); // Store user and token
setCurrentView('dashboard');
setMessage('Login successful!');
fetchClasses(); // Fetch classes upon successful login
} else {
setMessage(data.message || 'Login failed.');
}
} catch (error) {
console.error('Login error:', error);
// Provide a more helpful message for network errors
setMessage('An error occurred during login. Please ensure the backend server is running and the API_BASE_URL is correctly configured. Error: ' + error.message);
}
};

const handleLogout = () => { //
setIsLoggedIn(false);
setCurrentUser(null);
setCurrentView('login');
setClasses([]);
setSelectedClass(null);
setSelectedStudent(null);
setMessage('Logged out successfully.');
};

// --- Data Fetching Functions ---

// Fetch all classes for the logged-in teacher
const fetchClasses = async () => { //
if (!isLoggedIn || !currentUser?.token) return; //
try { //
const response = await fetch(`${API_BASE_URL}/api/classes`, { //
headers: { //
'Authorization': `Bearer ${currentUser.token}`, // Send token for authorization
}, //
}); //
const data = await response.json(); //
if (response.ok) { //
setClasses(data); //
} else { //
setMessage(data.message || 'Failed to fetch classes.'); //
} //
} catch (error) { //
console.error('Error fetching classes:', error); //
setMessage('Error fetching classes. Please check your network connection and backend status.'); //
} //
}; //

// Fetch materials for a specific class
const fetchClassMaterials = async (classId) => { //
if (!isLoggedIn || !currentUser?.token) return []; //
try { //
const response = await fetch(`${API_BASE_URL}/api/classes/${classId}/materials`, { //
headers: { 'Authorization': `Bearer ${currentUser.token}` }, //
}); //
const data = await response.json(); //
if (response.ok) { //
return data; //
} else { //
setMessage(data.message || 'Failed to fetch class materials.'); //
return []; //
} //
} catch (error) { //
console.error('Error fetching class materials:', error); //
setMessage('Error fetching class materials. Please check your network connection and backend status.'); //
return []; //
} //
}; //

// Fetch students for a specific class
const fetchClassStudents = async (classId) => { //
if (!isLoggedIn || !currentUser?.token) return []; //
try { //
const response = await fetch(`${API_BASE_URL}/api/classes/${classId}/students`, { //
headers: { 'Authorization': `Bearer ${currentUser.token}` }, //
}); //
const data = await response.json(); //
if (response.ok) { //
return data; //
} else { //
setMessage(data.message || 'Failed to fetch class students.'); //
return []; //
} //
} catch (error) //
{ //
console.error('Error fetching class students:', error); //
setMessage('Error fetching class students. Please check your network connection and backend status.'); //
return []; //
} //
}; //

// Fetch updates for a specific student
const fetchStudentUpdates = async (studentId) => { //
if (!isLoggedIn || !currentUser?.token) return []; //
try { //
const response = await fetch(`${API_BASE_URL}/api/students/${studentId}/updates`, { //
headers: { 'Authorization': `Bearer ${currentUser.token}` }, //
}); //
const data = await response.json(); //
if (response.ok) { //
return data; //
} else { //
setMessage(data.message || 'Failed to fetch student updates.'); //
return []; //
} //
} catch (error) { //
console.error('Error fetching student updates:', error); //
setMessage('Error fetching student updates. Please check your network connection and backend status.'); //
return []; //
} //
}; //

// --- Navigation Handlers ---
const goToDashboard = () => { //
setSelectedClass(null); //
setSelectedStudent(null); //
setCurrentView('dashboard'); //
fetchClasses(); // Refresh classes when going back to dashboard
}; //

const goToClassDetail = async (classItem) => { //
const materials = await fetchClassMaterials(classItem.id); //
const students = await fetchClassStudents(classItem.id); //
setSelectedClass({ ...classItem, materials, students }); //
setCurrentView('classDetail'); //
}; //

const goToStudentDetail = async (studentItem) => { //
const updates = await fetchStudentUpdates(studentItem.id); //
setSelectedStudent({ ...studentItem, updates }); //
setCurrentView('studentDetail'); //
}; //

// --- Render Logic based on currentView ---
const renderContent = () => { //
switch (currentView) { //
case 'login': //
return <LoginScreen onLogin={ handleLogin } message={ message } />;; //
case 'dashboard': //
return ( //
<DashboardScreen //
classes={ classes } //
onSelectClass={ goToClassDetail } //
onAddClass={ fetchClasses } // Refresh classes after adding
currentUser={ currentUser } //
API_BASE_URL={ API_BASE_URL } //
token={ currentUser?.token } //
setMessage={ setMessage } //
/> //
);; //
case 'classDetail': //
return ( //
<ClassDetailScreen //
selectedClass={ selectedClass } //
onBack={ goToDashboard } //
onSelectStudent={ goToStudentDetail } //
onAddMaterial={ async() => { //
const materials = await fetchClassMaterials(selectedClass.id); //
setSelectedClass(prev => ({ ...prev, materials })); //
setMessage('Material added!'); //
}} //
onAddStudent={ async() => { //
const students = await fetchClassStudents(selectedClass.id); //
setSelectedClass(prev => ({ ...prev, students })); //
setMessage('Student added!'); //
}} //
currentUser={ currentUser } //
API_BASE_URL={ API_BASE_URL } //
token={ currentUser?.token } //
setMessage={ setMessage } //
/> //
);; //
case 'studentDetail': //
return ( //
<StudentDetailScreen //
selectedStudent={ selectedStudent } //
onBack={ () => goToClassDetail(selectedClass) } //
onAddUpdate={ async() => { //
const updates = await fetchStudentUpdates(selectedStudent.id); //
setSelectedStudent(prev => ({ ...prev, updates })); //
setMessage('Update added!'); //
}} //
currentUser={ currentUser } //
API_BASE_URL={ API_BASE_URL } //
token={ currentUser?.token } //
setMessage={ setMessage } //
/> //
);; //
default: //
return <LoginScreen onLogin={ handleLogin } message={ message } />;; //
} //
}; //

return ( //
<div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4">; //
<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">; //
<header className="bg-blue-600 text-white p-6 rounded-t-xl flex justify-between items-center">; //
<h1 className="text-3xl font-bold font-inter">SMIS - WEB PORTAL</h1>; //
{ isLoggedIn && ( //
<div className="flex items-center space-x-4">; //
<span className="text-lg">Welcome, { currentUser?.username }!</span>; //
<button //
onClick={ handleLogout } //
className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-50 transition duration-300 font-semibold">; //
Logout; //
</button>;; //
</div>; //
)} //
</header>;; //

<main className="p-6">; //
{ message && ( //
<div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-lg mb-4" role="alert">; //
{ message };; //
</div>; //
)} //
{ renderContent() };; //
</main>;; //
</div>; //
</div>; //
);; //
};; //

// --- Login Screen Component ---
const LoginScreen = ({ onLogin, message }) => { //
const [username, setUsername] = useState('teacher'); // Default for demo
const [password, setPassword] = useState('password'); // Default for demo

const handleSubmit = (e) => { //
e.preventDefault(); //
onLogin(username, password); //
}; //

return ( //
<div className="flex flex-col items-center justify-center py-10">; //
<h2 className="text-3xl font-semibold text-gray-800 mb-6 font-inter">Teacher Login</h2>; //
<form onSubmit={ handleSubmit } className="w-full max-w-sm bg-gray-50 p-8 rounded-lg shadow-md">; //
<div className="mb-4">; //
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">; //
Username; //
</label>;; //
<input //
className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"; //
id="username"; //
type="text"; //
placeholder="teacher"; //
value={ username };; //
onChange={ (e) => setUsername(e.target.value) };; //
required; //
/>; //
</div>; //
<div className="mb-6">; //
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">; //
Password; //
</label>;; //
<input //
className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"; //
id="password"; //
type="password"; //
placeholder="password"; //
value={ password };; //
onChange={ (e) => setPassword(e.target.value) };; //
required; //
/>; //
</div>; //
<div className="flex items-center justify-between">; //
<button //
className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 w-full"; //
type="submit"; //
>; //
Sign In; //
</button>;; //
</div>; //
</form>;; //
</div>; //
);; //
};; //

// --- Dashboard Screen Component ---
const DashboardScreen = ({ classes, onSelectClass, onAddClass, currentUser, API_BASE_URL, token, setMessage }) => { //
const [newClassName, setNewClassName] = useState(''); //
const [newClassDescription, setNewClassDescription] = useState(''); //

const handleAddClass = async (e) => { //
e.preventDefault(); //
if (!newClassName.trim()) { //
setMessage('Class name cannot be empty.'); //
return; //
} //
try { //
setMessage(''); //
const response = await fetch(`${API_BASE_URL}/api/classes`, { //
method: 'POST', //
headers: { //
'Content-Type': 'application/json', //
'Authorization': `Bearer ${token}`, //
}, //
body: JSON.stringify({ name: newClassName, description: newClassDescription, teacher_id: currentUser.username }), // Note: teacher_id sent as username string here, but backend expects ID integer
}); //
const data = await response.json(); //
if (response.ok) { //
setMessage('Class added successfully!'); //
setNewClassName(''); //
setNewClassDescription(''); //
onAddClass(); // Callback to refresh classes in parent
} else { //
setMessage(data.message || 'Failed to add class.'); //
} //
} catch (error) { //
console.error('Error adding class:', error); //
setMessage('Error adding class. Please check your network connection and backend status.'); //
} //
}; //

return ( //
<div className="py-4">; //
<h2 className="text-2xl font-semibold text-gray-800 mb-6 font-inter">Your Classes</h2>; //

{/* Add New Class Form */} //
<form onSubmit={ handleAddClass } className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">; //
<h3 className="text-xl font-semibold text-gray-800 mb-4 font-inter">Add New Class</h3>; //
<div className="mb-4">; //
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="className">; //
Class Name; //
</label>;; //
<input //
className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"; //
id="className"; //
type="text"; //
placeholder="e.g., Grade 10 English"; //
value={ newClassName };; //
onChange={ (e) => setNewClassName(e.target.value) };; //
required; //
/>; //
</div>; //
<div className="mb-6">; //
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classDescription">; //
Description (Optional); //
</label>;; //
<textarea //
className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"; //
id="classDescription"; //
placeholder="Brief description of the class"; //
rows="3"; //
value={ newClassDescription };; //
onChange={ (e) => setNewClassDescription(e.target.value) };; //
>;; //
</textarea>; //
</div>; //
<button //
className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"; //
type="submit"; //
>; //
Add Class; //
</button>;; //
</form>;; //

{/* Classes List */} //
{ classes.length === 0 ? ( //
<p className="text-gray-600 text-lg">No classes found. Add your first class above!</p>; //
) : ( //
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">; //
{ classes.map((cls) => ( //
<div //
key={ cls.id } //
className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300 cursor-pointer flex flex-col justify-between"; //
onClick={ () => onSelectClass(cls) } //
>; //
<div>; //
<h3 className="text-xl font-semibold text-blue-700 mb-2 font-inter">{ cls.name }</h3>; //
<p className="text-gray-600 text-sm">{ cls.description || 'No description provided.' }</p>; //
</div>; //
<button //
className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md self-end transition duration-300"; //
>; //
View Details; //
</button>;; //
</div>; //
))};; //
</div>; //
)} //
</div>; //
);; //
};; //

// --- Class Detail Screen Component ---
const ClassDetailScreen = ({ selectedClass, onBack, onSelectStudent, onAddMaterial, onAddStudent, currentUser, API_BASE_URL, token, setMessage }) => { //
const [newMaterialTitle, setNewMaterialTitle] = useState(''); //
const [newMaterialContent, setNewMaterialContent] = useState(''); //
const [newStudentName, setNewStudentName] = useState(''); //

const handleAddMaterial = async (e) => { //
e.preventDefault(); //
if (!newMaterialTitle.trim() || !newMaterialContent.trim()) { //
setMessage('Material title and content cannot be empty.'); //
return; //
} //
try { //
setMessage(''); //
const response = await //
fetch(`${API_BASE_URL}/api/classes/${selectedClass.id}/materials`, { //
method: 'POST', //
headers: { //
'Content-Type': 'application/json', //
'Authorization': `Bearer ${token}`, //
}, //
body: JSON.stringify({ title: newMaterialTitle, content: newMaterialContent, class_id: selectedClass.id }), //
}); //
const data = await response.json(); //
if (response.ok) { //
setMessage('Material added successfully!'); //
setNewMaterialTitle(''); //
setNewMaterialContent(''); //
onAddMaterial(); // Callback to refresh materials
} else { //
setMessage(data.message || 'Failed to add material.'); //
} //
} catch (error) { //
console.error('Error adding material:', error); //
setMessage('Error adding material. Please check your network connection and backend status.'); //
} //
}; //

const handleAddStudent = async (e) => { //
e.preventDefault(); //
if (!newStudentName.trim()) { //
setMessage('Student name cannot be empty.'); //
return; //
} //
try { //
setMessage(''); //
const response = await //
fetch(`${API_BASE_URL}/api/classes/${selectedClass.id}/students`, { //
method: 'POST', //
headers: { //
'Content-Type': 'application/json', //
'Authorization': `Bearer ${token}`, //
}, //
body: JSON.stringify({ name: newStudentName, class_id: selectedClass.id }), //
}); //
const data = await response.json(); //
if (response.ok) { //
setMessage('Student added successfully!'); //
setNewStudentName(''); //
onAddStudent(); // Callback to refresh students
} else { //
setMessage(data.message || 'Failed to add student.'); //
} //
} catch (error) { //
console.error('Error adding student:', error); //
setMessage('Error adding student. Please check your network connection and backend status.'); //
} //
};; //

return ( //
<div className="py-4">; //
<button //
onClick={ onBack } //
className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mb-6 shadow-md transition duration-300"; //
>; //
← Back to Dashboard; //
</button>;; //
<h2 className="text-2xl font-semibold text-gray-800 mb-6 font-inter">Class: { selectedClass.name }</h2>; //
<p className="text-gray-600 mb-8">{ selectedClass.description }</p>;; //

{/* Add New Material Form */} //
<form onSubmit={ handleAddMaterial } className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">; //
<h3 className="text-xl font-semibold text-gray-800 mb-4 font-inter">Add New Material</h3>; //
<div className="mb-4">; //
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="materialTitle">; //
Material Title; //
</label>;; //
<input //
className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"; //
id="materialTitle"; //
type="text"; //
placeholder="e.g., Chapter 1 Notes"; //
value={ newMaterialTitle };; //
onChange={ (e) => setNewMaterialTitle(e.target.value) };; //
required; //
/>; //
</div>; //
<div className="mb-6">; //
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="materialContent">; //
Content (Text or URL); //
</label>;; //
<textarea //
className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"; //
id="materialContent"; //
placeholder="Enter material content or a link"; //
rows="4"; //
value={ newMaterialContent };; //
onChange={ (e) => setNewMaterialContent(e.target.value) };; //
required; //
>;; //
</textarea>; //
</div>; //
<button //
className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"; //
type="submit"; //
>; //
Add Material; //
</button>;; //
</form>;; //

{/* Class Materials List */} //
<h3 className="text-xl font-semibold text-gray-800 mb-4 font-inter">Class Materials</h3>; //
{ selectedClass.materials.length === 0 ? ( //
<p className="text-gray-600 mb-8">No materials added yet for this class.</p>; //
) : ( //
<div className="space-y-4 mb-8">; //
{ selectedClass.materials.map((material) => ( //
<div key={ material.id } className="bg-white p-4 rounded-lg shadow border border-gray-100">; //
<h4 className="text-lg font-semibold text-blue-600">{ material.title }</h4>; //
<p className="text-gray-700 text-sm mt-1">{ material.content }</p>;; //
</div>; //
))};; //
</div>; //
)} //

{/* Add New Student Form */} //
<form onSubmit={ handleAddStudent } className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">; //
<h3 className="text-xl font-semibold text-gray-800 mb-4 font-inter">Add New Student</h3>; //
<div className="mb-4">; //
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentName">; //
Student Name; //
</label>;; //
<input //
className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"; //
id="studentName"; //
type="text"; //
placeholder="e.g., John Doe"; //
value={ newStudentName };; //
onChange={ (e) => setNewStudentName(e.target.value) };; //
required; //
/>; //
</div>; //
<button //
className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"; //
type="submit"; //
>; //
Add Student; //
</button>;; //
</form>;; //

{/* Students List */} //
<h3 className="text-xl font-semibold text-gray-800 mb-4 font-inter">Students in { selectedClass.name }</h3>; //
{ selectedClass.students.length === 0 ? ( //
<p className="text-gray-600">No students added yet to this class.</p>; //
) : ( //
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">; //
{ selectedClass.students.map((student) => ( //
<div //
key={ student.id } //
className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300 cursor-pointer flex justify-between items-center"; //
onClick={ () => onSelectStudent(student) } //
>; //
<span className="text-lg font-medium text-blue-700">{ student.name }</span>; //
<button //
className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-lg shadow-md text-sm transition duration-300"; //
>; //
View Updates; //
</button>;; //
</div>; //
))};; //
</div>; //
)} //
</div>; //
);; //
};; //

// --- Student Detail Screen Component ---
const StudentDetailScreen = ({ selectedStudent, onBack, onAddUpdate, currentUser, API_BASE_URL, token, setMessage }) => { //
const [newUpdateContent, setNewUpdateContent] = useState(''); //

const handleAddUpdate = async (e) => { //
e.preventDefault(); //
if (!newUpdateContent.trim()) { //
setMessage('Update content cannot be empty.'); //
return; //
} //
try { //
setMessage(''); //
const response = await //
fetch(`${API_BASE_URL}/api/students/${selectedStudent.id}/updates`, { //
method: 'POST', //
headers: { //
'Content-Type': 'application/json', //
'Authorization': `Bearer ${token}`, //
}, //
body: JSON.stringify({ content: newUpdateContent, student_id: selectedStudent.id }), //
}); //
const data = await response.json(); //
if (response.ok) { //
setMessage('Update added successfully!'); //
setNewUpdateContent(''); //
onAddUpdate(); // Callback to refresh updates
} else { //
setMessage(data.message || 'Failed to add update.'); //
} //
} catch (error) { //
console.error('Error adding update:', error); //
setMessage('Error adding update. Please check your network connection and backend status.'); //
} //
};; //

return ( //
<div className="py-4">; //
<button //
onClick={ onBack } //
className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mb-6 shadow-md transition duration-300"; //
>; //
← Back to Class; //
</button>;; //
<h2 className="text-2xl font-semibold text-gray-800 mb-6 font-inter">Student: { selectedStudent.name }</h2>; //
<p className="text-gray-600 mb-8">Updates for { selectedStudent.name }.</p>;; //

{/* Add New Update Form */} //
<form onSubmit={ handleAddUpdate } className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">; //
<h3 className="text-xl font-semibold text-gray-800 mb-4 font-inter">Add New Update</h3>; //
<div className="mb-6">; //
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="updateContent">; //
Update Content; //
</label>;; //
<textarea //
className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"; //
id="updateContent"; //
placeholder="e.g., Scored excellent in the last test, Needs practice in algebra."; //
rows="4"; //
value={ newUpdateContent };; //
onChange={ (e) => setNewUpdateContent(e.target.value) };; //
required; //
>;; //
</textarea>; //
</div>; //
<button //
className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"; //
type="submit"; //
>; //
Add Update; //
</button>;; //
</form>;; //

{/* Student Updates List */} //
<h3 className="text-xl font-semibold text-gray-800 mb-4 font-inter">Past Updates</h3>; //
{ selectedStudent.updates.length === 0 ? ( //
<p className="text-gray-600">No updates yet for this student.</p>; //
) : ( //
<div className="space-y-4">; //
{ selectedStudent.updates.map((update) => ( //
<div key={ update.id } className="bg-white p-4 rounded-lg shadow border border-gray-100">; //
<p className="text-gray-800">{ update.content }</p>;; //
<p className="text-gray-500 text-xs mt-2">; //
{/* Format date for display */} //
{ new Date(update.created_at).toLocaleDateString() } at { new Date(update.created_at).toLocaleTimeString() };; //
</p>;; //
</div>; //
))};; //
</div>; //
)} //
</div>; //
);; //
};; //

export default App; //
```

### Backend (Node.js / Express App with PostgreSQL)

The backend is built with **Node.js** and the **Express.js** framework, using a **PostgreSQL** database for data persistence. It handles API requests from the frontend, including authentication using JWT. It uses middleware like `cors` and `express.json` and interacts with the database via the `pg` library. The database schema setup function creates necessary tables and a default teacher user.

Based on the provided code, the backend exists primarily within a single `server.js` file:

#### Inferred Project Tree

```
smis-web-portal-backend/
├── server.js # Contains all backend code (Express app, routes, db interaction)
├── .env # Environment variables (DATABASE_URL, JWT_SECRET)
├── package.json # Project dependencies and scripts [Inferred from tech stack]
└── README.md # Project description and setup instructions [Inferred standard practice]
```
*Note: Although source shows a more structured directory for a backend, that structure corresponds to a MongoDB implementation. The provided code and project description in other sources consistently use PostgreSQL, and the backend code for this is presented as a single `server.js` file. The structure above reflects the PostgreSQL implementation shown.*

#### Full Backend Code (server.js)

```javascript
// server.js - Node.js/Express Backend for SMIS - WEB PORTAL

const express = require('express'); //
const { Pool } = require('pg'); // PostgreSQL client
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken'); // For token-based authentication
const cors = require('cors'); // For handling Cross-Origin Resource Sharing
require('dotenv').config(); // For loading environment variables from .env file

const app = express(); //
const PORT = process.env.PORT || 3001; //

// --- Middleware ---
app.use(cors()); // Enable CORS for all routes, allowing frontend to connect
app.use(express.json()); // Enable parsing of JSON request bodies

// --- Database Configuration ---
// Render will provide DATABASE_URL environment variable.
// For local development, you might need to set it in a .env file or manually.
const pool = new Pool({ //
connectionString: process.env.DATABASE_URL, //
ssl: { //
rejectUnauthorized: false // Required for Render's PostgreSQL connection
} //
}); //

// Test database connection
pool.connect((err, client, release) => { //
if (err) { //
return console.error('Error acquiring client', err.stack); //
} //
console.log('Successfully connected to PostgreSQL database!'); //
release(); //
}); //

// --- JWT Secret ---
// Generate a strong secret for production:
// `require('crypto').randomBytes(64).toString('hex')`
const JWT_SECRET = process.env.JWT_SECRET || //
'supersecretjwtkeythatshouldbeverylongandrandominproduction'; //

// --- Database Schema Setup (Run once on deployment) ---
// This function will create tables if they don't exist.
async function setupDatabase() { //
try { //
// Create teachers table
await pool.query(` //
CREATE TABLE IF NOT EXISTS teachers ( //
id SERIAL PRIMARY KEY, //
username VARCHAR(255) UNIQUE NOT NULL, //
password_hash VARCHAR(255) NOT NULL //
); //
`); //
console.log('Table "teachers" ensured.'); //
// Create initial teacher if not exists
const result = await pool.query('SELECT * FROM teachers WHERE username = $1', //
['teacher']); //
if (result.rows.length === 0) { //
const hashedPassword = await bcrypt.hash('password', 10); // Hash default password
await pool.query( //
'INSERT INTO teachers (username, password_hash) VALUES ($1, $2)', //
['teacher', hashedPassword] //
); //
console.log('Default teacher "teacher" created.'); //
} //
// Create classes table
await pool.query(` //
CREATE TABLE IF NOT EXISTS classes ( //
id SERIAL PRIMARY KEY, //
name VARCHAR(255) NOT NULL, //
description TEXT, //
teacher_id INTEGER NOT NULL REFERENCES teachers(id), //
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP //
); //
`); //
console.log('Table "classes" ensured.'); //
// Create students table
await pool.query(` //
CREATE TABLE IF NOT EXISTS students ( //
id SERIAL PRIMARY KEY, //
name VARCHAR(255) NOT NULL, //
class_id INTEGER NOT NULL REFERENCES classes(id) ON DELETE CASCADE, //
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP //
); //
`); //
console.log('Table "students" ensured.'); //
// Create materials table
await pool.query(` //
CREATE TABLE IF NOT EXISTS materials ( //
id SERIAL PRIMARY KEY, //
title VARCHAR(255) NOT NULL, //
content TEXT NOT NULL, //
class_id INTEGER NOT NULL REFERENCES classes(id) ON DELETE CASCADE, //
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP //
); //
`); //
console.log('Table "materials" ensured.'); //
// Create student_updates table
await pool.query(` //
CREATE TABLE IF NOT EXISTS student_updates ( //
id SERIAL PRIMARY KEY, //
student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE, //
content TEXT NOT NULL, //
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP //
); //
`); //
console.log('Table "student_updates" ensured.'); //
} catch (error) { //
console.error('Error setting up database:', error); //
} //
} //

// Call setup function when the application starts
setupDatabase(); //

// --- Authentication Middleware ---
const authenticateToken = (req, res, next) => { //
const authHeader = req.headers['authorization']; //
const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

if (!token) { //
return res.sendStatus(401); // Unauthorized
} //

jwt.verify(token, JWT_SECRET, (err, user) => { //
if (err) { //
return res.sendStatus(403); // Forbidden (invalid token)
} //
req.user = user; // Attach user payload to request
next(); //
}); //
}; //

// --- API Routes ---

// Login Route
app.post('/api/login', async (req, res) => { //
const { username, password } = req.body; //
try { //
const result = await pool.query('SELECT * FROM teachers WHERE username = $1', [username]); //
const teacher = result.rows[0]; // Access the first row from the result
if (!teacher) { //
return res.status(400).json({ message: 'Invalid credentials' }); //
} //

const isPasswordValid = await bcrypt.compare(password, teacher.password_hash); //
if (!isPasswordValid) { //
return res.status(400).json({ message: 'Invalid credentials' }); //
} //

// Generate JWT token
const token = jwt.sign({ id: teacher.id, username: teacher.username }, JWT_SECRET, { expiresIn: '1h' }); //
res.json({ message: 'Login successful', username: teacher.username, token }); //

} catch (error) { //
console.error('Login error:', error); //
res.status(500).json({ message: 'Server error during login' }); //
} //
}); //

// Get all classes for the authenticated teacher
app.get('/api/classes', authenticateToken, async (req, res) => { //
try { //
// In a real multi-teacher app, filter classes by req.user.id
// For this simple demo, we'll return all classes or assume one teacher.
// If you only have one teacher account, all classes belong to them conceptually.
const result = await pool.query('SELECT id, name, description FROM classes ORDER BY created_at DESC'); //
res.json(result.rows); //
} catch (error) { //
console.error('Error fetching classes:', error); //
res.status(500).json({ message: 'Server error fetching classes' }); //
} //
}); //

// Add a new class
app.post('/api/classes', authenticateToken, async (req, res) => { //
const { name, description } = req.body; //
try { //
// In a real app, associate class with req.user.id
// For this demo, we'll use the ID of the default 'teacher' user
const teacherResult = await pool.query('SELECT id FROM teachers WHERE username = $1', ['teacher']); //
const teacherId = teacherResult.rows[0].id; // Access the first row and then id

const result = await pool.query( //
'INSERT INTO classes (name, description, teacher_id) VALUES ($1, $2, $3) RETURNING *', //
[name, description, teacherId] //
); //
res.status(201).json(result.rows[0]); // Return the inserted row
} catch (error) { //
console.error('Error adding class:', error); //
res.status(500).json({ message: 'Server error adding class' }); //
} //
}); //

// Get materials for a specific class
app.get('/api/classes/:classId/materials', authenticateToken, async (req, res) => { //
const { classId } = req.params; //
try { //
const result = await pool.query( //
'SELECT id, title, content, created_at FROM materials WHERE class_id = $1 ORDER BY created_at DESC', //
[classId] //
); //
res.json(result.rows); //
} catch (error) { //
console.error('Error fetching materials:', error); //
res.status(500).json({ message: 'Server error fetching materials' }); //
} //
}); //

// Add a new material to a class
app.post('/api/classes/:classId/materials', authenticateToken, async (req, res) => { //
const { classId } = req.params; //
const { title, content } = req.body; //
try { //
const result = await pool.query( //
'INSERT INTO materials (title, content, class_id) VALUES ($1, $2, $3) RETURNING *', //
[title, content, classId] //
); //
res.status(201).json(result.rows[0]); // Return the inserted row
} catch (error) { //
console.error('Error adding material:', error); //
res.status(500).json({ message: 'Server error adding material' }); //
} //
}); //

// Get students for a specific class
app.get('/api/classes/:classId/students', authenticateToken, async (req, res) => { //
const { classId } = req.params; //
try { //
const result = await pool.query( //
'SELECT id, name FROM students WHERE class_id = $1 ORDER BY name ASC', //
[classId] //
); //
res.json(result.rows); //
} catch (error) { //
console.error('Error fetching students:', error); //
res.status(500).json({ message: 'Server error fetching students' }); //
} //
}); //

// Add a new student to a class
app.post('/api/classes/:classId/students', authenticateToken, async (req, res) => { //
const { classId } = req.params; //
const { name } = req.body; //
try { //
const result = await pool.query( //
'INSERT INTO students (name, class_id) VALUES ($1, $2) RETURNING *', //
[name, classId] //
); //
res.status(201).json(result.rows[0]); // Return the inserted row
} catch (error) { //
console.error('Error adding student:', error); //
res.status(500).json({ message: 'Server error adding student' }); //
} //
}); //

// Get updates for a specific student
app.get('/api/students/:studentId/updates', authenticateToken, async (req, res) => { //
const { studentId } = req.params; //
try { //
const result = await pool.query( //
'SELECT id, content, created_at FROM student_updates WHERE student_id = $1 ORDER BY created_at DESC', //
[studentId] //
); //
res.json(result.rows); //
} catch (error) { //
console.error('Error fetching student updates:', error); //
res.status(500).json({ message: 'Server error fetching student updates' }); //
} //
}); //

// Add a new update for a student
app.post('/api/students/:studentId/updates', authenticateToken, async (req, res) => { //
const { studentId } = req.params; //
const { content } = req.body; //
try { //
const result = await pool.query( //
'INSERT INTO student_updates (student_id, content) VALUES ($1, $2) RETURNING *', //
[studentId, content] // Corrected order of parameters
); //
res.status(201).json(result.rows[0]); // Return the inserted row
} catch (error) { //
console.error('Error adding student update:', error); //
res.status(500).json({ message: 'Server error adding student update' }); //
} //
}); //

// --- Start the Server ---
app.listen(PORT, () => { //
console.log(`SMIS - WEB PORTAL Backend running on port ${PORT}`); //
console.log(`Access the backend at: http://localhost:${PORT}`); //
}); //
```

#### Environment Variables (.env)

*This `.env` file is constructed based on the environment variables used in `server.js`.*

```dotenv
DATABASE_URL=your_postgresql_connection_string # e.g., postgres://user:password@host:port/database
JWT_SECRET=supersecretjwtkeythatshouldbeverylongandrandominproduction # Replace with a strong, random secret in production
PORT=3001 # Optional: Specifies the port for the server to listen on
```

#### Package Dependencies (package.json)

*This `package.json` file is constructed based on the required packages (`dependencies`) imported and used in `server.js` and includes `nodemon` as a common `devDependency` for development based on standard Node.js practices.*

```json
{
  "name": "smis-web-portal-backend",
  "version": "1.0.0",
  "description": "Backend for SMIS Web Portal",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "pg": "^8.11.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
```

#### README.md

*This `README.md` is a basic example based on standard practice.*

```markdown
# SMIS - WEB PORTAL Backend

This is the Node.js/Express backend for the SMIS - WEB PORTAL application.

## Setup

1. **Clone the repository:**
```bash
git clone <repository_url>
cd smis-web-portal-backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create a `.env` file:**
Create a file named `.env` in the root directory and add your database connection string and JWT secret:
```dotenv
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_super_secret_key
PORT=3001
```

4. **Run the database setup function (if needed):** The `setupDatabase` function in `server.js` is designed to create tables and a default 'teacher' user if they don't exist when the server starts. Ensure your `DATABASE_URL` points to a valid PostgreSQL database.

5. **Run the server:**
* In development (with nodemon):
```bash
npm run dev
```
* In production:
```bash
npm start
```

The backend will start and listen on the specified PORT (defaulting to 3001).
```

---

## 4. SMIS - WEB PORTAL Android Application Implementation

This section provides a comprehensive guide for setting up, building, and deploying the "SMIS - WEB PORTAL" native Android application. The guide adheres to the principle of utilizing cost-free development tools and deployment methods, leveraging Kotlin with Jetpack Compose for the frontend and relying on the existing Node.js/Express backend.

### Overview

This document details the build and deployment guide for the SMIS - WEB PORTAL Android application.

### Prerequisites

Before commencing development, ensure the following software components are installed and configured:
* **Android Studio:** The official IDE for Android development, downloadable from the Android Developers website.
* **Java Development Kit (JDK):** Typically bundled with Android Studio, but manual installation might be needed.
* **Kotlin Plugin for Android Studio:** Usually pre-installed with modern Android Studio.
* **Node.js and npm:** Required for running the backend server, downloadable from nodejs.org.
* **PostgreSQL Database:** Your backend relies on PostgreSQL. Ensure access to a database instance (e.g., via Render free tier or local installation).
* **Git (Optional but Recommended):** For version control.

### Backend Setup and API_BASE_URL Configuration

The Android application communicates with the backend server. It is assumed the Node.js/Express backend is set up and deployed, preferably on Render's free tier.
* **Deploy Your Backend:** Ensure the backend is successfully deployed and obtain its public URL (e.g., https://your-smis-backend-name.onrender.com).
* **Update `API_BASE_URL` in Android App:** Open the `MainActivity.kt` file. Locate the line `const val API_BASE_URL = "http://localhost:3001"` and **replace "http://localhost:3001" with the actual public URL of your deployed backend**. This is critical for the app to fetch data from the backend.

### Creating a New Android Studio Project

* Launch Android Studio and select "New Project".
* Choose the "Empty Activity" template under "Phone and Tablet".
* Configure the project: Name (e.g., SMIS Web Portal), Package name (e.g., com.smis.webportal), Save location, Language (Kotlin), Minimum SDK (API 21 or higher), Build configuration language (Kotlin DSL or Groovy DSL).
* Click "Finish" and wait for the project to be created and Gradle files synchronized.

### Integrating the Provided Kotlin Code

The provided Kotlin code needs to be placed in the new Android project.
* **Locate `MainActivity.kt`:** Replace the entire content of `app/src/main/java/com/smis/webportal/MainActivity.kt` with the complete Kotlin code. Ensure the package declaration matches your project.
* **Create `ui.theme` Package:** Create a new package named `ui.theme` inside your base package.
* **Place `SMISWEBPORTALTheme` and Color Definitions:** Extract the `SMISWEBPORTALTheme` composable and color definitions (e.g., `val CoralRed = Color(0xFF6B6B)`) into appropriate files (`Theme.kt` and `Color.kt`) within the `ui.theme` package. Adjust imports as necessary.
* **Create Data Models (`User`, `Class`, `Material`, `Student`, `StudentUpdate`):** Create a new Kotlin file (e.g., `DataModels.kt`) in your base package and copy/paste all data class definitions into it.
* **Create API Service (`ApiService`):** Create `ApiService.kt` in your base package and copy/paste the `ApiService` class definition.
* **Create Room Database (`AppDao`, `AppDatabase`):** Create `Database.kt` (or separate files) in your base package and copy/paste the `AppDao` interface and `AppDatabase` abstract class definitions.
* **`AndroidManifest.xml` Configuration:** Open `app/src/main/AndroidManifest.xml` and **add the Internet permission (`<uses-permission android:name="android.permission.INTERNET" />`) just before the `<application>` tag**. Also, add `android:usesCleartextTraffic="true"` to the `<application>` tag for local HTTP testing, but **remove this for production HTTPS backends**.

### Adding Project Dependencies (build.gradle.kts or build.gradle)

Declare the necessary libraries in your module-level build file. Add dependencies for AndroidX Core, Lifecycle, Activity Compose, Compose UI, Material Design 3, Icons Extended, Kotlin Coroutines, ViewModel for Compose, OkHttp, and Room (runtime, compiler KSP/kapt, ktx). After adding dependencies, click "Sync Project with Gradle Files".

### Building and Running the Application

* Select a target device (AVD or physical device) in Android Studio.
* Click the "Run" button. Android Studio will build and deploy the app.
* **Verify Backend Connection:** Attempt to log in (default: teacher/password). Check app messages and Logcat for errors like "Login error: Failed to connect". Double-check your `API_BASE_URL` and backend status.

### Generating an APK for Distribution (Cost-Free Sideloading)

To share the app without the Google Play Store, generate a signed APK for sideloading.
* Go to Build > Generate Signed Bundle / APK....
* Select APK and click Next.
* **Create New Key Store:** If it's the first time, select "Create new...". Choose a secure location for the `.jks` file, create passwords for the key store and key alias, enter certificate details, and click Next. **Keep this file and passwords extremely secure for future updates**.
* **Configure Release Details:** Ensure the module is `app`, flavor is `release`, select both V1 and V2 Signature Versions, and click Finish.
* Android Studio will build the APK. Click the "Locate" link in the notification to find the `app-release.apk` file.

### Distributing the APK

Share the `app-release.apk` file directly via email, cloud storage, or a simple web server.
* **Sideloading Instructions for Users:** Users download the APK, open it via a file manager, and enable "Install unknown apps" from the source if prompted.

### Code Snippets

The `MainActivity.kt` file contains the core logic and UI components. Key parts include:
* **Constants and Theme Colors:** Defining colors and the `API_BASE_URL`.
* **Main Activity:** The entry point using Jetpack Compose.
* **App Navigation and State Management:** `Screen` sealed class for navigation states and `AppViewModel` using `MutableStateFlow`/`StateFlow` for managing UI state and data. Includes functions for navigation, showing messages, handling login/logout, and fetching/adding data.
* **AppViewModelFactory:** Factory for creating the ViewModel.
* **Data Models:** Kotlin data classes and Room Entities (`User`, `Class`, `Material`, `Student`, `StudentUpdate`) defining the structure of data fetched from the backend and stored locally.
* **API Service:** Conceptual class using OkHttp for making network requests to the backend API endpoints (login, fetch/add classes, materials, students, updates).
* **Room Database Setup:** `AppDao` interface defining database operations (insert, query) and `AppDatabase` abstract class setting up the Room database.
* **Composable UI Functions:** Jetpack Compose functions for building the user interface (`AppScreen`, `LoginScreen`, `DashboardScreen`, `ClassDetailScreen`, `StudentDetailScreen`, and dialogs/cards). These composables observe state from the `AppViewModel` and trigger actions via its functions.

---

## 5. Project Tracking

This section details how the project's progress will be tracked.

### Goal Progress

Track the team's progress on meeting their objectives.

| OBJECTIVE | KEY RESULT | % COMPLETE |
| :---------- | :----------- | :--------- | :---
|             |              |            |
| Objective 1 | Key result 1 |          |
|             | Key result 2 |          |
|             |              |            |
| Objective 2 | Key result 1 |          |
|             | Key result 2 |          |
|             |              |            |
| Objective 3 | Key result 1 |          |
|             | Key result 2 |          |

---

## 6. Project Resources

This section lists files and links for additional learning or reference.

### Links and Files

| FILE NAME | OWNER | SOURCE | CREATED |
| :-------------- | :------ | :----- | :------ | :---
| WEEKLY NOTES |       |      |       |
| PROJECT KICKOFF |       |      |       |
| PROJECT BRIEF |       |      |       |
| RESEARCH |       |      |       |
| ASSETS |       |      |       |

---

## 7. Project FAQs

This section contains frequently asked questions and their answers regarding the project.

### Project Questions and Answers

#### Q: ADD QUESTION

Answer: Keep the response short. Add links to resources and tag team members to contact for help.
Resource 
Contact 

#### Q: ADD QUESTION

Answer: Keep the response short. Add links to resources and tag team members to contact for help.
Resource 
Contact 

#### Q: ADD QUESTION

Answer: Keep the response short. Add links to resources and tag team members to contact for help.
Resource 
Contact 

---

## 8. Alternative Backend Implementation (Supabase)

This section outlines an alternative approach for the backend using Supabase as a Backend-as-a-Service. The web portal frontend implementation would connect to this Supabase project instead of the Node.js/Express backend.

### Overview

With Supabase, the backend is not a traditional server application hosted by you. Instead, it's a service providing a database, authentication, and more, configured via the Supabase dashboard and SQL scripts.

### Backend Setup (Using Supabase)

* **Step 1.1: Create a Supabase Project:** Go to supabase.com, sign up for a free account, and create a new project, choosing a name, generating a database password, and selecting a region.
* **Step 1.2: Get Your API Keys:** Navigate to Project Settings > API tab to find your Project URL and Project API Key (anon public key). Keep these safe for the frontend application.
* **Step 1.3: Create Database Tables and Policies:** Define the database structure and security rules using SQL. Go to the SQL Editor in Supabase, paste the provided SQL code block, and click "Run". This creates the tables (`classes`, `materials`, `students`, `student_updates`) and enables Row Level Security (RLS) policies to ensure teachers manage only their own data. The SQL script includes `CREATE TABLE IF NOT EXISTS` statements and `CREATE POLICY` statements for RLS.

#### Backend SQL Code

```sql
-- Step 1: Enable the uuid-ossp extension if not already enabled.
-- This function allows us to generate unique IDs for our table rows.
CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; --

-- Step 2: Create the 'classes' table
-- This table stores information about each class a teacher creates.
CREATE TABLE classes ( --
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), --
    teacher_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL, --
    name TEXT NOT NULL, --
    description TEXT, --
    created_at TIMESTAMPTZ DEFAULT NOW() --
); --

-- Enable Row Level Security (RLS) on the 'classes' table.
-- This is a crucial security step.
ALTER TABLE classes ENABLE ROW LEVEL SECURITY; --

-- Create a policy that allows teachers to manage and view only their own classes.
CREATE POLICY "Teachers can manage own classes" --
ON classes FOR ALL --
USING (auth.uid() = teacher_id) --
WITH CHECK (auth.uid() = teacher_id); --

-- Step 3: Create the 'materials' table
-- This table stores class materials linked to a specific class.
CREATE TABLE materials ( --
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), --
    class_id UUID REFERENCES classes(id) ON DELETE CASCADE NOT NULL, --
    title TEXT NOT NULL, --
    content TEXT, --
    type TEXT DEFAULT 'note', -- e.g., 'note', 'file_link'
    created_at TIMESTAMPTZ DEFAULT NOW() --
); --

-- Enable RLS for materials
ALTER TABLE materials ENABLE ROW LEVEL SECURITY; --

-- Create a policy allowing teachers to manage materials only for classes they own.
CREATE POLICY "Teachers can manage materials for their classes" --
ON materials FOR ALL --
USING (EXISTS (SELECT 1 FROM classes WHERE classes.id = materials.class_id AND classes.teacher_id = auth.uid())) --
WITH CHECK (EXISTS (SELECT 1 FROM classes WHERE classes.id = materials.class_id AND classes.teacher_id = auth.uid())); --

-- Step 4: Create the 'students' table
-- This table stores student information linked to a specific class.
CREATE TABLE students ( --
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), --
    class_id UUID REFERENCES classes(id) ON DELETE CASCADE NOT NULL, --
    name TEXT NOT NULL, --
    identifier TEXT, -- e.g., student ID
    created_at TIMESTAMPTZ DEFAULT NOW() --
); --

-- Enable RLS for students
ALTER TABLE students ENABLE ROW LEVEL SECURITY; --

-- Create a policy allowing teachers to manage students only for classes they own.
CREATE POLICY "Teachers can manage students for their classes" --
ON students FOR ALL --
USING (EXISTS (SELECT 1 FROM classes WHERE classes.id = students.class_id AND classes.teacher_id = auth.uid())) --
WITH CHECK (EXISTS (SELECT 1 FROM classes WHERE classes.id = students.class_id AND classes.teacher_id = auth.uid())); --

-- Step 5: Create the 'student_updates' table
-- This table stores individual updates for each student.
CREATE TABLE student_updates ( --
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), --
    student_id UUID REFERENCES students(id) ON DELETE CASCADE NOT NULL, --
    content TEXT NOT NULL, --
    created_at TIMESTAMPTZ DEFAULT NOW() --
); --

-- Enable RLS for student_updates
ALTER TABLE student_updates ENABLE ROW LEVEL SECURITY; --

-- Create a policy allowing teachers to manage updates only for students in their own classes.
CREATE POLICY "Teachers can manage updates for students in their classes" --
ON student_updates FOR ALL --
USING (EXISTS ( --
    SELECT 1 FROM students s --
    JOIN classes c ON s.class_id = c.id --
    WHERE s.id = student_updates.student_id AND c.teacher_id = auth.uid() --
)) --
WITH CHECK (EXISTS ( --
    SELECT 1 FROM students s --
    JOIN classes c ON s.class_id = c.id --
    WHERE s.id = student_updates.student_id AND c.teacher_id = auth.uid() --
)); --
```

### Frontend Setup (Using React)

The frontend is a single-page application built with React that communicates with the Supabase backend.
* **Step 2.1: Set up a Local React Environment:** If needed, create a new React project using `npx create-react-app smis-portal`, navigate into the folder, and install necessary libraries like `lucide-react` (`npm install lucide-react`).
* **Step 2.2: Create Environment Variables:** Create a `.env` file in the root of the project. Add your Supabase URL and anon key: `REACT_APP_SUPABASE_URL=https://your-project-id.supabase.co` and `REACT_APP_SUPABASE_ANON_KEY=your-public-anon-key-here`.
* **Step 2.3: Frontend Application Code:** Replace the entire content of `src/App.js` with the provided code. This code dynamically loads the Supabase library, initializes the client, handles authentication state changes, fetches data (classes, materials, students, updates) using the Supabase client, and implements event handlers for CRUD operations. It includes state management for loading, errors, navigation, and modals.

*Note: The full frontend code for the Supabase implementation is extensive and is provided in the source. It includes setup effects, authentication handlers (`handleAuth`, `handleLogout`), data handlers (`handleCreateClass`, `handleAddMaterial`, `handleAddStudent`, `handleAddUpdate`), navigation (`MapsToClass`, `MapsToStudent`, `goBack`, `goHome`), rendering logic based on page state, and modal/form components.*

### Running the Application

After setup, go to your terminal in the project directory and run `npm start`. The browser should open to `http://localhost:3000`. Upon first launch, a Signup/Login modal will appear; create a new teacher account.

### The Next Steps

Potential enhancements include:
* **Edit and Delete Functionality:** Add logic using `supabase.from('table').update()` or `.delete()` calls.
* **File Uploads:** Use Supabase Storage for uploading files as materials.
* **Real-time Updates:** Implement Supabase Realtime Subscriptions for instant data updates across devices.
* **Improved UI/UX:** Add confirmation dialogs, better loading states, and enhance design.
* **Student/Parent View:** Create a read-only view requiring more advanced RLS policies.
* **Search and Filtering:** Add search capabilities.
```