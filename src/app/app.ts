import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // We need this for the *ngIf
import { GradeService } from './grade.service'; // Import our service

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule], // Added CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  studentName: string = '';
  marks: number | null = null;
  grade: string = '';

  // Inject the GradeService
  constructor(private gradeService: GradeService) {}

  generateGrade() {
    if (this.marks !== null && this.marks >= 0 && this.marks <= 100) {
      this.grade = this.gradeService.calculateGrade(this.marks);
    } else {
      alert('Please enter valid marks between 0 and 100');
    }
  }
}