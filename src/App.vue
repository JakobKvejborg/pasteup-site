<script setup>
import './assets/css/style.css'

// Import reactive vars and functions from your external script
import './assets/css/style.css'
</script>

<template>
  <div class="container">
    <div class="card">

      <!-- Profile image -->
      <img class="profile-img" src="/src/assets/images/gustav.png" alt="Gustav Eriksen">

      <h1>PasteUp Media</h1>
      <p class="title">Content Specialist og Videograf</p>

      <p class="description">
        Underviser på fotograf- og videoudannelsen, fotograf af bryllupper og portrætter, og skaber af indhold for sociale medier.
      </p>

      <!-- Image examples -->
      <img class="example-img" src="/src/assets/images/billede1.jpg" alt="billede1">
      <img class="example-img" src="/src/assets/images/billede2.jpg" alt="billede2">
      <img class="example-img" src="/src/assets/images/billede3.jpg" alt="billede3">

      <!-- Contact Form -->
      <h2>Kontaktformular</h2>
      <form class="contact-form" action="https://formspree.io/f/maqlvppr" method="POST">
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
  </div>
</template>