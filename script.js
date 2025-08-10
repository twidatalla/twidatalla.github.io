document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.pubs li').forEach(li => {
    const match = li.textContent.match(/https?:\/\/\S+/);
    if (match && !li.querySelector('a[data-autolink]')) {
      const a = document.createElement('a');
      a.href = match[0];
      a.textContent = ' [link]';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('data-autolink','1');
      li.appendChild(a);
    }
  });
});