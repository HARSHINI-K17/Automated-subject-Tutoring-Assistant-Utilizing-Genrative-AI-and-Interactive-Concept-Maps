/* ==========================================================================
   EduMind AI - Core Application Script
   ========================================================================== */

// ==========================================================================
// 1. COMPREHENSIVE MOCK KNOWLEDGE DATABASE
// ==========================================================================
const KNOWLEDGE_BASE = {
    dbms: {
        title: "Database Management System (DBMS)",
        concepts: {
            "Database": {
                name: "Database",
                difficulty: "easy",
                definition: "A structured, organized collection of data stored and accessed electronically from a computer system.",
                explanation: "Think of a database like a digital filing cabinet. Instead of loose papers scattered around a room, a database organizes documents in folders, cabinets, and drawers so that anyone can search, sort, and find information in seconds.",
                example: "A spreadsheet containing student records (Name, ID, Grade) is a simple database. A modern system like Netflix uses a database to store titles, user watch history, and payment details.",
                related: ["DBMS", "SQL", "Indexing"],
                coords: { x: 250, y: 150, fixed: true }
            },
            "DBMS": {
                name: "DBMS",
                difficulty: "easy",
                definition: "Database Management System - software that interacts with end users, applications, and the database itself to capture and analyze data.",
                explanation: "If the Database is a filing cabinet, the DBMS is the librarian. You don't grab files from the drawers yourself; instead, you ask the librarian, who knows exactly where everything is, retrieves it safely, and makes sure no two people modify the same page at once.",
                example: "MySQL, PostgreSQL, Oracle, and Microsoft SQL Server are examples of DBMS software. They let you run queries and secure data.",
                related: ["Database", "SQL", "Transactions"],
                coords: { x: 250, y: 300, fixed: true }
            },
            "ER Model": {
                name: "ER Model",
                difficulty: "medium",
                definition: "Entity-Relationship Model - a high-level conceptual data model diagram that represents entities (tables) and their relations.",
                explanation: "An ER Model is the blueprint of a database. Before building a house, you draw a blueprint showing rooms (entities like 'Student' and 'Course') and doorways (relationships like 'Enrolls in'). It helps visualize how different data concepts connect.",
                example: "An entity 'Student' has attributes (StudentID, Name). An entity 'Course' has (CourseID, Title). The link between them is a relationship: 'Student' ENROLLS in 'Course'.",
                related: ["Database", "Normalization"],
                coords: { x: 420, y: 200 }
            },
            "SQL": {
                name: "SQL",
                difficulty: "easy",
                definition: "Structured Query Language - the standard programming language used to manage, query, and manipulate relational databases.",
                explanation: "SQL is the language you use to speak to the librarian (DBMS). You write a sentence (a query) using specific rules, and the DBMS returns exactly what you asked for.",
                example: "<code>SELECT name FROM students WHERE grade = 'A';</code>. This SQL query asks the database to find and show names of students with an 'A' grade.",
                related: ["DBMS", "Joins", "Indexing"],
                coords: { x: 120, y: 400 }
            },
            "Transactions": {
                name: "Transactions",
                difficulty: "advanced",
                definition: "A logical unit of database processing that includes one or more database access operations. Must adhere to ACID properties.",
                explanation: "Think of a transaction like sending money on a banking app. The app must subtract money from your account AND add it to your friend's. If the app crashes halfway, it must undo the subtraction so your money isn't lost. A transaction ensures it is 'all or nothing'.",
                example: "Transferring $100: <br>1. Check balance.<br>2. Subtract $100 from Account A.<br>3. Add $100 to Account B.<br>Both steps must succeed, or the entire operation is rolled back.",
                related: ["DBMS", "Indexing"],
                coords: { x: 420, y: 400 }
            },
            "Normalization": {
                name: "Normalization",
                difficulty: "medium",
                definition: "The systematic process of organizing database tables to minimize data redundancy (duplication) and avoid anomalies.",
                explanation: "Normalization is like organizing your closet by category. Instead of putting shirts, books, and food in one box, you split them up. This avoids duplicates (like buying a book you already have) and makes editing items clean and safe.",
                example: "If a database lists a student's address inside 5 different enrollment rows, updating their address requires updating 5 spots. Normalization splits 'Address' into a separate table, needing only one update.",
                related: ["ER Model", "1NF", "2NF", "3NF", "BCNF"],
                coords: { x: 550, y: 300, isParent: true }
            },
            "Indexing": {
                name: "Indexing",
                difficulty: "medium",
                definition: "A data structure technique used to quickly locate and access data in database tables without scanning every row.",
                explanation: "An index is like the index at the back of a textbook. If you want to find the term 'Subqueries', you don't flip through all 500 pages one-by-one. You check the index, find page 231, and flip directly there.",
                example: "Creating a B-Tree index on 'StudentID' allows the DBMS to find a student record in microseconds instead of scanning millions of rows sequentially.",
                related: ["Database", "SQL", "Transactions"],
                coords: { x: 80, y: 220 }
            },
            "Joins": {
                name: "Joins",
                difficulty: "medium",
                definition: "An SQL operation used to combine rows from two or more tables based on a related column between them.",
                explanation: "Imagine you have one spreadsheet of Students (IDs and Names) and another of Library Books Checked Out (IDs and Book Titles). A JOIN lets you merge these sheets on the student ID to create a list of which student has which book.",
                example: "<code>SELECT students.name, books.title FROM students INNER JOIN books ON students.id = books.student_id;</code>",
                related: ["SQL", "Database"],
                coords: { x: 80, y: 500 }
            },
            // Sub-nodes of Normalization (Expandable)
            "1NF": {
                name: "1NF",
                difficulty: "easy",
                isChild: true,
                parent: "Normalization",
                definition: "First Normal Form - requires atomic values (indivisible) and no repeating groups in columns.",
                explanation: "Each cell in a table must contain exactly one value. No lists or comma-separated items inside a single cell are allowed.",
                example: "If a 'Phone' column has '123-456, 987-654' in one cell, it violates 1NF. You must split them into separate rows or columns.",
                related: ["Normalization", "2NF"],
                coords: { x: 720, y: 150 }
            },
            "2NF": {
                name: "2NF",
                difficulty: "medium",
                isChild: true,
                parent: "Normalization",
                definition: "Second Normal Form - must be in 1NF and have no partial dependencies (non-prime attributes must depend on the entire candidate key).",
                explanation: "If you have a composite primary key (made of two columns), every other detail in the table must relate to BOTH columns, not just one of them. If it only relates to one, it belongs in a different table.",
                example: "In a table with key (StudentID, CourseID), a column 'CourseName' only depends on CourseID. This violates 2NF. 'CourseName' must go to a 'Courses' table.",
                related: ["1NF", "3NF"],
                coords: { x: 720, y: 250 }
            },
            "3NF": {
                name: "3NF",
                difficulty: "medium",
                isChild: true,
                parent: "Normalization",
                definition: "Third Normal Form - must be in 2NF and have no transitive dependencies (no non-prime attribute depends on another non-prime attribute).",
                explanation: "Non-key details should not depend on other non-key details. They should only depend directly on the primary key ('the key, the whole key, and nothing but the key, so help me Codd').",
                example: "In a 'Students' table with primary key StudentID, columns like 'ZipCode' and 'City' are non-prime. Since City depends on ZipCode, there is a transitive dependency. ZipCode and City must go to a separate 'Locations' table.",
                related: ["2NF", "BCNF"],
                coords: { x: 720, y: 350 }
            },
            "BCNF": {
                name: "BCNF",
                difficulty: "advanced",
                isChild: true,
                parent: "Normalization",
                definition: "Boyce-Codd Normal Form - a stricter version of 3NF where for every functional dependency X → Y, X must be a superkey.",
                explanation: "BCNF solves anomalies where a table has overlapping candidate keys. It ensures that any column that determines another column MUST be a candidate key.",
                example: "A student-professor matching database where professors teach only one subject, but multiple professors can teach the same subject. It violates BCNF if the subject column determines the professor.",
                related: ["3NF"],
                coords: { x: 720, y: 450 }
            }
        },
        quizzes: [
            {
                topic: "Normalization",
                difficulty: "easy",
                questions: [
                    {
                        type: "mcq",
                        q: "Which normal form requires that all values in a column must be atomic (indivisible)?",
                        options: ["First Normal Form (1NF)", "Second Normal Form (2NF)", "Third Normal Form (3NF)", "Boyce-Codd Normal Form (BCNF)"],
                        correctIndex: 0,
                        explanation: "1NF states that all column values must be atomic, meaning a cell cannot contain a list or repeating group of values."
                    },
                    {
                        type: "tf",
                        q: "A table is in 2NF if it is in 1NF and contains no transitive dependencies.",
                        options: ["True", "False"],
                        correctIndex: 1,
                        explanation: "False. A table is in 2NF if it is in 1NF and contains no PARTIAL dependencies. Transitive dependencies are removed in 3NF."
                    },
                    {
                        type: "short",
                        q: "For every functional dependency X → Y in BCNF, what must X be?",
                        correctAnswer: "superkey",
                        explanation: "In Boyce-Codd Normal Form (BCNF), for every non-trivial functional dependency X → Y, X must be a superkey (or candidate key)."
                    }
                ]
            },
            {
                topic: "SQL",
                difficulty: "medium",
                questions: [
                    {
                        type: "mcq",
                        q: "Which SQL clause is used to combine rows from multiple tables based on a related column?",
                        options: ["UNION", "GROUP BY", "JOIN", "WHERE"],
                        correctIndex: 2,
                        explanation: "The JOIN clause combines rows from two or more tables in a relational database based on a matching attribute."
                    },
                    {
                        type: "mcq",
                        q: "What index structures are most commonly used by DBMS databases for fast key lookups?",
                        options: ["Hash Maps", "B-Trees / B+ Trees", "Linked Lists", "Graphs"],
                        correctIndex: 1,
                        explanation: "B-Trees and B+ Trees are highly efficient search tree structures optimized for disk read/write queries and range scans in databases."
                    }
                ]
            }
        ]
    },
    os: {
        title: "Operating Systems (OS)",
        concepts: {
            "Processes": {
                name: "Processes",
                difficulty: "medium",
                definition: "A program in execution, consisting of program code, data, resources, and execution state.",
                explanation: "Think of a program like a cooking recipe in a book. A process is when you actually start cooking the recipe. The recipe itself is passive; cooking it is active, consuming time, ingredients (RAM), and kitchen space (CPU).",
                example: "Double-clicking your Chrome browser starts a Chrome process which gets its own memory space allocated by the OS.",
                related: ["Threading", "Deadlocks"],
                coords: { x: 250, y: 250 }
            },
            "Threading": {
                name: "Threading",
                difficulty: "medium",
                definition: "The smallest sequence of programmed instructions that can be managed independently by an OS scheduler.",
                explanation: "If a process is a kitchen cooking a meal, threads are the individual chefs working inside that same kitchen. They share the same ingredients (memory) and tables, but each chef performs a different task (like chopping onions while another boils water).",
                example: "In a word processor process, one thread registers keyboard keystrokes, another checks spelling, and a third autosaves your file in the background.",
                related: ["Processes", "Deadlocks"],
                coords: { x: 450, y: 150 }
            },
            "Deadlocks": {
                name: "Deadlocks",
                difficulty: "advanced",
                definition: "A situation where a set of processes are blocked because each process is holding a resource and waiting for another process to release another resource.",
                explanation: "Imagine two people trying to draw on a whiteboard. Person A has the marker but needs the eraser. Person B has the eraser but needs the marker. Neither person will give up what they are holding until they get the other item. They are stuck forever.",
                example: "Process 1 locks Table A and requests Table B. Process 2 locks Table B and requests Table A. Neither can progress, halting execution.",
                related: ["Processes", "Threading", "Virtual Memory"],
                coords: { x: 450, y: 350 }
            },
            "Virtual Memory": {
                name: "Virtual Memory",
                difficulty: "advanced",
                definition: "A memory management capability of an OS that uses hardware and software to allow a computer to compensate for physical memory shortages.",
                explanation: "Imagine a desk that is too small to hold all your open folders. You keep the folders you are actively writing in on the desk (RAM), and place the rest on the floor behind you (Hard Drive). When you need a folder on the floor, you swap it with one on the desk.",
                example: "Paging systems write chunks of RAM data to a Page File on your SSD when physical RAM is fully loaded.",
                related: ["Processes", "Deadlocks"],
                coords: { x: 150, y: 380 }
            }
        },
        quizzes: [
            {
                topic: "Processes",
                difficulty: "medium",
                questions: [
                    {
                        type: "mcq",
                        q: "What is the primary difference between a process and a thread?",
                        options: [
                            "Processes share memory; threads do not.",
                            "Threads share the parent process's memory space; processes have isolated memory.",
                            "Processes are controlled by the CPU; threads are controlled by software.",
                            "There is no difference."
                        ],
                        correctIndex: 1,
                        explanation: "Threads run inside a process and share its address space, whereas processes are fully isolated from one another by the OS."
                    }
                ]
            }
        ]
    },
    cn: {
        title: "Computer Networks (CN)",
        concepts: {
            "TCP/IP": {
                name: "TCP/IP",
                difficulty: "medium",
                definition: "Transmission Control Protocol/Internet Protocol - the standard communication suite used to interconnect network devices on the internet.",
                explanation: "Think of sending a letter. IP is like the mailing address on the envelope that gets the letter to the right house. TCP is the mail carrier who ensures the letter is divided into small, numbered cards, checks that none are lost, and puts them back in order at the destination.",
                example: "Whenever you load a webpage, your browser uses TCP to establish a connection and guarantee every packet of the webpage arrives intact.",
                related: ["OSI Layers", "DNS", "HTTP"],
                coords: { x: 250, y: 250 }
            },
            "OSI Layers": {
                name: "OSI Layers",
                difficulty: "medium",
                definition: "A conceptual framework that characterizes and standardizes the communication functions of a telecommunication system using 7 logical layers.",
                explanation: "The OSI model is like a chain of commands in an international shipping company. One department handles packaging (Presentation/Data), one handles routing shipping trucks (Network), and another handles handing the box to the customer (Application).",
                example: "Routers operate at Layer 3 (Network Layer) reading IP addresses, while switches operate at Layer 2 (Data Link Layer) reading MAC addresses.",
                related: ["TCP/IP"],
                coords: { x: 450, y: 200 }
            },
            "DNS": {
                name: "DNS",
                difficulty: "easy",
                definition: "Domain Name System - the phonebook of the Internet, translating human-readable hostnames to machine-readable IP addresses.",
                explanation: "Computers don't understand names like 'google.com', they communicate using numbers like '142.250.190.46'. DNS acts as the contact list in your phone. You tap 'Mom' (google.com) and the phone looks up and dials her actual number.",
                example: "Typing 'wikipedia.org' causes your system to query a DNS server to retrieve Wikipedia's numerical IP address before loading the website.",
                related: ["TCP/IP", "HTTP"],
                coords: { x: 120, y: 350 }
            },
            "HTTP": {
                name: "HTTP",
                difficulty: "easy",
                definition: "Hypertext Transfer Protocol - an application-layer protocol for transmitting hypermedia documents, such as HTML.",
                explanation: "HTTP is the set of rules for how a client (your web browser) and a server talk to each other. It's like ordering at a restaurant: you ask for something specific using the menu (HTTP GET Request), and the waiter brings it back (HTTP Response).",
                example: "When you click a link, your browser sends a <code>GET /index.html HTTP/1.1</code> request to the server, which replies with <code>200 OK</code> and the webpage file.",
                related: ["TCP/IP", "DNS"],
                coords: { x: 380, y: 400 }
            }
        },
        quizzes: []
    },
    python: {
        title: "Python Programming (PY)",
        concepts: {
            "OOP": {
                name: "OOP",
                difficulty: "medium",
                definition: "Object-Oriented Programming - a programming paradigm based on the concept of 'objects' containing data and code.",
                explanation: "Think of a class like a cookie cutter, and objects as the cookies. The cookie cutter defines the shape (attributes like size, and methods like bake). Once you press it, you get individual cookies (objects) that can have different toppings (individual attribute values) but share the same base structure.",
                example: "Creating a class <code>Car</code> and instantiating <code>my_car = Car(color='Red', model='Tesla')</code>.",
                related: ["Data Structures"],
                coords: { x: 250, y: 250 }
            },
            "Data Structures": {
                name: "Data Structures",
                difficulty: "easy",
                definition: "Data structures are collections of data values, relationships, and functions applied to data in Python (Lists, Tuples, Dicts, Sets).",
                explanation: "Data structures are different types of storage containers in your kitchen. A List is a row of plates (ordered and changeable). A Tuple is a sealed jar (cannot be changed after filling). A Dictionary is labeled spice jars (you find the spice by reading its label key, not its position).",
                example: "<code>student_grades = {'Alex': 'A', 'Emma': 'B+'}</code> is a Dictionary structure mapping Names to Grades.",
                related: ["OOP", "Generators"],
                coords: { x: 100, y: 200 }
            },
            "Decorators": {
                name: "Decorators",
                difficulty: "advanced",
                definition: "A design pattern in Python that allows a user to add new functionality to an existing object/function without modifying its structure.",
                explanation: "Decorators are like gift wrapping. If you have a toy (the function), wrapping it doesn't change the toy itself, but it adds decoration/features (like printing a log message or checking permissions) before the toy is opened and played with.",
                example: "Using <code>@login_required</code> before a function to ensure a user is logged in before that function executes.",
                related: ["OOP", "Generators"],
                coords: { x: 420, y: 150 }
            },
            "Generators": {
                name: "Generators",
                difficulty: "advanced",
                definition: "Generators are functions that return an iterator that yields a sequence of values one at a time, instead of returning them all at once.",
                explanation: "Imagine a factory making bricks. A normal function makes 1 million bricks, loads them into a truck, and delivers them all together (uses lots of memory). A generator delivers one brick at a time exactly when you ask for it, saving massive storage.",
                example: "Using the <code>yield</code> keyword instead of <code>return</code> to create a stream of integers.",
                related: ["Data Structures", "Decorators"],
                coords: { x: 400, y: 350 }
            }
        },
        quizzes: []
    }
};

