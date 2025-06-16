async function loadSchedule() {
  const res = await fetch('../data/sample.json');
  const data = await res.json();
  const container = document.getElementById('schedule');

  const table = document.createElement('table');
  const header = document.createElement('tr');
  header.innerHTML = '<th>教室</th><th>時間</th><th>状態</th>';
  table.appendChild(header);

  data.entries.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${item.room}</td><td>${item.time}</td><td>${item.status}</td>`;
    table.appendChild(tr);
  });

  container.appendChild(table);
}

loadSchedule();
