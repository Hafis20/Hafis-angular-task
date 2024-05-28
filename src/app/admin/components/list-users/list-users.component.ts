import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { UsersListModel } from '../../models/admin.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit{

  dataSource!:UsersListModel[];
  constructor(private service:AdminService){}

  ngOnInit(): void {
    this.service.getUsers().subscribe({
      next:(res)=>{
        this.dataSource = res;
      }
    })
  }

  displayedColumns = ['_id','name','email','role'];
}
