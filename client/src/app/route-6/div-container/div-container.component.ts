import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-div-container',
  templateUrl: './div-container.component.html',
  styleUrls: ['./div-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DivContainerComponent {
  constructor() {}

  count = 0;
  pageName="Route-6"

  @HostListener('window:scroll') onScroll(e: Event): void {
    this.createDivs();
  }

  createDivs() {
    this.count++;
    let divElement = document.createElement('div');
    divElement.style.height = '200px';
    divElement.style.width = '200px';
    divElement.style.display = 'flex';
    divElement.style.justifyContent = 'center';
    divElement.style.alignItems = 'center';

    divElement.style.border = '1px solid dodgerblue';

    let buttonContainer = document.createElement('div');
    divElement.appendChild(buttonContainer);

    var button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-sm');
    button.classList.add('btn-primary');
    button.innerHTML = `Button ${this.count}`;
    buttonContainer.appendChild(button);

    // 3. Add event handler
    button.addEventListener('click', () => {
      alert(`Button in ${button.innerHTML.split(' ')[1]} div clicked!`);
    });

    // append div element to document
    document.getElementById('divContainer')?.appendChild(divElement);
  }
}
