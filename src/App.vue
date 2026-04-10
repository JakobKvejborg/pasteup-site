<script setup>
import './assets/css/style.css'

// Import reactive vars and functions from your external script
import './assets/css/style.css'
</script>

<template>
  <div class="container">

      <h1>GUSTAV ERIKSEN</h1>
      <p class="title">Content Specialist og Videograf</p>

      <!-- Image examples -->
      <div class="gallery">
        <img class="example-img" src="https://iili.io/BEXmdp2.jpg" alt="billede1">
        <img class="example-img" src="https://iili.io/BEX43ve.jpg" alt="billede2">
        <img class="example-img" src="https://iili.io/BEXrMIj.jpg" alt="billede3">
        <img class="example-img" src="https://iili.io/BEXgm0P.jpg" alt="billede4">
        <img class="example-img" src="https://iili.io/BEXp7N2.jpg" alt="billede5">
        <img class="example-img" src="https://iili.io/BEXmo2j.jpg" alt="billede6">
        <img class="example-img" src="https://iili.io/BEhot1f.jpg" alt="billede7">
        <img class="example-img" src="https://iili.io/BEhFdps.jpg" alt="billede8">
        <img class="example-img" src="https://iili.io/BEhFBG2.jpg" alt="billede9">
        <img class="example-img" src="https://iili.io/BEXm4n9.jpg" alt="billede10">
      </div>

      <!-- Contact Form -->
      <h2>Kontaktformular</h2>
      <form class="contact-form" action="https://formspree.io/f/mlgokldn" method="POST">
        <input type="text" name="name" placeholder="Navn" required>
        <input type="email" name="email" placeholder="Email" required>
        <textarea name="message" rows="4" placeholder="Besked" required></textarea>
        <button type="submit">Send</button>
      </form>

      <!-- Links -->
      <div class="links">
        <a href="mailto:g@pasteup.media" target="_blank">Email</a>
        <a href="https://www.linkedin.com/in/g-eriksen93/" target="_blank">LinkedIn</a>
        <a href="https://www.instagram.com/glol.media/" target="_blank">Instagram</a>
      </div>
      
      <div class="footer">
        <p>&copy; 2026 PasteUp Media - Alle rettigheder forbeholdes - CVR 43564986</p>
      </div>

  </div>
</template>