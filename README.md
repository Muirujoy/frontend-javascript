# 0x04. TypeScript

This project is part of the **ALX Frontend JavaScript track**. It introduces the use of **TypeScript**, a strongly-typed superset of JavaScript, and reinforces concepts like interfaces, classes, namespaces, declaration merging, nominal typing, and module bundling using Webpack.

---

## 🛠️ General Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files must end with a new line
- All TypeScript files will be transpiled on **Ubuntu 18.04**
- All TypeScript files are tested using **Jest v24.9.\***
- A `README.md` file at the root of the project folder is **mandatory**
- All code should use the `.ts` extension
- The TypeScript compiler should **not show any warnings or errors**
- Configuration files included:
  - `package.json`
  - `.eslintrc.js`
  - `tsconfig.json`
  - `webpack.config.js`

---

## 📁 Project Structure

0x04-TypeScript/
├── task_0/
├── task_1/
├── task_2/
├── task_3/
├── task_4/
└── task_5/

yaml
Copy
Edit

---

## ✅ Tasks Completed

### Task 0: Creating an interface for a student
- Created a `Student` interface with `firstName`, `lastName`, `age`, `location`
- Created a student list and rendered it as an HTML table using plain JavaScript
- Used Webpack to bundle TypeScript without errors

📁 `task_0/js/main.ts`

---

### Task 1: Let's build a Teacher interface
- Defined a `Teacher` interface with required and optional properties
- Allowed dynamic attributes using index signature
- Extended `Teacher` to create a `Directors` interface

📁 `task_1/js/main.ts`

---

### Task 2: Advanced types Part 1
- Created `DirectorInterface` and `TeacherInterface`
- Implemented `Director` and `Teacher` classes
- Created a factory function `createEmployee` with conditional logic

📁 `task_2/js/main.ts`

---

### Task 3: Ambient Namespaces
- Defined custom types and interfaces in `interface.ts`
- Created ambient declarations in `crud.d.ts`
- Used triple-slash directives and imported types correctly
- Called and logged `insertRow`, `updateRow`, and `deleteRow`

📁 `task_3/js/main.ts`, `crud.d.ts`, `interface.ts`

---

### Task 4: Namespace & Declaration Merging
- Created a `Subjects` namespace with `Teacher`, `Subject`, `Cpp`, `Java`, and `React` classes
- Used declaration merging to add optional teaching experience fields
- Implemented `getRequirements` and `getAvailableTeacher` in each subject

📁 `task_4/js/subjects/`

---

### Task 5: Update main for task_4
- Exported constants for `Cpp`, `Java`, and `React`
- Created a `cTeacher` object and tested all methods with console output

📁 `task_4/js/main.ts`

---

### Task 6: Brand convention & Nominal typing
- Created `MajorCredits` and `MinorCredits` interfaces using branding
- Implemented type-safe `sumMajorCredits` and `sumMinorCredits` functions
- Used factory functions to construct strongly typed objects

📁 `task_5/js/main.ts`

---

## 🧪 Setup & Run

1. **Install dependencies**:
   ```bash
   npm install
Build a task:

bash
Copy
Edit
cd 0x04-TypeScript/task_3
npx webpack
Run in browser (if using HTML):

bash
Copy
Edit
open dist/index.html  # macOS
start dist/index.html # Windows
Run with Node (if compiled with tsc):

bash
Copy
Edit
npx tsc
node dist/main.js
⚙️ Tools & Configs
TypeScript

Webpack

ESLint (@typescript-eslint)

Jest (for testing)

Node.js

✍️ Author
Joy Muiru – ALX Software Engineering Student

