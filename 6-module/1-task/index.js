/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this._elem = this.render();
  }
  get elem() {
    return this._elem;
  }
  renderHeader() {
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const headerTitles = ['Имя', 'Возраст', 'Зарплата', 'Город', 'Закрыть'];
    for (let headerCell of headerTitles) {
      const th = document.createElement('th');
      th.textContent = headerCell;
      tr.append(th);
    }
    thead.append(tr);
    return thead;
  }
  renderBody() {
    const tbody = document.createElement('tbody');
    for (let row of this.rows) {
      const tr = document.createElement("tr");
      for (let cell in row) {
        const td = document.createElement("td");
        td.textContent = row[cell];
        tr.append(td);
      }
      const tdButton = document.createElement("td");
      tdButton.append(this.renderButton(tr));
      tr.append(tdButton);
      tbody.append(tr);
    }
    return tbody;
  }
  renderButton(tr) {
    const button = document.createElement('button');
    button.textContent = 'X';
    button.addEventListener('click', function() {
      tr.remove();
    });
    return button;
  }
  render() {
    const table = document.createElement('table');
    table.append(this.renderHeader());
    table.append(this.renderBody());
    return table;
  }
}