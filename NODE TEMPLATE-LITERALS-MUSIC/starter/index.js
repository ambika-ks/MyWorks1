// music should be an object with title, artist, and album properties
const music = {
  // code here
  title:'Sundariye Vaa',
  artist:'Franco',
  album:'Chembakame'
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
    ==============================
    <h2>Title : ${music.title}</h2>
    <p>Artist : ${music.artist}</p>
    <p>Album  : ${music.album}</p>
    ===============================
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

