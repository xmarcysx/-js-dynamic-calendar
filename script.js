const currentData = document.querySelector('.current-date');
const daysTag = document.querySelector('.days');
const prevNextIcon = document.querySelectorAll('.icons span');

//current date
let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

const months = [
  'Styczeń',
  'Luty',
  'Marzec',
  'Kwiecień',
  'Maj',
  'Czerwiec',
  'Lipiec',
  'Sierpień',
  'Wrzesień',
  'Październik',
  'Listopad',
  'Grudzień',
];

const renderCalendar = () => {
  let liTag = '';
  let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
  console.log(firstDayOfMonth);

  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  console.log(lastDateOfMonth);

  let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
  console.log(lastDayOfMonth);

  let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
  console.log(lastDateOfLastMonth);

  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? 'active'
        : '';

    liTag += `<li class=${isToday}>${i}</li>`;
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }
  currentData.innerHTML = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener('click', () => {
    currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }

    renderCalendar();
  });
});