// ==========================================================================
// 2. CHAT BOT DIALOGUE RESPONSES GENERATOR
// ==========================================================================
const SIMULATED_AI_RESPONSES = {
    fallback: "I understand you are studying this topic. Could you please specify a term like Normalization, SQL, or Transactions? I can give a simplified explanation, display code, or run a quiz.",
    greetings: "Hello! Ready to study? Ask me any question about your active subject, and I will guide you with analogies, code, and concept map nodes.",
    explain_simply: {
        "Normalization": "Think of normalization like organizing folders on your computer. Instead of saving all files (downloads, music, photos, homework) directly on the Desktop, you create folders for 'Photos', 'Homework', etc. This prevents clutter, helps you search faster, and avoids duplicates.",
        "SQL": "SQL is like ordering food at a drive-thru. You don't walk into the kitchen and cook it yourself. You look at the menu (schema) and tell the speaker exactly what you want ('Give me Cheeseburger where Cheese is Cheddar'). The kitchen (DBMS) prepares it and hands it to you.",
        "Transactions": "Imagine booking a flight ticket. You enter your credit card and click buy. The airline must charge your card AND reserve your seat. If the system crashes in the middle, they can't charge your card without giving you a seat. A transaction guarantees both steps succeed together, or both are canceled.",
        "default": "Imagine explaining it to a 10-year old: We split complex items into simple, independent blocks so they are easier to manage and don't conflict with each other."
    },
    give_example: {
        "Normalization": "Let's see an example of 1NF to 2NF transition. <br><br><strong>Before (Partial Dependency):</strong><br>Table: [Enrollment]<br>Columns: StudentID (Key), CourseID (Key), StudentName, CourseName.<br><em>Here, StudentName depends only on StudentID, not CourseID. Violates 2NF.</em><br><br><strong>After:</strong><br>Table 1: [Students] (StudentID, StudentName)<br>Table 2: [Courses] (CourseID, CourseName)<br>Table 3: [Enrollment] (StudentID, CourseID)",
        "SQL": "Here is an example query finding matching records in two tables:<br><pre><code>SELECT students.name, marks.score\nFROM students\nINNER JOIN marks ON students.id = marks.student_id\nWHERE marks.score > 85;</code></pre>",
        "Transactions": "A banking money transfer transaction example:<br><pre><code>START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT; -- Saves if both worked, ROLLBACK if either failed.</code></pre>",
        "default": "Here is a standard structure:<br><pre><code># Scenario Implementation\ndef process_data(data):\n    if not data:\n        return None\n    return [item.upper() for item in data]</code></pre>"
    }
};

