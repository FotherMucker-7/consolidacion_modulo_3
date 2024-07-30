document.addEventListener('DOMContentLoaded', function() {
    const chatItems = document.querySelectorAll('.chat-sidebar__item');

    chatItems.forEach((item, index) => {
        const lastMessageTime = item.getAttribute('data-last-message');
        const unread = item.getAttribute('data-unread') === 'true';
        const lastMessageDate = new Date(lastMessageTime);
        const now = new Date();
        
        let displayTime;
        if (lastMessageDate.toDateString() === now.toDateString()) {
            displayTime = lastMessageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } else {
            displayTime = lastMessageDate.toLocaleDateString();
        }

        item.querySelector('.chat-last-message-time').textContent = displayTime;

        const nameSpan = item.querySelector('.ms-2 span');
        if (unread) {
            nameSpan.classList.add('font-weight-bold');
            item.classList.add('unread'); 
        }

        item.addEventListener('click', function() {
            nameSpan.classList.remove('font-weight-bold');
            this.classList.remove('unread');
            this.setAttribute('data-unread', 'false');
        });

        
        if (index < 2) {
            nameSpan.classList.add('font-weight-bold');
            item.classList.add('unread');
        }
    });

    
    const messages = document.querySelectorAll('.message');
    let hour = 14;
    let minute = 30;

    messages.forEach((message, index) => {
        const timeSpan = message.querySelector('.message__time');
        if (timeSpan) {
            const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            timeSpan.textContent = timeString;

            minute += 2;
            if (minute >= 60) {
                minute = 0;
                hour += 1;
            }
        }
    });
});
