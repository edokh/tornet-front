<template>
  <div class="bg-gray-900 w-full h-screen main-div">
    <div class="mobile-div mx-auto min-h-screen">
      <div class="flex nav p-3 justify-between">
        <div class="flex">
          <img class="w-6 mr-2" src="/logo.png" alt="ball-icon" />
          <h3 class="text-white text-lg">Captain Korek</h3>
        </div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
        </div>
      </div>
      <div class="px-6">
        <div class="mt-3 flex justify-between space-x-3">
          <div class="px-6 py-4 box background-tint rounded-2xl w-1/2">
            <div class="flex justify-between">
              <img src="/xmlid1095.png" alt="Total points" class="h-6" />
              <h4 class="sub-headers">Total Points</h4>
            </div>
            <h3 class="text-white text-center text-2xl">453.23</h3>
          </div>
          <div class="px-6 py-4 rounded-2xl w-1/2 sub-img">
            <div class="flex justify-between">
              <img src="/g561.png" alt="ranking" class="w-6" />
              <h4 class="sub-headers">Ranking</h4>
            </div>
            <h3 class="text-white text-center text-2xl">453.23</h3>
          </div>
        </div>
        <div class="mt-3">
          <swiper :modules="modules" virtual lazy="true">
            <swiper-slide v-for="i in 10" :key="i">
              <div class="h-28 relative background-tint2 rounded-2xl w-3/4">
                <div class="relative w-full">
                  <img
                    class="absolute object-cover object-center w-full top-0 rounded-2xl h-28 right-0 left-0"
                    src="/9-7.jpg"
                    alt="Image 2"
                  />
                  <img
                    class="absolute w-full object-cover object-center top-0 rounded-2xl h-28 bottom-0 opacity-50 right-0 left-0"
                    src="/9-1.webp"
                    alt="Image 2"
                  />
                </div>

                <div
                  style="background-color: rgba(10, 87, 183, 0.6)"
                  class="flex rounded-2xl justify-between top-0 bottom-0 left-0 right-0 p-3 absolute"
                >
                  <div class="h-full">
                    <h4 class="text-white text-xl">
                      <span class="text-yellow-400">Captain </span>Card
                    </h4>
                    <p class="font-bold text-sm text-white">For #240 IQD</p>
                    <button
                      class="text-2xs text-blue-500 bg-white py-0.5 px-1 rounded bottom-0 mt-4"
                    >
                      Buy Cars
                    </button>
                  </div>
                  <span
                    style="font-size: 21px"
                    class="rounded-full bg-white h-7 w-7 font-extrabold text-center text-base flex justify-center items-center absolute right-2 top-2 z-30"
                  >
                    3
                  </span>
                  <div class="h-full">
                    <img
                      src="/rectangle-59.png"
                      class="img3 h-24 object-cover object-center"
                      alt="img3"
                    />
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="mt-3 flex">
          <!-- <swiper :modules="modules" virtual lazy="true" :spaceBetween="1" :slidesPerView="4"> -->
          <div class="mx-3" v-for="category in categories" :key="category.id">
            <button :class="category.id === 3 ? 'active-category' : 'category'">
              {{ category.title }}
            </button>
          </div>
          <!-- </swiper> -->
        </div>
        <div class="mt-3 flex space-x-2">
          <div class="matches">
            <div class="status">
              <span>Enabled</span>
            </div>
            <div class="flex justify-between mt-4">
              <img src="/mask-group-7.png" alt="" class="h-9" />
              <img src="/auto-group-ktx9.png" alt="" class="h-9" />
            </div>
            <div style="margin-top: 10px">
              <div class="flex justify-between h-4">
                <span class="club">F.C Bayer</span>
                <span class="score">0</span>
              </div>
              <div class="flex justify-between">
                <span class="club">Arsenal</span>
                <span class="score">5</span>
              </div>
            </div>
          </div>
          <div class="matches">
            <div class="status">
              <span>Enabled</span>
            </div>
            <div class="flex justify-between mt-4">
              <img src="/mask-group-9.png" alt="" class="h-9" />
              <img src="/mask-group-10.png" alt="" class="h-9" />
            </div>
            <div style="margin-top: 10px">
              <div class="flex justify-between h-4">
                <span class="club">Olympique</span>
                <span class="score">2</span>
              </div>
              <div class="flex justify-between">
                <span class="club">Monaco</span>
                <span class="score">2</span>
              </div>
            </div>
          </div>
          <div class="matches">
            <div class="status">
              <span>Enabled</span>
            </div>
            <div class="flex justify-between mt-4">
              <img src="/mask-group-2.png" alt="" class="h-9" />
              <img src="/mask-group-1.png" alt="" class="h-9" />
            </div>
            <div style="margin-top: 10px">
              <div class="flex justify-between h-4">
                <span class="club">Real Madrid</span>
                <span class="score">0</span>
              </div>
              <div class="flex justify-between">
                <span class="club">Barcelona</span>
                <span class="score">2</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-3">
          <span class="category"> Leagues</span>
          <button class="category">View All</button>
        </div>
        <div class="mt-3">
          <swiper :modules="modules" virtual lazy="true" :slidesPerView="5">
            <swiper-slide class="mx-1" v-for="league in leagues" :key="league">
              <div class="leagues py-3">
                <div class="mx-auto w-fit h-fit flex flex-col justify-between">
                  <img
                    class="object-cover object-center border p-0.5"
                    :src="league.img"
                    alt="leagues"
                  />
                  <p>{{ league.name }}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="flex justify-between mt-3">
          <span class="category"> Top 3 Matches</span>
        </div>

        <div class="mt-3">
          <swiper :modules="modules" virtual lazy="true" :slidesPerView="7">
            <swiper-slide class="mx-1">
              <p class="active-category">Today</p>
            </swiper-slide>
            <swiper-slide class="mx-1" v-for="i in 8" :key="i">
              <button class="category">
                {{ i + 18 }}
                mar
              </button>
            </swiper-slide>
          </swiper>
        </div>

        <div class="mt-3">
          <div class="top-match flex justify-between">
            <div class="flex my-auto space-x-1">
              <img src="/mask-group-2.png" alt="" class="h-9" />
              <img src="/mask-group-1.png" alt="" class="h-9" />
            </div>
            <div>
              <div class="flex">
                <span class="top-club">Barcelona <span class="vs">VS</span> Real Madrid</span>
              </div>
              <span class="top-statue">Match Continues</span>
            </div>
            <div class="my-auto">
              <p class="text-white text-base">2-1</p>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <div class="top-match flex justify-between">
            <div class="flex my-auto space-x-1">
              <img src="/mask-group-7.png" alt="" class="h-9" />
              <img src="/auto-group-ktx9.png" alt="" class="h-9" />
            </div>
            <div>
              <div class="flex">
                <span class="top-club">F.C Bayer <span class="vs">VS</span> Arsenal</span>
              </div>
              <span class="top-statue">Match Over, Arsenal won</span>
            </div>
            <div class="my-auto">
              <p class="text-white text-base">0-5</p>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <div class="top-match flex justify-between">
            <div class="flex my-auto space-x-1">
              <img src="/mask-group-9.png" alt="" class="h-9" />
              <img src="/mask-group-10.png" alt="" class="h-9" />
            </div>
            <div>
              <div class="flex">
                <span class="top-club">Olympique <span class="vs">VS</span> Monaco</span>
              </div>
              <span class="top-statue">Match Over, Draw is over.</span>
            </div>
            <div class="my-auto">
              <p class="text-white text-base">2-2</p>
            </div>
          </div>
        </div>
        <div class="mt-3 news">
          <div class="box3 w-full flex">
            <div class="mx-auto my-auto text-white w-28 text-center items-center">
              <h4>Check The <span style="color: rgba(255, 205, 0, 1)"> Latest News</span></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import { Navigation, EffectFade, Pagination, Autoplay, Virtual } from 'swiper'