// ==========================================================================
// 3. APPLICATION STATE MANAGEMENT
// ==========================================================================
let STATE = {
    currentUser: {
        name: "Alex Jones",
        initials: "AJ",
        role: "student"
    },
    activeSubject: "dbms",
    difficultyLevel: "medium",
    recentConcepts: ["Normalization", "SQL", "Database"],
    chatHistory: {
        dbms: [
            { sender: "ai", text: "Hello! I am your AI Tutoring Assistant for <strong>Database Management Systems</strong>. Feel free to ask any question, or select a topic from the Dashboard. I can explain complex terms, generate quizzes, show maps, and provide real-world examples." }
        ],
        os: [
            { sender: "ai", text: "Welcome to Operating Systems tutoring workspace. Ask about Processes, Threading, Deadlocks, or memory management!" }
        ],
        cn: [
            { sender: "ai", text: "Welcome to Computer Networks tutoring workspace. Ask about TCP/IP, OSI Layers, Routing, or web protocols!" }
        ],
        python: [
            { sender: "ai", text: "Welcome to Python Programming tutoring workspace. Ask about Object-Oriented patterns, decorators, or generators!" }
        ]
    },
    activeChatId: "default",
    conceptCompletion: {
        dbms: {
            "Database": true,
            "DBMS": true,
            "ER Model": true,
            "SQL": false,
            "Transactions": false,
            "Normalization": true,
            "1NF": true,
            "2NF": true,
            "3NF": false,
            "BCNF": false,
            "Indexing": false,
            "Joins": false
        },
        os: { "Processes": true, "Threading": false, "Deadlocks": false, "Virtual Memory": false },
        cn: { "TCP/IP": false, "OSI Layers": false, "DNS": false, "HTTP": false },
        python: { "OOP": true, "Data Structures": true, "Decorators": false, "Generators": false }
    },
    activeQuiz: null,
    expandedParentNodes: ["Normalization"], // Track expanded concept maps
    activeSelectedConcept: "Normalization",
    mapZoom: { x: 0, y: 0, scale: 1 },
    isPanning: false,
    panStart: { x: 0, y: 0 }
};

// ==========================================================================
// 4. ROUTER AND PAGE VIEW SHIFTING
// ==========================================================================
function initRouter() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.getAttribute('data-target');
            navigateTo(target);
        });
    });

    // Sidebar Hamburger toggle mobile
    const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    if(toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Handle Hash Route directly
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '');
        if(hash) navigateTo(hash);
    });
}

function navigateTo(viewId) {
    // Hide all views
    const views = document.querySelectorAll('.page-view');
    views.forEach(v => v.classList.remove('active'));

    // Deactivate nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Show target view
    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
        targetView.classList.add('active');
        
        // Highlight sidebar nav item
        const activeNavItem = document.querySelector(`.nav-item[data-target="${viewId}"]`);
        if (activeNavItem) activeNavItem.classList.add('active');

        // Close mobile menu if open
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.classList.remove('active');

        // Page specific initializations
        if (viewId === 'map') {
            renderConceptMap();
        } else if (viewId === 'resources') {
            renderResourcesPage();
        } else if (viewId === 'progress') {
            renderProgressPage();
        } else if (viewId === 'quiz') {
            initQuizTab();
        }
        
        // Reinitialize Lucide Icons for dynamically generated items
        lucide.createIcons();
    }
}

// ==========================================================================
// 5. LOGIN AND ROLE ACCESS CONTROL
// ==========================================================================
function initAuth() {
    const roleBtns = document.querySelectorAll('.role-btn');
    let selectedRole = "student";

    roleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            roleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedRole = btn.getAttribute('data-role');
            
            // Adjust title/subtitle based on role
            const title = document.getElementById('login-title');
            const user = document.getElementById('username');
            if(selectedRole === 'faculty') {
                title.textContent = "Faculty & Admin Sign In";
                user.value = "professor.smith@university.edu";
            } else {
                title.textContent = "Student Sign In";
                user.value = "alex.jones@university.edu";
            }
        });
    });

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById('username').value;
        const namePart = usernameInput.split('@')[0].replace('.', ' ');
        // capitalize name
        const displayName = namePart.replace(/\b\w/g, c => c.toUpperCase());
        const initials = displayName.split(' ').map(n => n[0]).join('');

        loginUser(displayName, initials, selectedRole);
    });

    const guestBtn = document.getElementById('btn-guest');
    guestBtn.addEventListener('click', () => {
        loginUser("Guest Student", "GS", "student");
    });

    const logoutBtn = document.getElementById('btn-logout');
    logoutBtn.addEventListener('click', () => {
        logoutUser();
    });
}

