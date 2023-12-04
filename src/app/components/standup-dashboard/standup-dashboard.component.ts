import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standup-dashboard',
  templateUrl: './standup-dashboard.component.html',
  styleUrls: ['./standup-dashboard.component.css']
})
export class StandupDashboardComponent implements OnInit {
  originalData: any[] = [
    { employee: 'praful chouhan', date: '20-11-2023', status: 'onLeave' },
    // Add more data as needed
  ];

  filters: any = {
    employee: '',
    startDate: null,
    endDate: null,
    status: '',
    onLeave: false,
    otherStatus: false,
  };

  filteredStatusOptions: string[] = ['onLeave', 'otherStatus', /* add more options as needed */];
  filteredData: any[] = []; // Populate this array with your actual data

  ngOnInit(): void {
    this.filteredData = [...this.originalData];
  }

  applyFilters(): void {
    this.filteredData = this.originalData.filter(item =>
      item.employee.toLowerCase().includes(this.filters.employee.toLowerCase()) &&
      item.date.includes(this.filters.date) &&
      item.status.toLowerCase().includes(this.filters.status.toLowerCase())
    );
  }

}