const modules = [EffectFade, Virtual]
const categories = [
  { id: 1, title: 'Live' },
  { id: 2, title: 'Upcoming' },
  { id: 3, title: 'Past Matches' },
  { id: 4, title: 'View All' }
]
const leagues = [
  { id: 1, name: 'FPL', img: '/rectangle-26-AKF.png' },
  { id: 2, name: 'LFP', img: '/rectangle-26.png' },
  { id: 3, name: 'Premier', img: '/rectangle-26-doK.png' },
  { id: 4, name: 'Serie A', img: '/rectangle-26-u6d.png' },
  { id: 5, name: 'Barclays', img: '/rectangle-26-doK.png' },
  { id: 6, name: 'IPL', img: '/rectangle-26-AKF.png' }
]
</script>
<style>
.img1 {
  opacity: 0.5;
}
.img2 {
  opacity: 0.5;
}
.container {
  position: relative;
  width: 400px; /* Set the desired width for the container */
  height: 300px; /* Set the desired height for the container */
}

.container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Set the desired opacity value */
  z-index: 1;
}
/* ------------------ */

.news h4 {
  color: #ffffff;
  font-weight: 400;
  font-size: 21px;
}
.top-statue {
  font-weight: 400;
  font-size: 11px;
  /* identical to box height, or 182% */

  color: #b0b1ca;
}
.top-match .top-club {
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  color: #ffffff;
}
.top-match .vs {
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  color: rgba(255, 205, 0, 1);
}
.top-match {
  width: 330px;
  height: 63px;
  padding: 13px;
  /* #282E3D second Color */

  background: #282e3d;
  border-radius: 16px;
}