function loginUser(name, initials, role) {
    STATE.currentUser = { name, initials, role };
    
    // UI Update
    const appEl = document.getElementById('app');
    appEl.classList.remove('app-logged-out');
    appEl.classList.add('app-logged-in');

    document.getElementById('user-display-name').textContent = name;
    document.getElementById('user-initials').textContent = initials;
    
    const roleBadge = document.getElementById('user-display-role');
    const avatarBadge = document.getElementById('user-avatar-badge');
    const facultyItems = document.querySelectorAll('.faculty-only');

    if(role === 'faculty') {
        roleBadge.textContent = "Faculty / Admin";
        roleBadge.className = "badge-role badge-purple";
        avatarBadge.classList.add('faculty-badge');
        facultyItems.forEach(item => item.style.display = 'block');
        // Redirect to faculty view directly
        navigateTo('faculty');
        renderFacultyExtractedTable();
    } else {
        roleBadge.textContent = "Student";
        roleBadge.className = "badge-role";
        avatarBadge.classList.remove('faculty-badge');
        facultyItems.forEach(item => item.style.display = 'none');
        // Redirect to dashboard
        navigateTo('dashboard');
    }

    // Refresh Dashboard Greeting
    document.getElementById('banner-username').textContent = name.split(' ')[0];
    
    updateOverallStats();
    initSubjectChange();
    lucide.createIcons();
}

function logoutUser() {
    STATE.currentUser = null;
    const appEl = document.getElementById('app');
    appEl.classList.remove('app-logged-in');
    appEl.classList.add('app-logged-out');
}

// ==========================================================================
// 6. DASHBOARD MODULE
// ==========================================================================
function initSubjectChange() {
    const selector = document.getElementById('active-subject-select');
    
    // Sync UI to default subject
    syncSubjectView(STATE.activeSubject);

    selector.addEventListener('change', (e) => {
        STATE.activeSubject = e.target.value;
        syncSubjectView(STATE.activeSubject);
    });

    // Subject selection cards click
    const subjCards = document.querySelectorAll('.subject-card');
    subjCards.forEach(card => {
        card.addEventListener('click', () => {
            subjCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            const targetSubj = card.getAttribute('data-subj');
            STATE.activeSubject = targetSubj;
            selector.value = targetSubj;
            syncSubjectView(targetSubj);
        });
    });

    // Global dashboard search
    const searchForm = document.getElementById('dashboard-search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = document.getElementById('dashboard-search-input').value;
        if(query) {
            document.getElementById('dashboard-search-input').value = "";
            navigateTo('chat');
            submitUserMessage(query);
        }
    });

    // Difficulty Select
    const diffSelect = document.getElementById('difficulty-select');
    diffSelect.addEventListener('change', (e) => {
        STATE.difficultyLevel = e.target.value;
    });

    // Quick prompt chips
    const prompts = document.querySelectorAll('.prompt-chip');
    prompts.forEach(chip => {
        chip.addEventListener('click', () => {
            const query = chip.getAttribute('data-query');
            navigateTo('chat');
            submitUserMessage(query);
        });
    });

    // Recommended next topic card
    const recommendedBtn = document.getElementById('btn-dashboard-start-recommended');
    recommendedBtn.addEventListener('click', () => {
        const topicName = "BCNF";
        STATE.activeSelectedConcept = topicName;
        navigateTo('map');
    });
}

function syncSubjectView(subjKey) {
    const info = KNOWLEDGE_BASE[subjKey];
    if(!info) return;

    // Update active subject header class details
    document.querySelectorAll('.active-subject-text').forEach(t => t.textContent = info.title);
    document.getElementById('banner-subject-name').textContent = info.title;

    // Update Active Card Highlights
    const cards = document.querySelectorAll('.subject-card');
    cards.forEach(c => {
        if(c.getAttribute('data-subj') === subjKey) {
            c.classList.add('active');
        } else {
            c.classList.remove('active');
        }
    });

    // Update dynamic recommended next topics
    const recPill = document.getElementById('dashboard-recommended-pill');
    const recommendedTitle = recPill.querySelector('h5');
    const recommendedDesc = recPill.querySelector('span');

    if(subjKey === 'dbms') {
        recommendedTitle.textContent = "BCNF (Boyce-Codd Normal Form)";
        recommendedDesc.textContent = "Builds on 3NF which you passed in yesterday's quiz";
    } else if(subjKey === 'os') {
        recommendedTitle.textContent = "Deadlock Detection";
        recommendedDesc.textContent = "Prerequisite: Processes and Threading are completed.";
    } else if(subjKey === 'cn') {
        recommendedTitle.textContent = "OSI Layer 4 - Transport";
        recommendedDesc.textContent = "Understand TCP vs UDP handshakes and packet transfers.";
    } else {
        recommendedTitle.textContent = "Python Decorators";
        recommendedDesc.textContent = "Builds on standard Python functions and scopes.";
    }

    // Refresh Recent Chips
    renderRecentChips();

    // Refresh Chat Messages for this Subject
    renderChatMessages();

    // Refresh overall stats
    updateOverallStats();
}

function renderRecentChips() {
    const container = document.getElementById('recent-chips-container');
    container.innerHTML = "";

    const activeConcepts = Object.keys(KNOWLEDGE_BASE[STATE.activeSubject].concepts).slice(0, 4);
    
    activeConcepts.forEach(cName => {
        const chip = document.createElement('div');
        chip.className = "chip-concept";
        chip.innerHTML = `<i data-lucide="hash"></i> <span>${cName}</span>`;
        chip.addEventListener('click', () => {
            STATE.activeSelectedConcept = cName;
            navigateTo('map');
        });
        container.appendChild(chip);
    });
    lucide.createIcons();
}

function updateOverallStats() {
    const completionSubj = STATE.conceptCompletion[STATE.activeSubject];
    if(!completionSubj) return;

    const total = Object.keys(completionSubj).length;
    const completed = Object.values(completionSubj).filter(v => v === true).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    // Update Dashboard Elements
    document.getElementById('stats-mastered-topics').textContent = `${completed} / ${total}`;
    document.getElementById('dashboard-overall-percentage').textContent = `${percentage}%`;
    
    // Animate Progress Circle Ring
    const ring = document.getElementById('dashboard-progress-ring');
    if (ring) {
        const radius = ring.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        ring.style.strokeDasharray = `${circumference} ${circumference}`;
        const offset = circumference - (percentage / 100) * circumference;
        ring.style.strokeDashoffset = offset;
    }
}

// ==========================================================================
// 7. AI TUTOR CHAT MODULE
// ==========================================================================
function renderChatMessages() {
    const container = document.getElementById('chat-messages-container');
    container.innerHTML = "";

    const messages = STATE.chatHistory[STATE.activeSubject] || [];
    messages.forEach(msg => {
        appendMessageBubble(msg.sender, msg.text, false);
    });

    container.scrollTop = container.scrollHeight;
}

