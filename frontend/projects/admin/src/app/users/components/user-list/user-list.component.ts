import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { materialImports } from '../../../shared/imports/material.imports';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  imports: [...materialImports, CommonModule, FormsModule],
  providers: [UserService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  searchTerm = '';
  users: User[] = [];
  displayedColumns = ['name', 'email', 'role', 'actions'];

  constructor(private readonly router: Router,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      console.log('users: ', users);
      this.users = users;
    });
  }

  get filteredUsers() {
    if (!this.searchTerm) return this.users;
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onAddUser() {
    // Example: navigate to user add page
    this.router.navigate(['/admin/users/add']);
  }

  onView(user: any) {
    // Example: navigate to user view page
    this.router.navigate(['/admin/users/view', btoa(user.id.toString())]);
  }

  onEdit(user: any) {
    // Example: navigate to user edit page
    this.router.navigate(['/admin/users/edit', btoa(user.id.toString())]);
  }

  onDelete(user: any) {
    // Open confirmation dialog or handle delete
  }
}
