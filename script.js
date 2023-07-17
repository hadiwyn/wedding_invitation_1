var path = window.location.pathname;

// Mengubah konten elemen berdasarkan path URL
if (path === '/hadi') {
  document.getElementById('namatamu').textContent = 'Hadi';
} else if (path === '/arif') {
  document.getElementById('namatamu').textContent = 'Desi';
}