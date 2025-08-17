document.querySelectorAll('.sidebar-menu button').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.sidebar-menu button').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

const sidebar = document.querySelector('.sidebar');
const hideBtn = document.getElementById('hide-sidebar-btn');

hideBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});
