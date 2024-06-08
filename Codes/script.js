        // JavaScript ile sayfaları yönlendirme
        const genel = document.getElementById('genel');
        const syf2 = document.getElementById('syf2');
        const syf3 = document.getElementById('syf3');

        document.querySelector('.navbar').addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.href.includes('genel')) {
                genel.style.display = 'block';
                syf2.style.display = 'none';
                syf3.style.display = 'none';
                ana.style.display = 'none';
            } else if (e.target.href.includes('syf2')) {
                genel.style.display = 'none';
                syf2.style.display = 'block';
                syf3.style.display = 'none';
                ana.style.display = 'none';
            } else if (e.target.href.includes('syf3')) {
                genel.style.display = 'none';
                syf2.style.display = 'none';
                syf3.style.display = 'block';
                ana.style.display = 'none';
            } if (e.target.href.includes('ana')) {
                genel.style.display = 'none';
                syf2.style.display = 'none';
                syf3.style.display = 'none';
                ana.style.display = 'block';
            }
            
        });

        function checkLength() {
            var messageInput = document.getElementById('message');
            var charCount = document.getElementById('charCount');
            var maxLength = 159;
    
            if (messageInput.value.length > maxLength) {
                messageInput.value = messageInput.value.substring(0, maxLength);
            }
    
            charCount.textContent = (maxLength - messageInput.value.length) + " karakter kullanılabilir";
        }
// -------------------------------------------------

// Odaların bulunduğu div'i seç
var roomsDiv = document.getElementById('odalargenek');

// Odaların listesini al
var rooms = roomsDiv.getElementsByClassName('room');

// Seçilen odanın adını tutacak değişken
var selectedRoomName = "";

// Her bir oda için tıklama olayı ekle
for (var i = 0; i < rooms.length; i++) {
    rooms[i].addEventListener('click', function() {
        // Tıklanan oda adını al ve selectedRoomName'e ata
        selectedRoomName = this.textContent;
        
        // Seçilen oda adını textarea'ya yaz
        document.getElementById('room-name').value = selectedRoomName;
        
        // Seçilen oda adıyla eşleşen mesajları göster
        showMessages(selectedRoomName);
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".check");
    button.addEventListener("click", function() {
        const roomName = document.querySelector("#room-name").value;
        fetchMessages(roomName);
    });
});