function appendMessageBubble(sender, text, animate = false) {
    const container = document.getElementById('chat-messages-container');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${sender}`;

    const avatar = document.createElement('div');
    avatar.className = "message-avatar";
    if (sender === 'ai') {
        avatar.innerHTML = `<i data-lucide="sparkles"></i>`;
    } else {
        avatar.innerHTML = `<span>${STATE.currentUser.initials}</span>`;
    }

    const bubble = document.createElement('div');
    bubble.className = "message-bubble";
    
    if (animate && sender === 'ai') {
        // Typing simulation
        let index = 0;
        bubble.innerHTML = "";
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(bubble);
        container.appendChild(messageDiv);
        
        // Hide context actions and chips while typing
        document.getElementById('chat-context-actions').style.display = 'none';
        
        let interval = setInterval(() => {
            bubble.innerHTML = text.substring(0, index) + "█";
            index += 3;
            if(index >= text.length) {
                clearInterval(interval);
                bubble.innerHTML = text;
                // Reveal actions
                document.getElementById('chat-context-actions').style.display = 'flex';
                renderChatFollowups();
                lucide.createIcons();
            }
            container.scrollTop = container.scrollHeight;
        }, 15);
    } else {
        bubble.innerHTML = text;
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(bubble);
        container.appendChild(messageDiv);
        
        // If last message is AI, show context actions
        if(sender === 'ai') {
            document.getElementById('chat-context-actions').style.display = 'flex';
            renderChatFollowups();
        }
    }
    
    container.scrollTop = container.scrollHeight;
    lucide.createIcons();
}

function renderChatFollowups() {
    const container = document.getElementById('suggested-followups');
    container.innerHTML = "";

    let chips = [];
    if(STATE.activeSubject === 'dbms') {
        chips = [
            "Explain 3NF vs BCNF.",
            "Show SQL Join Example.",
            "Tell me more about indexing.",
            "What is ACID?"
        ];
    } else if(STATE.activeSubject === 'os') {
        chips = [
            "How to avoid Deadlocks?",
            "What is Thread Context Switching?",
            "Explain Page Faults simply."
        ];
    } else {
        chips = [
            "Explain with an analogy.",
            "Show me a practice question.",
            "Open the Concept Map."
        ];
    }

    chips.forEach(text => {
        const btn = document.createElement('button');
        btn.className = "followup-btn";
        btn.textContent = text;
        btn.addEventListener('click', () => {
            submitUserMessage(text);
        });
        container.appendChild(btn);
    });
}

function initChatForm() {
    const form = document.getElementById('chat-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('chat-input');
        const query = input.value;
        if(query) {
            input.value = "";
            submitUserMessage(query);
        }
    });

    const newChatBtn = document.getElementById('btn-new-chat');
    newChatBtn.addEventListener('click', () => {
        STATE.chatHistory[STATE.activeSubject] = [
            { sender: "ai", text: `I have cleared our conversation history. How can I help you master <strong>${KNOWLEDGE_BASE[STATE.activeSubject].title}</strong> now?` }
        ];
        renderChatMessages();
        document.getElementById('chat-context-actions').style.display = 'none';
        document.getElementById('suggested-followups').innerHTML = "";
    });

    // Context Action buttons
    document.getElementById('btn-explain-simply').addEventListener('click', () => {
        submitUserMessage(`Explain ${STATE.activeSelectedConcept || "the topic"} simply using an analogy.`);
    });

    document.getElementById('btn-give-example').addEventListener('click', () => {
        submitUserMessage(`Give me a detailed example code or table for ${STATE.activeSelectedConcept || "the active topic"}.`);
    });

    document.getElementById('btn-generate-quiz').addEventListener('click', () => {
        navigateTo('quiz');
    });

    document.getElementById('btn-chat-show-map').addEventListener('click', () => {
        navigateTo('map');
    });
}

function submitUserMessage(query) {
    // Append User message to local state
    if(!STATE.chatHistory[STATE.activeSubject]) {
        STATE.chatHistory[STATE.activeSubject] = [];
    }
    STATE.chatHistory[STATE.activeSubject].push({ sender: "user", text: query });
    
    // Draw bubble
    appendMessageBubble("user", query, false);

    // Show Typing Indicator
    const loader = document.getElementById('chat-typing-indicator');
    loader.style.display = 'flex';

    setTimeout(() => {
        loader.style.display = 'none';
        const aiResponseText = generateSimulatedAIResponse(query);
        
        STATE.chatHistory[STATE.activeSubject].push({ sender: "ai", text: aiResponseText });
        appendMessageBubble("ai", aiResponseText, true);
    }, 1000);
}

function generateSimulatedAIResponse(query) {
    const qLower = query.toLowerCase();
    const concepts = KNOWLEDGE_BASE[STATE.activeSubject].concepts;

    // Detect if checking for a specific term definition
    let matchedConcept = null;
    for (let key in concepts) {
        if(qLower.includes(key.toLowerCase())) {
            matchedConcept = concepts[key];
            STATE.activeSelectedConcept = key;
            break;
        }
    }

    // Check query intent
    if (qLower.includes("explain simply") || qLower.includes("analogy") || qLower.includes("simple language")) {
        if(matchedConcept) {
            return `<strong>${matchedConcept.name} Analogy:</strong><br>${matchedConcept.explanation}`;
        }
        return SIMULATED_AI_RESPONSES.explain_simply.default;
    }

    if (qLower.includes("example") || qLower.includes("code") || qLower.includes("syntax")) {
        if(matchedConcept) {
            return `Here is a practical example for <strong>${matchedConcept.name}</strong>:<br><br>${matchedConcept.example}`;
        }
        return SIMULATED_AI_RESPONSES.give_example.default;
    }

    if (qLower.includes("quiz") || qLower.includes("test") || qLower.includes("question")) {
        return "I can generate a customized quiz for you! Navigate to the <strong>Quiz & Practice</strong> tab on the sidebar to test your skills.";
    }

    if (qLower.includes("concept map") || qLower.includes("mindmap") || qLower.includes("visual")) {
        return "You can view the full interactive graph structure of these terms in the <strong>Interactive Concept Map</strong> page. Clicking nodes will expand sub-details!";
    }

    // Standard definition response
    if (matchedConcept) {
        return `<strong>${matchedConcept.name}</strong> (${matchedConcept.difficulty.toUpperCase()} Level):<br><br>${matchedConcept.definition}<br><br>Would you like me to <em>Explain Simply</em> or <em>Give an Example</em>?`;
    }

    if (qLower.includes("hello") || qLower.includes("hi") || qLower.includes("hey")) {
        return SIMULATED_AI_RESPONSES.greetings;
    }

    return `I see you are asking about: "${query}". In the context of <strong>${KNOWLEDGE_BASE[STATE.activeSubject].title}</strong>, we look at structures like ${Object.keys(concepts).slice(0,4).join(', ')}. Ask about any of these to learn more!`;
}

// ==========================================================================
// 8. INTERACTIVE CONCEPT MAP ENGINE (DYNAMIC SVG)
// ==========================================================================
function renderConceptMap() {
    const svg = document.getElementById('concept-map-svg');
    const nodesGroup = document.getElementById('map-nodes');
    const linksGroup = document.getElementById('map-links');
    
    if(!svg || !nodesGroup || !linksGroup) return;

    // Reset SVGs
    nodesGroup.innerHTML = "";
    linksGroup.innerHTML = "";

    const subj = KNOWLEDGE_BASE[STATE.activeSubject];
    const concepts = subj.concepts;

    // Render nodes based on hierarchy and states
    const activeNodes = [];
    const activeLinks = [];

    // Filter concepts: Hide children if parent is NOT expanded
    for (let key in concepts) {
        const c = concepts[key];
        if (c.isChild) {
            // Check if parent (e.g. Normalization) is in STATE.expandedParentNodes
            if (STATE.expandedParentNodes.includes(c.parent)) {
                activeNodes.push({ key, ...c });
            }
        } else {
            activeNodes.push({ key, ...c });
        }
    }

    // Build connections/links
    activeNodes.forEach(node => {
        if (node.related) {
            node.related.forEach(relKey => {
                // Ensure related target node is currently active / visible
                if (concepts[relKey] && activeNodes.some(n => n.key === relKey)) {
                    // Avoid duplicate links
                    const exists = activeLinks.some(l => 
                        (l.source === node.key && l.target === relKey) || 
                        (l.source === relKey && l.target === node.key)
                    );
                    if(!exists) {
                        activeLinks.push({ source: node.key, target: relKey });
                    }
                }
            });
        }
    });

    // Draw Links
    activeLinks.forEach(link => {
        const sourceNode = concepts[link.source];
        const targetNode = concepts[link.target];
        if(sourceNode && targetNode) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", sourceNode.coords.x);
            line.setAttribute("y1", sourceNode.coords.y);
            line.setAttribute("x2", targetNode.coords.x);
            line.setAttribute("y2", targetNode.coords.y);
            
            // Check if active highlighting
            if (STATE.activeSelectedConcept === link.source || STATE.activeSelectedConcept === link.target) {
                line.setAttribute("class", "map-link active-link");
            } else {
                line.setAttribute("class", "map-link");
            }
            linksGroup.appendChild(line);
        }
    });

    // Draw Nodes
    activeNodes.forEach(node => {
        const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group.setAttribute("class", "map-node");
        group.setAttribute("transform", `translate(${node.coords.x}, ${node.coords.y})`);
        
        // Add specific classes
        let nodeClass = "map-node-rect";
        if (node.key === STATE.activeSelectedConcept) {
            group.classList.add("active-node");
        }
        if (node.isParent) {
            group.classList.add("parent-node");
        }

        // Rect
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        const width = 120;
        const height = 40;
        rect.setAttribute("x", -width/2);
        rect.setAttribute("y", -height/2);
        rect.setAttribute("width", width);
        rect.setAttribute("height", height);
        rect.setAttribute("class", nodeClass);
        
        // Highlight if searched
        const searchInput = document.getElementById('map-search-input').value.toLowerCase();
        if(searchInput && node.key.toLowerCase().includes(searchInput)) {
            group.classList.add("searched-node");
        }

        // Text label
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("y", 5);
        text.setAttribute("class", "map-node-text");
        text.textContent = node.name;

        group.appendChild(rect);
        group.appendChild(text);

        // Click interaction
        group.addEventListener('click', (e) => {
            e.stopPropagation();
            selectConceptNode(node.key);
        });

        // Double click interaction to chat
        group.addEventListener('dblclick', () => {
            navigateTo('chat');
            submitUserMessage(`Teach me about ${node.key}`);
        });

        nodesGroup.appendChild(group);
    });

    // Populate Sidebar Detail Card
    updateConceptDrawer();
}

function selectConceptNode(conceptKey) {
    STATE.activeSelectedConcept = conceptKey;
    
    // Toggle expand/collapse if it is a parent concept (like Normalization)
    const nodeData = KNOWLEDGE_BASE[STATE.activeSubject].concepts[conceptKey];
    if (nodeData && nodeData.isParent) {
        const idx = STATE.expandedParentNodes.indexOf(conceptKey);
        if (idx > -1) {
            STATE.expandedParentNodes.splice(idx, 1); // collapse
        } else {
            STATE.expandedParentNodes.push(conceptKey); // expand
        }
    }

    // Refresh rendering
    renderConceptMap();
}

function updateConceptDrawer() {
    const cKey = STATE.activeSelectedConcept;
    const drawer = document.getElementById('concept-details-drawer');
    
    if(!cKey) {
        drawer.classList.remove('active');
        return;
    }

    const concept = KNOWLEDGE_BASE[STATE.activeSubject].concepts[cKey];
    if(!concept) return;

    drawer.classList.add('active');
    document.getElementById('drawer-concept-name').textContent = concept.name;
    
    const diffBadge = document.getElementById('drawer-concept-difficulty');
    diffBadge.textContent = concept.difficulty.toUpperCase();
    diffBadge.className = `badge badge-${concept.difficulty === 'easy' ? 'green' : concept.difficulty === 'medium' ? 'purple' : 'danger'}`;

    document.getElementById('drawer-concept-definition').innerHTML = concept.definition;
    document.getElementById('drawer-concept-explanation').textContent = concept.explanation;

    // Fill related chips
    const chipsContainer = document.getElementById('drawer-related-chips');
    chipsContainer.innerHTML = "";
    if (concept.related) {
        concept.related.forEach(rel => {
            const chip = document.createElement('div');
            chip.className = "related-chip";
            chip.textContent = rel;
            chip.addEventListener('click', () => {
                selectConceptNode(rel);
            });
            chipsContainer.appendChild(chip);
        });
    }
}

function initMapInteractions() {
    // Pan & Drag Simulation
    const wrapper = document.getElementById('map-canvas-wrapper');
    const zoomGroup = document.getElementById('map-zoom-group');

    wrapper.addEventListener('mousedown', (e) => {
        STATE.isPanning = true;
        STATE.panStart.x = e.clientX - STATE.mapZoom.x;
        STATE.panStart.y = e.clientY - STATE.mapZoom.y;
    });

    window.addEventListener('mousemove', (e) => {
        if (!STATE.isPanning) return;
        STATE.mapZoom.x = e.clientX - STATE.panStart.x;
        STATE.mapZoom.y = e.clientY - STATE.panStart.y;
        updateMapTransform();
    });

    window.addEventListener('mouseup', () => {
        STATE.isPanning = false;
    });

    // Zoom Buttons
    document.getElementById('btn-zoom-in').addEventListener('click', () => {
        STATE.mapZoom.scale = Math.min(STATE.mapZoom.scale + 0.15, 2.5);
        updateMapTransform();
    });

    document.getElementById('btn-zoom-out').addEventListener('click', () => {
        STATE.mapZoom.scale = Math.max(STATE.mapZoom.scale - 0.15, 0.5);
        updateMapTransform();
    });

    document.getElementById('btn-map-reset').addEventListener('click', () => {
        STATE.mapZoom = { x: 0, y: 0, scale: 1 };
        updateMapTransform();
    });

    // Drawer close button
    document.getElementById('btn-close-drawer').addEventListener('click', () => {
        STATE.activeSelectedConcept = null;
        document.getElementById('concept-details-drawer').classList.remove('active');
        renderConceptMap();
    });

    // Drawer deep dive actions
    document.getElementById('btn-drawer-explain-ai').addEventListener('click', () => {
        if(STATE.activeSelectedConcept) {
            navigateTo('chat');
            submitUserMessage(`Explain ${STATE.activeSelectedConcept} in detail.`);
        }
    });

    document.getElementById('btn-drawer-take-quiz').addEventListener('click', () => {
        navigateTo('quiz');
    });

    // Concept Map Keyword Search
    const searchInput = document.getElementById('map-search-input');
    searchInput.addEventListener('input', () => {
        renderConceptMap();
    });
}

function updateMapTransform() {
    const zoomGroup = document.getElementById('map-zoom-group');
    if (zoomGroup) {
        zoomGroup.setAttribute("transform", `translate(${STATE.mapZoom.x}, ${STATE.mapZoom.y}) scale(${STATE.mapZoom.scale})`);
    }
}

// ==========================================================================
// 9. LEARNING RESOURCES MODULE
// ==========================================================================
function renderResourcesPage() {
    const subjKey = STATE.activeSubject;
    const subj = KNOWLEDGE_BASE[subjKey];

    // Accordion Summaries notes
    const accordion = document.getElementById('notes-accordion');
    accordion.innerHTML = "";

    const syllabusConcepts = Object.keys(subj.concepts).filter(k => !subj.concepts[k].isChild);
    syllabusConcepts.forEach((key, index) => {
        const item = subj.concepts[key];
        const accItem = document.createElement('div');
        accItem.className = `accordion-item ${index === 0 ? 'active' : ''}`;
        
        accItem.innerHTML = `
            <div class="accordion-header">
                <span>${item.name} Study Guide</span>
                <i data-lucide="chevron-down"></i>
            </div>
            <div class="accordion-content">
                <p><strong>Definition:</strong> ${item.definition}</p>
                <br>
                <p><strong>Analogy Explanation:</strong> ${item.explanation}</p>
            </div>
        `;
        
        accItem.querySelector('.accordion-header').addEventListener('click', () => {
            accItem.classList.toggle('active');
        });

        accordion.appendChild(accItem);
    });

    // Textbook references list
    const textbooksList = document.getElementById('textbooks-list');
    textbooksList.innerHTML = `
        <li class="textbook-row">
            <div class="pdf-icon-box"><i data-lucide="file-text"></i></div>
            <div class="textbook-info">
                <h4>${subj.title} - Core Reference Guide</h4>
                <span>PDF Document - 4.2 MB</span>
            </div>
            <button class="btn btn-sm btn-outline btn-download-mock">Read</button>
        </li>
        <li class="textbook-row">
            <div class="pdf-icon-box"><i data-lucide="file-text"></i></div>
            <div class="textbook-info">
                <h4>Advanced Syllabus cheatsheet</h4>
                <span>PDF Document - 1.1 MB</span>
            </div>
            <button class="btn btn-sm btn-outline btn-download-mock">Read</button>
        </li>
    `;

    // Video references
    const videoGrid = document.getElementById('video-grid');
    videoGrid.innerHTML = `
        <div class="video-card mock-video-trigger" data-title="Introduction to ${subj.title}">
            <div class="video-thumbnail">
                <i data-lucide="play"></i>
                <span class="video-dur">12:30</span>
            </div>
            <div class="video-title">
                <h4>1. Introduction course</h4>
                <p>By Prof. Raymond</p>
            </div>
        </div>
        <div class="video-card mock-video-trigger" data-title="Deep dive concepts of ${subj.title}">
            <div class="video-thumbnail">
                <i data-lucide="play"></i>
                <span class="video-dur">24:15</span>
            </div>
            <div class="video-title">
                <h4>2. Intermediate Concepts</h4>
                <p>By Dr. Helena</p>
            </div>
        </div>
    `;

    // Video Trigger Popup handlers
    document.querySelectorAll('.mock-video-trigger').forEach(card => {
        card.addEventListener('click', () => {
            const vTitle = card.getAttribute('data-title');
            document.getElementById('video-modal-title').textContent = vTitle;
            document.getElementById('video-modal').style.display = 'flex';
        });
    });

    // Formulas & Definitions sheet
    const cheatContainer = document.getElementById('cheat-sheet-container');
    if(subjKey === 'dbms') {
        cheatContainer.innerHTML = `
            <table>
                <thead>
                    <tr><th>Symbol / Term</th><th>Meaning / Formula</th></tr>
                </thead>
                <tbody>
                    <tr><td>σ (Sigma)</td><td>Relational Algebra: Selection (filters rows)</td></tr>
                    <tr><td>π (Pi)</td><td>Relational Algebra: Projection (filters columns)</td></tr>
                    <tr><td>⨝ (Join)</td><td>Relational Algebra: Natural Join operation</td></tr>
                    <tr><td>ACID</td><td>Atomicity, Consistency, Isolation, Durability</td></tr>
                </tbody>
            </table>
        `;
    } else {
        cheatContainer.innerHTML = `
            <table>
                <thead>
                    <tr><th>Term</th><th>Concept Key Description</th></tr>
                </thead>
                <tbody>
                    <tr><td>Module Mastery</td><td>Total topics finished over syllabus scope</td></tr>
                    <tr><td>AI explanation</td><td>Double click nodes to run active simulations</td></tr>
                </tbody>
            </table>
        `;
    }

    // Read mock download alerts
    document.querySelectorAll('.btn-download-mock').forEach(btn => {
        btn.addEventListener('click', () => {
            alert("This is a web prototype. Your PDF textbook opens in the staging portal.");
        });
    });

    lucide.createIcons();
}

function initResourcesActions() {
    // Video Modal close
    document.getElementById('btn-close-video').addEventListener('click', () => {
        document.getElementById('video-modal').style.display = 'none';
    });

    // Download notes button compiles text file
    document.getElementById('btn-download-notes').addEventListener('click', () => {
        const activeSubj = STATE.activeSubject;
        const subj = KNOWLEDGE_BASE[activeSubj];
        
        let notesText = `# Study Notes: ${subj.title}\n\n`;
        notesText += `Generated by EduMind AI Tutoring Assistant on ${new Date().toLocaleDateString()}\n`;
        notesText += `===========================================================\n\n`;

        for(let key in subj.concepts) {
            const concept = subj.concepts[key];
            notesText += `## Concept: ${concept.name} (${concept.difficulty.toUpperCase()} Level)\n`;
            notesText += `Definition: ${concept.definition.replace(/<[^>]*>/g, '')}\n`;
            notesText += `Explanation: ${concept.explanation}\n\n`;
        }

        // Trigger file download
        const blob = new Blob([notesText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${activeSubj}_study_notes.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}

// ==========================================================================
// 10. QUIZ & PRACTICE MODULE
// ==========================================================================
function initQuizTab() {
    // Fill topic selector dropdown based on subject
    const topicSelect = document.getElementById('quiz-topic-select');
    topicSelect.innerHTML = "";
    
    const subj = KNOWLEDGE_BASE[STATE.activeSubject];
    const quizTopics = subj.quizzes || [];

    if(quizTopics.length === 0) {
        // Fallback option
        const opt = document.createElement('option');
        opt.value = "general";
        opt.textContent = "General Syllabus Overview";
        topicSelect.appendChild(opt);
    } else {
        quizTopics.forEach(quiz => {
            const opt = document.createElement('option');
            opt.value = quiz.topic;
            opt.textContent = quiz.topic;
            topicSelect.appendChild(opt);
        });
    }

    // Show setup hide active/results
    document.getElementById('quiz-setup-card').style.display = 'block';
    document.getElementById('quiz-active-card').style.display = 'none';
    document.getElementById('quiz-results-card').style.display = 'none';
}

function initQuizEngine() {
    // Difficulty toggles
    const diffBtns = document.querySelectorAll('.quiz-diff-btn');
    let selectedQuizDiff = "easy";
    
    diffBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            diffBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedQuizDiff = btn.getAttribute('data-diff');
        });
    });

    // Start Quiz button
    document.getElementById('btn-start-quiz').addEventListener('click', () => {
        const topicSelect = document.getElementById('quiz-topic-select').value;
        startActiveQuiz(topicSelect, selectedQuizDiff);
    });

    // Submit Quiz button
    document.getElementById('btn-submit-quiz').addEventListener('click', () => {
        evaluateQuizAnswers();
    });

    // Cancel Quiz button
    document.getElementById('btn-cancel-quiz').addEventListener('click', () => {
        initQuizTab();
    });

    // Results panel back clicks
    document.getElementById('btn-quiz-retry').addEventListener('click', () => {
        initQuizTab();
    });

    document.getElementById('btn-quiz-go-map').addEventListener('click', () => {
        navigateTo('map');
    });

    document.getElementById('btn-quiz-go-chat').addEventListener('click', () => {
        navigateTo('chat');
    });
}

