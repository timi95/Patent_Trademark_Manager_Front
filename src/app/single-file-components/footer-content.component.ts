import { Component } from '@angular/core';

@Component({
  selector: 'footer-content',
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
          background-color: #26262b;
          color: #fff;
        }
        .header-nav> h1 {
          word-wrap: break-word;

        }
                
    `
    ]
})
export class FoterContentComponent {
  title = 'This is the Footer Content';
}
