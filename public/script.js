async function loadSchedule() {
  const res = await fetch('../data/sample.json');
  const data = await res.json();
  const container = document.getElementById('schedule');

  const times = Array.from(new Set(data.entries.map(e => e.time))).sort();
  const rooms = Array.from(new Set(data.entries.map(e => e.room)));

  const table = document.createElement('table');

  const headerRow = document.createElement('tr');
  headerRow.appendChild(document.createElement('th')); // empty corner
  times.forEach(t => {
    const th = document.createElement('th');
    th.textContent = t;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  rooms.forEach(room => {
    const row = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = room;
    row.appendChild(th);

    times.forEach(time => {
      const cell = document.createElement('td');
      const entry = data.entries.find(e => e.room === room && e.time === time);
      if (entry) {
        cell.textContent = entry.status;
        cell.className = entry.status.includes('空き') ? 'free' : 'busy';
      }
      row.appendChild(cell);
    });

    table.appendChild(row);
  });

  container.appendChild(table);
}

loadSchedule();