function startActiveQuiz(topic, difficulty) {
    const subj = KNOWLEDGE_BASE[STATE.activeSubject];
    
    // Find quiz data or build fallback
    let quizData = (subj.quizzes || []).find(q => q.topic === topic);
    if (!quizData) {
        // Generate mock fallback questions
        quizData = {
            topic: topic,
            questions: [
                {
                    type: "mcq",
                    q: `Which of the following is a primary characteristic of ${topic}?`,
                    options: ["Decreases general query overhead", "Locks concurrency processes", "Increases duplicate data records", "Provides redundant server states"],
                    correctIndex: 0,
                    explanation: `${topic} is designed to organize records and optimize operations for faster system feedback.`
                },
                {
                    type: "tf",
                    q: `True or False: ${topic} is considered a prerequisite for basic workspace setups.`,
                    options: ["True", "False"],
                    correctIndex: 0,
                    explanation: "Correct! Standard syllabus frameworks verify this topic as a core component."
                }
            ]
        };
    }

    STATE.activeQuiz = {
        data: quizData,
        userAnswers: new Array(quizData.questions.length).fill(null)
    };

    // Render active quiz layout
    document.getElementById('quiz-setup-card').style.display = 'none';
    document.getElementById('quiz-active-card').style.display = 'block';
    
    document.getElementById('quiz-active-title').textContent = `${quizData.topic} Quiz (${difficulty.toUpperCase()})`;
    document.getElementById('quiz-progress-indicator').textContent = `Total Questions: ${quizData.questions.length}`;

    const container = document.getElementById('quiz-questions-list');
    container.innerHTML = "";

    quizData.questions.forEach((qItem, qIdx) => {
        const qDiv = document.createElement('div');
        qDiv.className = "quiz-question-item";
        qDiv.innerHTML = `<h4>Question ${qIdx + 1}: ${qItem.q}</h4>`;

        if (qItem.type === 'mcq' || qItem.type === 'tf') {
            const optionsGroup = document.createElement('div');
            optionsGroup.className = "quiz-options-group";
            
            qItem.options.forEach((optText, oIdx) => {
                const label = document.createElement('label');
                label.className = "quiz-option-label";
                label.innerHTML = `
                    <input type="radio" name="question_${qIdx}" value="${oIdx}">
                    <span>${optText}</span>
                `;
                
                label.querySelector('input').addEventListener('change', () => {
                    // Reset selected styles
                    optionsGroup.querySelectorAll('.quiz-option-label').forEach(l => l.classList.remove('selected'));
                    label.classList.add('selected');
                    STATE.activeQuiz.userAnswers[qIdx] = oIdx;
                });

                optionsGroup.appendChild(label);
            });
            qDiv.appendChild(optionsGroup);
        } else if (qItem.type === 'short') {
            const textInput = document.createElement('textarea');
            textInput.className = "quiz-text-answer";
            textInput.placeholder = "Type your answer here...";
            textInput.rows = 2;
            textInput.addEventListener('input', (e) => {
                STATE.activeQuiz.userAnswers[qIdx] = e.target.value;
            });
            qDiv.appendChild(textInput);
        }

        container.appendChild(qDiv);
    });
}

