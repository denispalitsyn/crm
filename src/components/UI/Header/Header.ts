import './Header.css';

class Header {
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement('header');
    this.element.classList.add('header');
    this.element.innerHTML = `
      <h1>Моя CRM Система</h1>
      <nav>
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#">Студенты</a></li>
          <li><a href="#">Расписание</a></li>
        </ul>
      </nav>
    `;
  }

  render(targetElement: HTMLElement) {
    targetElement.appendChild(this.element);
  }
}

export default Header;
