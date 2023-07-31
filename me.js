let taskIDCounter = 0;
const taskList = [];

const todoListElement = document.querySelector("#todo-list");

const TASK_STATUS = Object.freeze({
  todo: "todo",
  done: "done",
});

function taskFactory(text = "", status = TASK_STATUS.todo) {
  if (typeof text !== "string") {
    return;
  }

  if (status !== TASK_STATUS.todo && status !== TASK_STATUS.done) {
    return;
  }

  const taskObject = {
    id: `tasks-uuid-${taskIDCounter}`,
    text,
    status, // status: status
  };

  taskIDCounter++;

  return taskObject;
                                                                 }

function renderTask(taskObject) {
  if (!taskObject || typeof taskObject !== "object") {
    return;
  }

  const li = document.createElement("li");
  //افزودن کلاس هاس تیلویند بریا استایل دهی به لیست آیتم
  li.classList.add("rounded-xl", "p-2", "mt-1", "flex", "justify-between");
  // ریختن مقدار متن تسک داخل یک تگ P
  const p = document.createElement("p");
  p.innerHTML = taskObject.text;
 // افزودن آیکن چک و دیلت و استایل دهی
  const div = document.createElement("div");
  const check = document.createElement("span");
  check.classList.add("fa", "fa-check-circle", "text-green-500");
  const deleteBtn = document.createElement("span");
  deleteBtn.classList.add("fa", "fa-minus-circle", "text-red-500");
  // استایل دهی رنگ و خط روی متن در حالت های انجام شده یا در دست اقدام برای تسک ها
  if (taskObject.status === TASK_STATUS.todo) {
    li.classList.add("bg-gray-100");
  } else if (taskObject.status === TASK_STATUS.done) {
    li.classList.add("bg-green-100");
    p.classList.add("line-through");
  }
  // ساخت سلسله مراتب لیست آیتم ها- اول تگ پی به ال آی افزوده میشود 
  //سپس آیکن ها به دیو افزوده میشود و در نهایت کل دیو به عنوان فرزند ال آی به آن افزوده می شود.
  li.appendChild(p);
  div.appendChild(deleteBtn);
  div.appendChild(check);
  li.appendChild(div);
 // المان ال آی با استفاده از متغیرهای آرگومان ساخته شده و در نهایت به عنوان خروجی تابع برگردانده می شود.
  return li;
}
//این تابع کل آبجت های ساخته شده که در آرایه پوش شده اند را یکی یکی به ال آی تبدیل می کند و در نهایت در یو ال قرار می دهد.
function renderTasks() {
  
  todoListElement.innerHTML="";
  
  for (let i = 0; i < taskList.length; i += 1) {

    let renderedTask = renderTask(taskList[i]);
    //افزون ال آی ها به یو ال
    todoListElement.appendChild(renderedTask);
    
     
    
                                                }
  
                      }

function createTask(text = "") {
  
  //یک تسک آبجکت ایجاد میکند
  const task = taskFactory(text);
  //تسک آبجکت با نام تسک را به آرایه تسکها اضافه میکند
  taskList.push(task);
  
  //
  renderTasks();
  
 
}

const createTaskForm = document.querySelector("#createtoDo");

const createTaskInput = createTaskForm.querySelector("input");
const createTaskButton = createTaskForm.querySelector("button");

function createTaskHandler() {
  const value = createTaskInput.value;
  if (!value) {
    return;
  }
  createTask(value);
  // باکس متن هردفعه پس از فشردن دکمه خالی شود
  createTaskInput.value = "";
}

createTaskButton.addEventListener("click", createTaskHandler);
createTaskForm.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    createTaskHandler();
    event.preventDefault();
    // Trigger the button element with a click
    
                               }
});

