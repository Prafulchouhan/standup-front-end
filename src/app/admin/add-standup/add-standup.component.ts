import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { Observable, map, startWith } from 'rxjs';


@Component({
  selector: 'app-add-standup',
  templateUrl: './add-standup.component.html',
  styleUrls: ['./add-standup.component.css'],
})
export class AddStandupComponent implements OnInit {
  standUpForm!: FormGroup;
  searchedUsers: User[] = []; // Array to hold searched users
  invitedUsers: User[] = [];
  currentTeamSpace : String  = "xyz";


  allUsers: User[] = [ /* Your user data here */ ];


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.standUpForm = this.fb.group({
      title: ['', Validators.required],
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      sprintId: ['', Validators.required],
      // Add other form controls as needed
    });
  }

  searchUsers(event: Event) : void {

    const searchTerm = (event.target as HTMLInputElement)?.value;
    // Implement your user search logic here (e.g., from a service)
    // For demonstration purposes, let's assume you have a list of users
    const allUsers: User[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
      // Add more users as needed
    ];

    // Filter users based on the search term
    this.searchedUsers = allUsers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return;
  }

  inviteUser(user: User) {
    // Check if the user is not already invited
    if (!this.invitedUsers.find((invitedUser) => invitedUser.id === user.id)) {
      this.invitedUsers.push(user);
    }
    this.searchedUsers = [];
  }

  removeInvitedUser(index: number) {
    this.invitedUsers.splice(index, 1);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    // if (this.standUpForm.valid) {
    //   const standUpData = this.standUpForm.value;
    //   this.standUpService.addStandUp(standUpData).subscribe(
    //     (response) => {
    //       console.log('StandUp added successfully:', response);
    //       // Optionally, you can navigate to a different route or show a success message.
    //     },
    //     (error) => {
    //       console.error('Error adding StandUp:', error);
    //       // Handle error, show error message, etc.
    //     }
    //   );
    // } else {
    //   // Handle form validation errors
    // }
  }
}
