* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;

    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 450px;

    background-color: white;

    padding: 30px;

    border-radius: 10px;

    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;

    margin-bottom: 25px;
}

.input-section {
    display: flex;

    gap: 10px;
}

#taskInput {
    flex: 1;

    padding: 12px;

    border: 1px solid #ccc;

    border-radius: 5px;

    font-size: 16px;
}

#addButton {
    padding: 12px 20px;

    border: none;

    border-radius: 5px;

    background-color: #333;

    color: white;

    cursor: pointer;
}

#addButton:hover {
    background-color: #555;
}

#taskList {
    list-style: none;

    margin-top: 25px;
}

.task {
    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 12px;

    margin-bottom: 10px;

    background-color: #f5f5f5;

    border-radius: 5px;
}

.task-text {
    cursor: pointer;
}

.completed {
    text-decoration: line-through;

    color: gray;
}

.delete-button {
    border: none;

    background-color: #d9534f;

    color: white;

    padding: 6px 10px;

    border-radius: 4px;

    cursor: pointer;
}

.delete-button:hover {
    background-color: #c9302c;
}
