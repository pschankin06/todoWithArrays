'use strict';

const STATUSES = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
}

const PRIORITY = {
    LOW: 'Low',
    HIGH: 'High'
}

const DEFAULT = {
    STATUS: STATUSES.TO_DO,
    PRIORITY: PRIORITY.LOW
}

const list = [{
    name: 'create a post',
    status: STATUSES.IN_PROGRESS,
    priority: PRIORITY.LOW
}, {
    name: 'test',
    status: STATUSES.DONE,
    priority: PRIORITY.HIGH
}]


function changeStatus(name, status) {
    let taskIndex = list.findIndex(item => item.name === name);
    list[taskIndex].status = status;
}

function changePriority(name, priority) {
    let taskIndex = list.findIndex(item => item.name === name);
    list[taskIndex].priority = priority;
}


function addTask(name) {
    list.push({
        name,
        status: DEFAULT.STATUS,
        priority: DEFAULT.PRIORITY
    });
}


function deleteTask(name) {
    let index = list.findIndex(item => item.name === name);
    if (index >= 0) {
        list.splice(index, 1);
    }
}

function showBy(property) {
    if (property === 'status') {
        let toDo = '';
        let inProgress = '';
        let done = '';
        for (let task of list) {
            if (task.status === STATUSES.TO_DO) {
                toDo += `\n'${task.name}'`;
            } else if (task.status === STATUSES.IN_PROGRESS) {
                inProgress += `\n'${task.name}'`;
            } else {
                done += `\n'${task.name}'`;
            }
        }
        console.log(`Todo:${toDo || '\n-'}`);
        console.log(`in Progress:${inProgress || '\n-'}`);
        console.log(`Done:${done || '\n'}`);
    } else if (property === 'priority') {
        let low = '';
        let high = '';
        for (let task of list) {
            if (task.priority === PRIORITY.LOW) {
                low += `\n'${task.name}'`;
            } else if (task.priority === PRIORITY.HIGH) {
                high += `\n'${task.name}'`;
            }
        }
        console.log(`low:${low || '\n-'}`);
        console.log(`high:${high || '\n-'}`);
    }
}

addTask('walk a dog');
addTask('create todo list');
changeStatus('walk a dog', 'Done');
changePriority('walk a dog', 'High');
deleteTask('walk a dog');
showBy('status');
showBy('priority');