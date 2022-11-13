<template>
  <navbar
  :navBarTitle="$route.meta.title"
  >
    <template #right>
      <div @click="done">
        done
      </div>
    </template>
  </navbar>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  <button class="btn save" @click="save('page')">save</button>
  <button class="btn draw" @click="draw('page')">draw</button>

  <div class="page">
    <h1>海报标题</h1>
    <div id="dawei" class="page__subtitle">海报副副副标题</div>
    <div 
      class="page__cell" 
      v-for="(item, index) in 6" :key="index"
    >
      海报正文段落:{{index}}
    </div>
  </div>
  <div id="result" class="result">result</div>
  <div class="page__result">page__result</div>
</template>


<script setup>
import navbar from '@/components/navbar.vue';



import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

import html2canvas from 'html2canvas';
import canvas2image from "canvas2image-2";

const save = async (id) => {
  const dpi = window.devicePixelRatio || 2;
  let options = {
    scale: dpi,
    useCORS: true,
    ignoreElement: true,
  };

  const el = document.getElementById(id) ?? document.getElementsByClassName('page')[0];
  html2canvas(el, options).then((canvas) => {
    // canvas2image.saveAsPNG(canvas);//不可以自定义图片名称
    canvas.toBlob((blob) => {
      download(blob);
    });
  });
};

const draw = async (id) => {
  const dpi = window.devicePixelRatio || 2;
  let options = {
    scale: dpi,
    useCORS: true,
    ignoreElement: true,
  };

  const el = document.getElementById(id) ?? document.getElementsByClassName('page')[0];
  html2canvas(el, options).then((canvas) => {
    let url = canvas.toDataURL('image/png');//转成8️base64t图片

    let resultEl = document.getElementsByClassName('page__result')[0];
    //resultEl = document.querySelector('#result')
    resultEl.innerHTML = `<img src='${url}' alt='生成的海报图片' />`;

    // let image = new Image();
    // image.src = url;
    // image.alt = '生成的海报图片';
    // el.parentNode.appendChild(image);
  })
};

// const draw = async (from, to) => {
//   const dpi = window.devicePixelRatio || 2;
//   let options = {
//     scale: dpi,
//     useCORS: true,
//     ignoreElement: true,
//   };

//   const el = document.getElementById(from) ?? document.getElementsByClassName(from)[0];
//   html2canvas(el, options).then((canvas) => {
//     let url = canvas.toDataURL('image/png');//转成8️base64t图片

//     const targetEl = document.getElementById(to) ?? document.getElementsByClassName(to)[0];
//     resultEl.innerHTML = `<img src='${url}' alt='生成的海报图片' />`;

//     // let image = new Image();
//     // image.src = url;
//     // image.alt = '生成的海报图片';
//     // el.parentNode.appendChild(image);
//   })
// };

const download = async (blob) => {
  const url = window.URL.createObjectURL(blob);
  const filename = `image_${new Date().toISOString()}.png`;

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();

  window.URL.revokeObjectURL(url);
};

const startElem = document.getElementsByClassName('page')[0];

const done = () => {
  console.log(`done`);

  startElem.addEventListener("click", function(evt) {
    startCapture();
  }, false);
};


async function startCapture(displayMediaOptions) {
  let captureStream = null;

  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch(err) {
    console.error("Error: " + err);
  }
  return captureStream;
}

function stopCapture(evt) {
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach(track => track.stop());
  videoElem.srcObject = null;
}

function dumpOptionsInfo() {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.info("Track settings:");
  console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.info("Track constraints:");
  console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
}


</script>


<style scoped lang='scss'>
.btn{
  margin:8px;

}

.page{
  padding: 8px;
  border: 1px solid red;
}

.page__cell{
  display: flex;
  align-items: center;


  height: 45px;
  padding:10px;
  border-bottom: 1px solid #eeeeee;
}
</style>