.top-match img {
  width: 28px;
  height: 27px;
}
.leagues {
  width: 64px;
  height: 98px;
  /* #282E3D second Color */
  background: #282e3d;
  border-radius: 18px;
}
.leagues img {
  box-sizing: border-box;
  width: 39px;
  height: 40px;
  margin-top: 6px;
  border-radius: 14px;
}
.leagues p {
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  margin-top: 6px;
  /* identical to box height, or 167% */

  text-align: center;

  color: #ffffff;
}
.status {
  background: #191b22;
  border-radius: 10px;
  width: fit-content;
  padding-left: 8px;
  padding-right: 8px;
}
.status span {
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  text-transform: capitalize;

  color: #b0b1ca;
}
.matches {
  width: 105px;
  height: 134px;
  padding: 11px;
  background: #282e3d;
  border-radius: 15px;
}
.matches .club {
  font-size: 10px;
  color: #ffffff;
}
.matches .score {
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
  /* identical to box height, or 200% */

  color: #ffcd00;
}
.bg-main {
  background-color: #191b22;
}
.mobile-div {
  max-width: 375px;
}

.main-div {
  background: #181921 !important;
  /* background: white; */
}
.nav {
  box-sizing: border-box;

  /* #191B22 Dark Bg */

  background: #191b22;
  box-shadow: 0px 12px 11px rgba(0, 0, 0, 0.584314);
  border-radius: 0px 0px 20px 20px;
}
.sub-headers {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  color: #b0b1ca;
}
.sub-img {
  background: #282e3d;
}

.box {
  background-size: cover;
  background-image: url('soccer-players-action-professional-stadium.png');
  background-color: rgba(10, 87, 183, 1);
  background-blend-mode: multiply;
  background-position: center;
}

.box2 {
  background-size: cover;
  /* background-image: url('9-1.webp'); */
}

.background-tint2 {
  background-color: rgba(10, 87, 183, 1);
  background-blend-mode: multiply;
}
.box3 {
  background-image: linear-gradient(90deg, rgba(0, 55, 100, 0) 0%, rgba(0, 0, 0, 0.5)),
    url('two-soccer-players-challenge-each-other-chasing-ball-stadium-bg.png');
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  height: 139px;
}

.img3 {
  width: 74px;
  filter: drop-shadow(0px 12px 11px rgba(0, 0, 0, 0.435294));
  border-radius: 15px;
}
.text-2xs {
  font-size: 9px;
}
.category {
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  color: #b0b1ca;
  display: flex;
  padding-top: 2px;
}
.active-category {
  font-size: 12px;
  line-height: 20px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  background: #0a57b7;
  border-radius: 7px;
  display: flex;
  padding-top: 2px;
}
</style>
