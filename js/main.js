window.onload = () => {
 'use strict';
 if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('./sw.js')
 .then(() => console.log('Service Worker registered successfully.'))
 .catch((error) => console.error('Service Worker registration failed:', error));
 }
};

document.querySelector("#main-link").addEventListener("click", (e) => {
    document.querySelector(".title").innerHTML="Hello World!";
    document.querySelector("#p1").innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry...";

});


document.querySelector("#subpage-link").addEventListener("click", (e) => {
    document.querySelector(".title").innerHTML=" ";
    document.querySelector("#p1").innerHTML=`  
     <div class="przepis">
        <div class="przepis-zawartosc">
        <img src="nalesniki.jpg" alt="nalesniki" class="img" />
          <table class="tabelka">
            <tr>
              <th>Nalesniki</th>
            </tr>
            <tr>
              <th>
                <li>250g maki</li>
                <li>250ml mleka</li>
                <li>150ml wody</li>
                <li>20ml oleju</li>
                <li>2 jajka</li>
                <li>2 lyzeczki cukru</li>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </div>`

});