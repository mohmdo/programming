// script.js
let notes = [
    { title: 'note 3', description: 'desc 3', date: '2023-07-22', completed: false },
    { title: 'note two', description: 'desc two', date: '2023-07-21', completed: true },
    { title: 'note one', description: 'desc one', date: '2023-07-20', completed: false }
  ];
  
  let currentFilter = 'all'; // Track the current filter
  
  function renderNotes() {
    const notesList = document.getElementById('notesList');
    const allCount = document.getElementById('allCount');
    const completedCount = document.getElementById('completedCount');
    const openCount = document.getElementById('openCount');
  
    notesList.innerHTML = '';
  
    let completedNotes = 0;
    let openNotes = 0;
  
    const filteredNotes = notes.filter(note => {
      if (currentFilter === 'completed') {
        return note.completed;
      } else if (currentFilter === 'open') {
        return !note.completed;
      }
      return true; // Show all if the filter is 'all'
    });
  
    filteredNotes.forEach((note, index) => {
      const noteItem = document.createElement('li');
      noteItem.classList.add('list-group-item');
      noteItem.innerHTML = `
        <div>
          <strong>${note.title}</strong><br>
          <small>${note.description}</small><br>
          <small>${note.date}</small>
        </div>
        <div class="note-actions">
          <input type="checkbox" ${note.completed ? 'checked' : ''} onchange="toggleCompleted(${index})">
          <i class="fas fa-times delete-icon" onclick="deleteNote(${index})"></i>
        </div>
      `;
      notesList.appendChild(noteItem);
  
      if (note.completed) {
        completedNotes++;
      } else {
        openNotes++;
      }
    });
  
    allCount.textContent = notes.length;
    completedCount.textContent = completedNotes;
    openCount.textContent = openNotes;
  }
  
  function addNote() {
    const title = document.getElementById('noteTitle').value;
    const description = document.getElementById('noteDescription').value;
    const date = new Date().toISOString().split('T')[0];
  
    notes.push({ title, description, date, completed: false });
    renderNotes();
  }
  
  function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
  }
  
  function toggleCompleted(index) {
    notes[index].completed = !notes[index].completed;
    renderNotes();
  }
  
  function sortNotes() {
    const sortBy = document.getElementById('sortNotes').value;
    notes.sort((a, b) => sortBy === 'latest' ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date));
    renderNotes();
  }
  
  // Filter event handlers
  document.getElementById('allFilter').addEventListener('click', function() {
    currentFilter = 'all';
    renderNotes();
  });
  
  document.getElementById('completedFilter').addEventListener('click', function() {
    currentFilter = 'completed';
    renderNotes();
  });
  
  document.getElementById('openFilter').addEventListener('click', function() {
    currentFilter = 'open';
    renderNotes();
  });
  
  document.getElementById('noteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    addNote();
    this.reset();
  });
  
  document.getElementById('sortNotes').addEventListener('change', sortNotes);
  
  // Initial render
  renderNotes();
  