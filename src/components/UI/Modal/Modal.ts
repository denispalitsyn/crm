import './Modal.css';

export class Modal {
  private modalElement: HTMLDivElement;
  private contentElement: HTMLDivElement;
  private titleElement: HTMLHeadingElement;

  constructor() {
    this.modalElement = document.createElement('div');
    this.modalElement.classList.add('modal');

    this.contentElement = document.createElement('div');
    this.contentElement.classList.add('modal-content');

    this.titleElement = document.createElement('h2');
    this.titleElement.classList.add('modal-title');

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.classList.add('modal-close');

    closeButton.addEventListener('click', () => {
      this.close();
    });

    this.contentElement.appendChild(this.titleElement);
    this.contentElement.appendChild(closeButton);

    this.modalElement.appendChild(this.contentElement);
  }

  open(title: string, content: HTMLElement): void {
    this.titleElement.textContent = title;
    this.contentElement.appendChild(content);

    this.modalElement.style.opacity = '0';

    document.body.appendChild(this.modalElement);

    setTimeout(() => {
      this.modalElement.style.opacity = '1';
    }, 0);
  }

  close(): void {
    this.modalElement.style.opacity = '0';

    setTimeout(() => {
      this.modalElement.remove();
      this.contentElement.innerHTML = '';
    }, 300);
  }
}
