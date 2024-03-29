import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { remult } from 'remult';
import { Task } from '../../shared/task';
import { tasksController } from '../../shared/tasksController';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit, OnDestroy {
  newTaskTitle = ""
  async addTask() {
    try {
      const newTask = await this.taskRepo.insert({ title: this.newTaskTitle })
      // this.tasks.push(newTask)
      this.newTaskTitle = ""
    } catch (error: any) {
      alert(error.message)
    }
  }
  async saveTask(task: Task) {
    try {
      await this.taskRepo.save(task)
    } catch (error: any) {
      alert(error.message)
    }
  }
  async deleteTask(task: Task) {
    await this.taskRepo.delete(task);
    this.tasks = this.tasks.filter(t => t !== task);
  }
  taskRepo = remult.repo(Task);
  tasks: Task[] = [];
  unsubscribe = () => {}
  ngOnInit() {
    this.unsubscribe = this.taskRepo
    .liveQuery({
      limit: 20,
      // orderBy: { completed: "asc" },
      // orderBy: { completed: "desc" },
      // where: { completed: true }
      // where: { completed: false }
    })
    .subscribe(info => (this.tasks = info.applyChanges(this.tasks)))
  }
  ngOnDestroy() {
    this.unsubscribe()
  }
  async setAllCompleted(completed: boolean) {
    await tasksController.setAllCompleted(completed)
  }
}

