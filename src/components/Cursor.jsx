import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');

    const onMove = (e) => {
      cursor.style.left = e.clientX - 6 + 'px';
      cursor.style.top = e.clientY - 6 + 'px';
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    };

    const onEnter = () => {
      cursor.style.transform = 'scale(2)';
      ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
    };
    const onLeave = () => {
      cursor.style.transform = 'scale(1)';
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
    };

    document.addEventListener('mousemove', onMove);

    const addListeners = () => {
      document.querySelectorAll('a,button').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    // Run now and also after short delay so React-rendered elements are available
    addListeners();
    const t = setTimeout(addListeners, 500);

    return () => {
      document.removeEventListener('mousemove', onMove);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  );
}
