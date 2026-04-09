<script setup>
import './assets/css/style.css'

// Import reactive vars and functions from your external script
import './assets/css/style.css'
</script>

<template>
  <div class="container">

      <h1>PASTEUP MEDIA</h1>
      <p class="title">Content Specialist og Videograf</p>

      <!-- <p class="description">
        Underviser på fotograf- og videoudannelsen, fotograf af bryllupper og portrætter, og skaber af indhold for sociale medier.
      </p> -->

      <!-- Image examples -->
      <div class="gallery">
        <img class="example-img" src="https://images.unsplash.com/photo-1773332585749-5146862ba746?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="billede1">
        <img class="example-img" src="https://images.unsplash.com/photo-1775522547738-30e2910b2a96?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="billede2">
        <img class="example-img" src="https://images.unsplash.com/photo-1773332585749-5146862ba746?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="billede3">
        <img class="example-img" src="https://images.unsplash.com/photo-1773332585749-5146862ba746?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="billede4">
        <img class="example-img" src="https://images.unsplash.com/photo-1773332585749-5146862ba746?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="billede5">
        <img class="example-img" src="https://images.unsplash.com/photo-1773332585749-5146862ba746?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="billede6">
        <img class="example-img" src="https://images.unsplash.com/photo-1773332585749-5146862ba746?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="billede7">
        <img class="example-img" src="https://images.unsplash.com/photo-1773332585749-5146862ba746?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="billede8">
      </div>

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
</template>