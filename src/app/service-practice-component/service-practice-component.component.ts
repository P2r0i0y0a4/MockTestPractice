import { Component, inject, OnInit } from "@angular/core";
import { ServicePracticeService, user } from "../service-practice.service";

@Component({
  selector: "app-service-practice-component",
  templateUrl: "./service-practice-component.component.html",
  styleUrls: ["./service-practice-component.component.css"],
})
export class ServicePracticeComponentComponent implements OnInit {
  users: user[] = [];
  singleUser: user | null = null;

  private service = inject(ServicePracticeService);

  ngOnInit(): void {
    this.loadUsers();
    this.loadUserById();
  }
  loadUsers(): void {
    this.service.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  loadUserById(): void {
    this.service.getUserById(1).subscribe((data) => {
      this.singleUser = data;
    });
  }

  // add to list
  newUser: user = { id: 0, name: "", email: "" };

  addUser(): void {
    this.service.addUser(this.newUser).subscribe((response) => {
      console.log("User added:", response);
      this.users.push(response);
    });
  }

  selectedUser: user | null = null;

  // Step 1 — select user to edit
  selectUser(user: user): void {
    this.selectedUser = { ...user }; // copy so original not changed
  }

  // Step 2 — save changes
  saveUser(): void {
    if (this.selectedUser) {
      this.service
        .updateUser(this.selectedUser.id, this.selectedUser)
        .subscribe((updated) => {
          console.log("Updated:", updated);
          
          // update in local list
          this.users = this.users.map((u) =>
            u.id === updated.id ? updated : u,
          );
          this.selectedUser = null; // clear form
        });
    }
  }

  deleteUser(id: number): void {
    this.service.deleteUser(id).subscribe(() => {
      // remove from local list
      this.users = this.users.filter((u) => u.id !== id);
      console.log("Deleted user:", id);
    });
  }
}