function evaluateQuizAnswers() {
    const quiz = STATE.activeQuiz;
    if(!quiz) return;

    let score = 0;
    const breakdownContainer = document.getElementById('quiz-breakdown');
    breakdownContainer.innerHTML = "";

    quiz.data.questions.forEach((qItem, idx) => {
        const userAns = quiz.userAnswers[idx];
        let isCorrect = false;
        let userDisplayStr = "";
        let correctDisplayStr = "";

        if (qItem.type === 'mcq' || qItem.type === 'tf') {
            isCorrect = (userAns === qItem.correctIndex);
            userDisplayStr = userAns !== null ? qItem.options[userAns] : "No Answer";
            correctDisplayStr = qItem.options[qItem.correctIndex];
        } else if (qItem.type === 'short') {
            const cleanUser = (userAns || "").toLowerCase().trim();
            const cleanCorrect = qItem.correctAnswer.toLowerCase().trim();
            isCorrect = cleanUser.includes(cleanCorrect);
            userDisplayStr = userAns || "Empty";
            correctDisplayStr = qItem.correctAnswer;
        }

        if(isCorrect) score++;

        // Add breakdown item card
        const card = document.createElement('div');
        card.className = `breakdown-item ${isCorrect ? 'correct' : 'incorrect'}`;
        card.innerHTML = `
            <div class="breakdown-item-header">
                <span>${isCorrect ? 'Correct' : 'Incorrect'}</span>
                ${!isCorrect ? `<button class="btn btn-sm btn-purple btn-explain-error" data-idx="${idx}"><i data-lucide="sparkles"></i> Explain Wrong Answer</button>` : ''}
            </div>
            <p><strong>Q:</strong> ${qItem.q}</p>
            <div class="breakdown-ans-row"><strong>Your Answer:</strong> ${userDisplayStr}</div>
            <div class="breakdown-ans-row"><strong>Correct Answer:</strong> ${correctDisplayStr}</div>
            <p style="margin-top:10px; color:var(--text-muted); font-size:12px;"><strong>AI Explanation:</strong> ${qItem.explanation}</p>
        `;
        
        breakdownContainer.appendChild(card);
    });

    const percent = Math.round((score / quiz.data.questions.length) * 100);
    
    // Update Score Circle UI
    document.getElementById('quiz-score-percent').textContent = `${percent}%`;
    document.getElementById('quiz-score-fraction').textContent = `${score} / ${quiz.data.questions.length} Correct`;

    // Feedback message
    const feedbackTitle = document.getElementById('result-feedback-title');
    const feedbackText = document.getElementById('result-feedback-text');

    if(percent === 100) {
        feedbackTitle.textContent = "Perfect Score! 🌟";
        feedbackText.textContent = "Outstanding job! You have fully mastered this topic module.";
    } else if(percent >= 50) {
        feedbackTitle.textContent = "Good effort! 👍";
        feedbackText.textContent = "You understand the fundamentals, but review the explanations to polish your knowledge.";
    } else {
        feedbackTitle.textContent = "Keep learning! 📚";
        feedbackText.textContent = "Don't worry, mistakes help you learn. Take a look at the concept map and try again.";
    }

    // Toggle pages
    document.getElementById('quiz-active-card').style.display = 'none';
    document.getElementById('quiz-results-card').style.display = 'block';

    // Set topic concept as mastered if score is >= 70%
    if(percent >= 70) {
        if(STATE.conceptCompletion[STATE.activeSubject][quiz.data.topic] !== undefined) {
            STATE.conceptCompletion[STATE.activeSubject][quiz.data.topic] = true;
            updateOverallStats();
        }
    }

    // Bind "Explain Wrong Answer" buttons
    document.querySelectorAll('.btn-explain-error').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-idx'));
            const qItem = quiz.data.questions[idx];
            const correctAnsStr = qItem.type === 'mcq' || qItem.type === 'tf' ? qItem.options[qItem.correctIndex] : qItem.correctAnswer;
            
            navigateTo('chat');
            submitUserMessage(`Explain why the question "${qItem.q}" has the correct answer "${correctAnsStr}" and how to understand it.`);
        });
    });

    lucide.createIcons();
}

