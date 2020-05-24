import { Component } from '@angular/core';

@Component({
  selector: 'header-content',
  template:
  `
    <nav class="header-nav">
        <h1> {{title}}</h1>
    </nav>
  `,
  styles: [
    `
        .header-nav {
          display:flex;
          justify-content: center ;
          border: 1px solid black;
        }
        .header-nav> h1 {
          word-wrap: break-word;

        }
                
    `
    ]
})


export class HeaderContentComponent {
  title = 'Patent Trademark Manager';
}
