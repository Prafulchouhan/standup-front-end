import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css'],
  animations: [
    trigger('buttonVisibility', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', animate('150ms ease-in')),
      transition('visible => hidden', animate('150ms ease-out'))
    ])
  ]
})
export class SidenavbarComponent implements OnInit {
  isOpen: boolean = false;
  buttonState = 'visible'; // Make sure this property is declared
  
  teamspaces = [
    {
      name: 'jespers',
      selected: true,
      standup: [
        { id: '1', title: 'Stand up meeting' },
        { id: '2', title: 'Lunch break' },
      ],
    },
    {
      name: 'tech visads',
      selected: true,
      standup: [
        { id: '1', title: 'Stand up meeting' },
        { id: '2', title: 'Lunch break' },
      ],
    },
    {
      name: 'jespers',
      selected: true,
      standup: [
        { id: '1', title: 'Stand up meeting' },
        { id: '2', title: 'Lunch break' },
      ],
    },
    
  ];

  constructor() {}

  ngOnInit(): void {}


  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.buttonState = this.isOpen ? 'hidden' : 'visible';
  }

  onMouseEnter() {
    if (this.isOpen) {
      this.buttonState = 'visible';
    }
  }

  onMouseLeave() {
    if (this.isOpen) {
      this.buttonState = 'hidden';
    }
  }

  getRandomColor(): string {
    const getDarkComponent = () => Math.floor(Math.random() * 300); // Adjust this value for darkness

    let darkRed, darkGreen, darkBlue;

    do {
      darkRed = getDarkComponent();
      darkGreen = getDarkComponent();
      darkBlue = getDarkComponent();
    } while (this.isTooLight(darkRed, darkGreen, darkBlue));

    return `rgb(${darkRed},${darkGreen},${darkBlue})`;
  }

  isTooLight(red: number, green: number, blue: number): boolean {
    return (red + green + blue) / 3 > 180;
  }
}
