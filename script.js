// Small enhancements
document.addEventListener('DOMContentLoaded', () => {
  // Turn plain publication items that contain URLs into links automatically
  document.querySelectorAll('.pubs li').forEach(li => {
    const urlMatch = li.textContent.match(/https?:\/\/\S+/);
    if (urlMatch) {
      const url = urlMatch[0];
      const a = document.createElement('a');
      a.href = url; a.textContent = ' [link]';
      a.rel = 'noopener noreferrer';
      a.target = '_blank';
      li.appendChild(a);
    }
  });
});
