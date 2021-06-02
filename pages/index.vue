<template>
  <div class="container">
    <nav class="fixed w-full z-50 bg-transparent px-5 h-16 flex items-center">
      <a href="#" class="flex items-center sm:mr-8 mr-4">
        <div class="main-navbar-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 rounded-lg"
            viewBox="0 0 32 32"
          >
            <path
              d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
              fill="#05A081"
            ></path>
            <path
              d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
              fill="#fff"
            ></path>
          </svg>
        </div>
        <div
          class="brand-name ml-4 text-white text-lg font-semibold hidden sm:block"
        >
          Pexels
        </div>
      </a>
      <div class="nav-search-bar hidden max-w-3xl w-2/3 sm:w-full sm:mr-8 mr-4">
        <form action="">
          <div class="search-container flex bg-lightGrey rounded-md border-0">
            <input
              type="search"
              placeholder="Search for free photos"
              class="rounded-md sm:py-3 py-2 sm:px-5 px-3 border-0 focus:border-0 flex-grow bg-myTransparent text-black-300 text-lg font-light outline-none focus:bg-white leading-5 overflow-hidden"
            />
            <button class="rounded-md-t sm:px-4 px-3">
              <div class="icon-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>
      <div class="inner-nav ml-auto">
        <ul class="flex">
          <li class="mr-8 lg:block hidden">
            <a href="" class="text-white text-lg">Explore</a>
          </li>
          <li class="mr-8 lg:block hidden">
            <a href="" class="text-white text-lg">License</a>
          </li>
          <li class="mr-8 lg:block hidden">
            <a href="" class="text-white text-lg">Upload</a>
          </li>
          <li class="mr-8 lg:block hidden">
            <a href="" class="text-white text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-white text-lg"
                fill="#fff"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                ></path>
              </svg>
            </a>
          </li>
          <li class="lg:block hidden">
            <a
              href=""
              class="text-white text-lg bg-lightGreen py-2.5 px-8 rounded-md font-semibold"
              >Join</a
            >
          </li>
          <li class="mr-4 lg:hidden block">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
                width="24"
                height="24"
              >
                <path
                  d="M3.805 7.2h.503a.63.63 0 0 0 .629.629.63.63 0 0 0 .629-.629h.503c0 .625-.507 1.132-1.132 1.132S3.805 7.826 3.805 7.2zm4.403-.63v.126a.5.5 0 0 1-.503.503h-5.535c-.278 0-.503-.225-.503-.503v-.126a.88.88 0 0 1 .755-.872v-1.518c0-1.4 1.126-2.516 2.516-2.516s2.516 1.126 2.516 2.516V5.7a.88.88 0 0 1 .755.872zm-.503 0c0-.21-.17-.377-.378-.377s-.376-.17-.376-.376V4.182c0-1.11-.9-2.013-2.013-2.013s-2.013.9-2.013 2.013V5.82c0 .208-.17.376-.376.376s-.378.17-.378.377v.126h5.535v-.126z"
                  fill="#fff"
                  fill-rule="nonzero"
                  stroke-width="0"
                ></path>
              </svg>
            </a>
          </li>
          <li class="lg:hidden block">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <section
      class="hero bg-primary bg-opacity-50 bg-blend-overlay bg-hero-bg bg-cover py-32 bg-center relative opacity-95"
    >
      <div class="">
        <div class="flex items-center justify-center max-h-500 py-12">
          <div class="heroo-content text-white sm:max-w-650 max-w-90 mx-auto">
            <h1 class="text-4xl font-bold mb-4">
              The best free stock photos & videos shared by talented creators.
            </h1>
            <div class="search-container">
              <div class="nav-search-bar max-w-3xl w-full mr-8">
                <form action="">
                  <div
                    class="search-container flex bg-lightGrey rounded-md border-0"
                  >
                    <input
                      type="search"
                      placeholder="Search for free photos"
                      class="rounded-md py-4 px-5 border-0 focus:border-0 flex-grow bg-myTransparent text-black text-lg font-light outline-none focus:bg-white leading-5"
                    />
                    <button class="rounded-md-t px-4">
                      <div class="icon-search">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
              <div class="search-tags">
                <ul class="flex items-center p-2.5">
                  <li class="font-extralight text-sm">
                    Suggested<span class="mr-2.5">:</span>
                  </li>
                  <li>
                    <a href="" class="font-extralight text-sm mr-1">
                      nature,
                    </a>
                  </li>
                  <li>
                    <a href="" class="font-extralight text-sm mr-1">4k, </a>
                  </li>
                  <li>
                    <a href="" class="font-extralight text-sm mr-1">dark, </a>
                  </li>
                  <li>
                    <a href="" class="font-extralight text-sm mr-1"
                      >technology,
                    </a>
                  </li>
                  <li>
                    <a href="" class="font-extralight text-sm mr-1"
                      >business,
                    </a>
                  </li>
                  <li>
                    <a href="" class="font-extralight text-sm mr-1">sky, </a>
                  </li>
                  <li><a href="" class="font-extralight text-sm">more</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="hero-footer flex justify-end absolute w-full px-5 py-4 h-auto bottom-0"
      >
        <div class="footer-link">
          <a href="" class="text-xs text-white font-light opacity-50"
            >Photo by Alan Cabello</a
          >
        </div>
      </div>
    </section>
    <section class="underlined-tabs bg-white">
      <div
        class="flex items-center sm:justify-center justify-start shadow-small pb-0 sm:overflow-x-hidden overflow-x-scroll"
      >
        <a
          href=""
          class="border-b-4 p-5 border-lightPurple text-lg font-semibold text-lightPurple m-0"
          >Home</a
        >
        <a href="" class="p-5 text-lg font-semibold hover:text-lightPurple"
          >Discover</a
        >
        <a href="" class="p-5 text-lg font-semibold hover:text-lightPurple"
          >Videos</a
        >
        <a href="" class="p-5 text-lg font-semibold hover:text-lightPurple"
          >Leaderboard</a
        >
        <a href="" class="p-5 text-lg font-semibold hover:text-lightPurple"
          >Challenges</a
        >
      </div>
    </section>
    <section class="photo-display lg:w-4/5 w-11/12 mx-auto">
      <div class="flex justify-between items-center pt-4 pb-2">
        <p class="text-lg font-semibold">Free Stock Photos</p>
        <div class="flex items-center">
          <p class="text-sm font-semibold">Trending</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="photo-section">
        <div class="lg:masonry masonry-small">
          <div
            class="image-box mb-8"
            v-for="(photo, index) in photos"
            :key="index"
          >
            <img :src="photo.src.original" alt="" @click="showImage(photo)" />
          </div>
        </div>
      </div>
    </section>
    <!-- modal for popup images -->
    <Modal
      v-if="isVisible"
      @toggle-modal="toggleModal"
      :imageSrc="imageSource"
    />
  </div>
</template>

<script>
// import axios from 'axios'
// import { PEX_KEY } from '../store/env.js'
import { createClient } from 'pexels'

export default {
  data() {
    return {
      photos: [],
      search_query: '',
      uri: 'https://api.pexels.com/photos/',
      apiKey: process.env.PEX_KEY,
      isVisible: false,
      imageSource: '',
    }
  },
  created() {
    const client = createClient(this.apiKey)

    client.photos
      .curated({ per_page: 46, page: 1 })
      .then((res) => {
        this.photos = res.photos
        console.log(this.photos)
        const max = this.photos.length
        const min = 0

        const getRandom = (min, max) => Math.random() * (max - min) + min

        const randomNumber = Math.floor(getRandom(min, max))

        const bgImage = this.photos[randomNumber]

        console.log(bgImage.src.original)

        document.querySelector(
          '.hero'
        ).style.backgroundImage = `url(${bgImage.src.original})`
      })
      .catch(console.error.bind(console))
  },
  methods: {
    showImage(e) {
      console.log(e)
      this.imageSource = e.src.original
      console.log(this.imageSource)
      this.isVisible = true
    },
    toggleModal() {
      this.isVisible = !this.isVisible
    },
  },
}
</script>

<style>
</style>
