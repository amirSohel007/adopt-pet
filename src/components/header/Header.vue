<template>
  <header class="pb-1 pt-1">
    <b-container>
      <b-navbar class="justify-content-between navbar navbar-expand p-0">
        <b-navbar-brand>
          <router-link to="/">
            <img
              src="https://lh3.googleusercontent.com/proxy/19JiU4xWz6KefpsMC6dnt676T1XthfCl-iqWSuiYWo3LcDgLNmXZagRZeaCby8PjLzXBZEE-uvI4Fon240l0dQm0qn-JbnY"
            />
          </router-link>
        </b-navbar-brand>

        <b-nav>
          <b-nav-item>
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/dogs">Dogs</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/cats">Cats</router-link>
          </b-nav-item>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/amirSohel007/adopt-pet"
              target="_blank"
              >GitHub Code</a
            >
          </li>
        </b-nav>
      </b-navbar>
    </b-container>
  </header>
</template>



<style>
/* IMPORT CSS FILE HERE */
@import "./Header.scss";
</style>