// ==========================================================================
// 11. STUDENT PROGRESS PORTAL
// ==========================================================================
function renderProgressPage() {
    const subjKey = STATE.activeSubject;
    const completion = STATE.conceptCompletion[subjKey];
    
    const total = Object.keys(completion).length;
    const completed = Object.values(completion).filter(v => v === true).length;
    const accuracy = subjKey === 'dbms' ? '82%' : subjKey === 'os' ? '70%' : 'N/A';

    document.getElementById('prog-topics-completed').textContent = `${completed} / ${total} Topics`;
    document.getElementById('prog-streak').textContent = document.getElementById('streak-count').textContent;
    document.getElementById('prog-avg-score').textContent = accuracy;

    // Fill Concept completion checklists
    const listContainer = document.getElementById('completion-log-list');
    listContainer.innerHTML = "";

    for(let name in completion) {
        const isFinished = completion[name];
        const logItem = document.createElement('div');
        logItem.className = "log-item";
        logItem.innerHTML = `
            <div class="log-concept-info">
                <i data-lucide="${isFinished ? 'check-circle-2' : 'circle'}" style="color: ${isFinished ? 'var(--success)' : 'var(--text-muted)'}"></i>
                <div>
                    <h5>${name}</h5>
                    <p>Academic Level: ${KNOWLEDGE_BASE[subjKey].concepts[name]?.difficulty.toUpperCase() || 'EASY'}</p>
                </div>
            </div>
            <span class="log-date">${isFinished ? 'Mastered ✓' : 'In Progress'}</span>
        `;
        listContainer.appendChild(logItem);
    }
    lucide.createIcons();
}

// ==========================================================================
// 12. FACULTY CURRICULUM ADMIN PANEL
// ==========================================================================
const MOCK_NLP_EXTRACTIONS = [
    { name: "ACID Properties", parent: "Transactions", confidence: "98%", status: "Pending approval" },
    { name: "Boyce-Codd Normal Form", parent: "Normalization", confidence: "94%", status: "Pending approval" },
    { name: "Natural Joins", parent: "Joins", confidence: "87%", status: "Pending approval" }
];

function renderFacultyExtractedTable() {
    const tbody = document.getElementById('extracted-tbody');
    tbody.innerHTML = "";

    MOCK_NLP_EXTRACTIONS.forEach((item, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${item.name}</strong></td>
            <td>${item.parent}</td>
            <td><span class="confidence-badge">${item.confidence}</span></td>
            <td>
                <div class="table-actions">
                    <button class="btn btn-sm btn-primary btn-approve-node" data-idx="${idx}"><i data-lucide="check"></i> Approve</button>
                    <button class="btn btn-sm btn-outline btn-delete-node" data-idx="${idx}"><i data-lucide="trash-2"></i> Reject</button>
                </div>
            </td>
        `;
        
        tr.querySelector('.btn-approve-node').addEventListener('click', () => {
            approveExtractedConcept(idx);
        });

        tr.querySelector('.btn-delete-node').addEventListener('click', () => {
            rejectExtractedConcept(idx);
        });

        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

function approveExtractedConcept(idx) {
    const item = MOCK_NLP_EXTRACTIONS[idx];
    if(!item) return;

    // Add node structure to core active DB
    const activeSubj = STATE.activeSubject;
    
    KNOWLEDGE_BASE[activeSubj].concepts[item.name] = {
        name: item.name,
        difficulty: "medium",
        definition: `NLP Extracted Concept matching parent node <strong>${item.parent}</strong>.`,
        explanation: `Analogy: This concept describes sub-operations within the scope of ${item.parent}.`,
        example: `Usage context for ${item.name} in relational systems.`,
        related: [item.parent],
        coords: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 100 }
    };

    // Make completion tracker entry
    STATE.conceptCompletion[activeSubj][item.name] = false;

    // Remove from mock NLP table
    MOCK_NLP_EXTRACTIONS.splice(idx, 1);
    
    renderFacultyExtractedTable();
    alert(`Successfully published "${item.name}" concept node to student maps!`);
}

function rejectExtractedConcept(idx) {
    MOCK_NLP_EXTRACTIONS.splice(idx, 1);
    renderFacultyExtractedTable();
}

function initFacultyExtractor() {
    const textPaste = document.getElementById('notes-text-paste');
    const extractBtn = document.getElementById('btn-extract-concepts');
    const progressDiv = document.getElementById('extraction-progress');
    const progressBar = document.getElementById('extraction-progress-bar');
    const statusText = document.getElementById('extraction-status-text');
    const percentText = document.getElementById('extraction-percent');

    extractBtn.addEventListener('click', () => {
        const text = textPaste.value.trim();
        if(!text) {
            alert("Please paste text before clicking extract.");
            return;
        }

        // Trigger simulation uploader loader
        progressDiv.style.display = 'block';
        let progress = 0;
        progressBar.style.width = '0%';
        
        const interval = setInterval(() => {
            progress += 10;
            progressBar.style.width = `${progress}%`;
            percentText.textContent = `${progress}%`;

            if(progress === 20) statusText.textContent = "Scanning syntax structures...";
            if(progress === 50) statusText.textContent = "Running Named Entity Recognition (NER)...";
            if(progress === 80) statusText.textContent = "Constructing Parent-Child links...";

            if (progress >= 100) {
                clearInterval(interval);
                progressDiv.style.display = 'none';
                
                // Add new mock items to extracted list table
                MOCK_NLP_EXTRACTIONS.push(
                    { name: "Concurrency Control", parent: "Transactions", confidence: "92%", status: "Pending approval" },
                    { name: "Query Optimizer", parent: "DBMS", confidence: "85%", status: "Pending approval" }
                );
                
                renderFacultyExtractedTable();
                textPaste.value = "";
                alert("Simulated generative NLP extraction finished! Verify the concepts below.");
            }
        }, 150);
    });
}


// ==========================================================================
// 13. BOOTSTRAP INITIALIZATION ON LOAD
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Icons
    lucide.createIcons();

    // Start Modules
    initAuth();
    initRouter();
    initChatForm();
    initMapInteractions();
    initResourcesActions();
    initQuizEngine();
    initFacultyExtractor();

    // Set Default views
    syncSubjectView(STATE.activeSubject);
    renderConceptMap();
});
