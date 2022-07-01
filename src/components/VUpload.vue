// 上传图片或视频
/**
 **********************************************
 *  title || slot name="header"               *
 *  subtitle || slot name="subtitle"          *
 *  *******************************************
 *  *                                         *
 *  *  默认6张图片(可设置)或视频(固定一个)         *
 *  *                                         *
 *  *******************************************
 *  footerTitle || slot name="footer"         *
 **********************************************
 */

<template>
  <div>
    <div class="section">
      <div v-if="!isVideo" class="upload_image" >
        <div>
          <slot name="header">
            <slot name="title">
              <div class="upload_title" v-if="title">
                <!-- <text class="red">*</text>{{ title }} -->
                {{ title }}
              </div>
            </slot>
            <slot name="subtitle">
              <div class="subtitle"
              v-if="subtitle" 
              :style="{color: schemeImgErr ? 'red' : ''}">
              {{ subtitle }}  
              </div>
              <div class="subtitle"
              v-else 
              :style="{color: schemeImgErr ? 'red' : ''}">
              1.请上传 1-{{ limit }} 张图片.<br>2.图片支持JPG、PNG格式，每张大小不超过{{constants.IMAGE_SIZE / 1024 / 1024}}M.
              </div>
            </slot>
          </slot>
        </div>
        <div class="image_wrapper">
          <div class="image_item"
            v-for="item in schemeImgList"
            :key="item.image">
            <div class="image_box" v-if="item.type !== 'upload'">
              <img class="user_image" :src="item.image"/>
              <div class="mengban" v-show="item.progress * 1 !== 100">
                <div class="upload_tip">上传中</div>
                <div class="progress">{{ item.progress }}%</div>
              </div>
              <img class="delete_btn"
                :src="require('@/assets/images/icon_close.png')"
                @click.stop="deleteItem(constants.DESIGN, item.image)"
                v-show="item.progress * 1 === 100 && item.uploadfail === false"/>
            </div>
          </div>
          <div class="image_item" v-if="schemeImgList.length < limit">
            <div v-if="isInnerApp" @click="uplusChooseImg(constants.DESIGN)">
              <!-- <img class="add_image" :src="uploadImgList[0].image" style="top: 30px;"/> -->
              <div class="add_image_placeholder" >
                <img class="add_image_img" :src="uploadImgList[0].image" />
                <div class="add_image_title" v-if="limit > 1" >（最多{{ limit }}张）</div>
              </div>
            </div>
            <div v-else-if="!isInnerApp">
              <input style="opacity: 0;width: 2rem; height: 2rem;"
                type="file"
                accept="image/*"
                @blur="openUpload($event)"
                @change="selectFile($event, constants.DESIGN)"/>
              <!-- <img class="add_image" :src="uploadImgList[0].image"/> -->
              <div class="add_image_placeholder" >
                <img class="add_image_img" :src="uploadImgList[0].image" />
                <div class="add_image_title" >（最多{{ limit }}张）</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <slot name="footer">
              <div class="footer" v-if="footerTitle">{{footerTitle}}</div>
          </slot>
        </div>
      </div>
      <div v-if="isVideo" class="upload_image">
        <div>
          <slot name="header">
            <slot name="title">
                <div class="upload_title" v-if="title"> {{ title }} </div>
            </slot>
            <slot name="subtitle">
              <div class="tip_title" 
              :style="{color: designVideoErr ? 'red' : ''}">
              1.请上传MP4格式的视频.<br>>2.大小5M-100M之间.<br>>3.视频必须带人+画图画面."
              </div>
            </slot>
          </slot>
        </div>
        <div class="image_wrapper">
          <div
            class="image_item"
            v-for="(item, index) in designVideoList"
            :key="index">
            <div class="image_box" v-if="item.type !== 'upload'">
              <video id="myVideo" class="user_image video-js vjs-default-skin vjs-big-play-centered"
                data-setup='{}'
                controlslist="nodownload"
                playsinline="true"
                webkit-playsinline="true"
                x-webkit-airplay="allow"
                x5-playsinline="true"
                x5-video-player-type="h5"
                x5-video-player-fullscreen="true"
                x5-video-orientation="portrait"
	              preload="auto"
                :poster="item.video.indexOf('data:video/') === -1 ? `${item.video.split('?')[0]}?x-oss-process=video/snapshot,t_1000,m_fast,h_152,w_152` : ''"> 
                <source :src="item.video" type="video/mp4"/>
                <source :src="item.video" type="video/quicktime"/>
              </video>
              <div class="mengban" v-show="item.progress * 1 !== 100">
                <div class="upload_tip">上传中</div>
                <div class="progress">{{ item.progress }}%</div>
              </div>
              <img
                class="delete_btn"
                src='@/assets/images/icon_close.png'
                @click="deleteItem(constants.VIDEO, item.image)"
                v-show="item.progress * 1 === 100 && item.uploadfail === false"
              />
            </div>
          </div>
          <div class="image_item" v-if="designVideoList.length < 1">
            <div v-if="isInnerApp" @click="showVideoPop = true">
              <img class="add_image_video" :src="uploadImgList[0].image" style="top: 0;"/>
            </div>
            <div v-else-if="!isInnerApp">
              <input style="opacity: 0;width: 1.52rem; height:1.52rem;"
                    type="file"
                    accept="video/*"
                    @blur="openUpload($event)"
                    @change="selectFile($event, constants.VIDEO)"/>
              <img class="add_image_video" :src="uploadImgList[0].image"/>
            </div>
          </div>
        </div>
        <div>
          <slot name="footer">
              <div class="footer" v-if="footerTitle">{{footerTitle}}</div>
          </slot>
        </div>
      </div>

    </div>
    <van-popup
      :show="showBottomPop"
      :round="true"
      :overlay="true"
      position="bottom"
      :safe-area-inset-bottom="true"
      :close-on-click-overlay="false"
      :style="{ height: '3.66rem' }">
      <div class="popBox">
        <div class="new item" v-if="uploadPopConfig.fileType === 'img'" @click="openCamera(uploadPopConfig.type)">{{uploadPopConfig.cameraBtn}}</div>
        <div class="select item" @click="imagePicker(uploadPopConfig.type)">{{uploadPopConfig.albumBtn}}</div>
        <div class="close item" @click="closePopBox">取消</div>
      </div>
    </van-popup>
    <van-popup
      :show="showVideoPop"
      :round="true"
      :overlay="true"
      position="bottom"
      :safe-area-inset-bottom="true"
      :close-on-click-overlay="false"
      :style="{ height: '3.66rem' }">
      <div class="popBox">
        <div class="select item" @click="videoPicker">从相册中选择</div>
        <div class="close item" @click="showVideoPop = false">取消</div>
      </div>
    </van-popup>
  </div>
</template>

<script>

import { apiSpecialConfig } from '@/config/settings';
import { mapState } from 'vuex';
import videoJS from 'video.js';
import 'video.js/dist/video-js.css';
import * as LOG from "@/utils/log";
// import debounce from '@/utils/debounce';

export default {
  props: {
    isVideo: {
        type: Boolean,
        default: false
    },
    limit: {
        type: Number,
        default: 6,
    },
    toastKey: {
        type: String,
        default: "图片"
    },
    title: {
        type: String,
        default: "图片"
    },
    subtitle: {
        type: String,
        default: ""
    },
    footerTitle: {
        type: String,
        default: undefined
    },
    // css margin
    margin: {
        type: String,
        default: '0px'
    },
    // css margin
    padding: {
        type: String,
        default: '10px 20px'
    },
    radius: {
        type: String,
        default: '0px'
    },
    hasCache: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change'],
  data() {
    return {
      dropLoading: false,
      closeWebview: false, // 是否关闭webview
      schemeImgList: [], // {{ title }}（最多9张）
      designVideoList: [], // 设计视频
      uploadImgList: [
        { type: "upload", image: require('@/assets/images/icon_camera.png') },
      ], // 上传按钮
      inputValue: "",
      fileListDESIGN: [],
      fileListVIDEO: [],
      schemeImgErr: false,
      papersImgErr: false,
      designVideoErr: false,
      videoTime: 0,
      fileSelectFlag: 1,
      uploadingDesign: false,
      uploadingVideo: false,
      uploadingPapers: false,
      showBottomPop: false,
      showVideoPop: false,
      uploadPopConfig: {
        fileType: 'img',
        type: 'DESIGN',//contents
        cameraBtn: '拍照',
        albumBtn: '从相册中选择'
      },
      uplusUploaderId: 1,
    };
  },
  activated() {
    if (!this.hasCache) {
      this.schemeImgList = [];
      this.designVideoList = [];
    }
  },
  watch: {
    schemeImgList: {
        handler: function (val, oldVal) {
          // LOG.log('a thing changed', val)
          const list = val.findIndex((e) => e.progress < 100);
          if (list.length > 0) {
            return;
          }
          // this.$emit("change", val)
          this.$debounce(() => {
            this.$emit("change", val);
          });
      },
      deep: true
    },
    designVideoList: {
        handler: function (val, oldVal) {
          // LOG.log('a thing changed', val)
          const list = val.findIndex((e) => e.progress < 100);
          if (list.length > 0) {
            return;
          }
          // this.$emit("change", val)
          this.$debounce(() => {
            this.$emit("change", val);
          });
      },
      deep: true
    },
  },
  computed: {
    constants() {
      return {
        // 设计稿
        DESIGN: 'design',
        // 证件
        CERTIFICATE: 'certificate',
        // 设计视频
        VIDEO: 'video',
        // 图片大小 20M
        IMAGE_SIZE: 20 * 1024 * 1024,
        // 视频大小 5M
        MIN_VIDEO_SIZE: 5 * 1024 * 1024,
        // 视频大小 100M
        VIDEO_SIZE: 100 * 1024 * 1024,
      };
    },
    // ...mapState({
    //   echoSchemeImgList: state => state.designer.echoAuthInfo.designScheme ? state.designer.echoAuthInfo.designScheme.split(',') : [],
    //   echoDesignVideoList: state => state.designer.echoAuthInfo.designVideo ? state.designer.echoAuthInfo.designVideo.split(',') : [],
    // })
  },
  mounted(){
    try {
      // let schemeImg = [],designVideo = [],papersImg = [];
      // this.echoSchemeImgList.forEach(imgUrl => {
      //   schemeImg.push({
      //     type: "image",
      //     image: imgUrl,
      //     uploadfail: false,
      //     progress: 100,
      //   })
      // });
      // this.echoDesignVideoList.forEach(videoUrl => {
      //   designVideo.push({
      //     type: "video",
      //     video: videoUrl,
      //     uploadfail: false,
      //     progress: 100,
      //   })
      // });
      // this.schemeImgList = [...schemeImg];
      // this.designVideoList = [...designVideo];
      if(this.designVideoList.length > 0){
        this.initVideoJs();
      }
      
    } catch (err) {
      LOG.log(err);
    }
  },
  methods: {
    initVideoJsAli(){
      this.$nextTick(() => {
        let video = this.designVideoList[0].video; 
        // let video = "https://haier-zjdz-private.oss-cn-qingdao.aliyuncs.com/userprofile/1d49272d95054a0da6153c2adcb6ccb3.mp4?Expires=1954056085&OSSAccessKeyId=LTAI4GGZTDwKzRSVGaF16qz7&Signature=eNUgrqa89bYiNvjLJsEvzmMRPSU%3D"
        var player = new Aliplayer({
          id: 'J_prismPlayer',
          width: '100%',
          preload: true,
          autoplay: true,
          videoHeight: '40px',
          useH5Prism: true,
          playsinline: true,
          cover: video.indexOf('data:video/') === -1 ? `${video.split('?')[0]}?x-oss-process=video/snapshot,t_1000,m_fast,h_152,w_152` : '',//可选公共参数。视频封面图片地址。用户自定义的可以被访问到的网络图片。本参数传入的URL优先级最高，会覆盖通过获取视频播放凭证接口获取的CoverURL。
          // 播放方式一、播放地址播放。此方式播放优先级最高。
          source: video,//播放方式一必选参数。可以是第三方直播或点播地址、阿里云直播服务中的播放地址，或阿里云点播服务中的播放地址。
        },function(player){
            LOG.log('The player is created.');
        });
        player.on('ready',()=>{
          LOG.log('ready',player.getDuration());
        });
        player.on('canplay',()=>{
          LOG.log('canplay',player.getDuration());
        });
      });
    },
    initVideoJs(){
      this.$nextTick(() => {
        let that = this;
        videoJS('myVideo',{
          preload: "auto",
          autoplay: false,
          controls: true,
          muted: true,
        } ,function onPlayerReady(){
          videoJS.log('Your player is ready!');
          this.on("loadstart",function(){
              LOG.log("开始请求数据 ");
          });
          this.on("progress",function(){
              LOG.log("正在请求数据 ");
          });
          this.on("loadedmetadata",function(){
              LOG.log("获取资源长度完成 ");
              LOG.log(this.duration());
          });
          this.on("canplaythrough",function(){
            LOG.log("视频源数据加载完成");
            LOG.log(this.duration());
          });
          this.on("waiting", function(){
              LOG.log("等待数据");
          });
          this.on("play", function(){
          LOG.log("视频开始播放");
          });
          this.on("playing", function(){
            LOG.log("视频播放中", this.duration());
          });
          this.on("pause", function(){
              LOG.log("视频暂停播放");
          });
          this.on("ended", function(){
              LOG.log("视频播放结束");
          });
        });
      });
    },
    uplusChooseImg(type){
      if(type === this.constants.DESIGN){
        this.uploadPopConfig = {
          fileType: 'img',
          type: this.constants.DESIGN,
          cameraBtn: '拍照',
          albumBtn: '从相册中选择'
        };
        this.showBottomPop = true;
      }
    },
    // uplus
    openCamera(type){
      LOG.log('openCamera');
      this.$uplus.instance.initDeviceReady().then(() => {
        this.$uplus.instance.upImageModule.openCamera({
            saveToPhotoAlbum: false,
            destinationType: 1,//1表示返回图片地址；2表示图片经过base64编码后的字符串
            quality: 100
          })
          .then((res) => {
            LOG.log("uplus result", res);
            this.showBottomPop = false;
            let filePath = res.retData.data;
            this.uplusUploader(filePath, '1', '0', type).then((res) => {
              LOG.log(res);
              let {type, backData, filePath, thumbPath} = res;
              if(type === this.constants.DESIGN) {
              // 文件服务器地址
              let ind = this.schemeImgList.findIndex(
                (item) => item.image === filePath
              );
              this.schemeImgList.splice(ind, 1, {
                type: "image",
                image: backData,
                uploadfail: false,
                progress: 100,
              });
              if(!this.schemeImgErr){
                this.$toast("图片上传成功");
              }
              this.uploadingDesign = false;
              }
            });
          }).catch(err => {
            if(err.retCode === '180001'){
              LOG.log('180001','获取相机权限失败');
            }
            if(err.retCode === '180002'){
              LOG.log('180002','用户取消拍照');
              this.showBottomPop = false;
              // if(type === this.constants.DESIGN && this.schemeImgList.length < 1){
              //   this.$toast("请上传{{ title }}");
              // }
            }
            if(err.retCode === '180003'){
              LOG.log('180003','拍照失败');
            }
          });
      });
    },
    imagePicker(type){
      LOG.log('imagePicker');
      this.$uplus.instance.initDeviceReady().then(() => {
        this.$uplus.instance.upImageModule.imagePicker({
          max: 1,
          typeMode: 0,//0-图片；1-视频；2-图片和视频
          singleChoice: true,
          showCamera: false,
          tips: '请选择照片',
          cropImage: false,
          showOriginalBtn: true,
          allFileSizeByteLimit: this.constants.IMAGE_SIZE,
          singleFileSizeByteLimit: this.constants.IMAGE_SIZE,
          isDefaultOriginal:true
        }).then((res) => {
          LOG.log('result',res);
          if(res.retCode === '000000'){
            this.showBottomPop = false;
            let filePath = res.retData.list[0].path;
            let ind = filePath.lastIndexOf('.');
            let fileType = filePath.slice(ind + 1).toLowerCase();
            let thumbPath = res.retData.list[0].thumbPath;
            LOG.log('thumbPath', thumbPath);
            LOG.log('fileType', fileType);
            if(fileType !== 'jpeg' && fileType !== 'png' && fileType !== 'jpg') {
              this.$toast("请上传JPG、PNG格式的图片");
              return;
            }
            LOG.log('filePath',filePath);
            this.uplusUploader(filePath, '1', '0', type, thumbPath).then((res) => {
              LOG.log(res);
              let {type, backData, filePath, thumbPath} = res;
              if(type === this.constants.DESIGN) {
              // 文件服务器地址
              let ind = this.schemeImgList.findIndex(
                (item) => item.image === filePath
              );
              this.schemeImgList.splice(ind, 1, {
                type: "image",
                image: backData,
                uploadfail: false,
                progress: 100,
              });
              if(!this.schemeImgErr){
                this.$toast(`图片上传成功`);
              }
              this.uploadingDesign = false;
              }
            });
          }
        }, (err)=>{
          LOG.log('err',err); 
          if(err.retCode === '180001'){
            LOG.log('180001','获取相册权限失败');
          }
          if(err.retCode === '180002'){
            LOG.log('180002','用户取消图片选择');
            this.showBottomPop = false;
            // if(type === this.constants.DESIGN && this.schemeImgList.length < 1){
            //   this.$toast(`请上传${ this.title }`)
            // }
          }
          if(err.retCode === '180003'){
            LOG.log('180003', '图片浏览失败');
          }
        });
      });  
    },
    videoPicker(){
      LOG.log('videoPicker');
      this.showVideoPop = false;
      this.$uplus.instance.initDeviceReady().then(() => {
        this.$uplus.instance.upImageModule.imagePicker({
          max: 1,
          typeMode: 1,//0-图片；1-视频；2-图片和视频
          singleChoice: true,
          showCamera: false,
          tips: '请选择视频',
          cropImage: false,
          showOriginalBtn: true,
          videoLimitSecond: 60 * 60,
          allFileSizeByteLimit: this.constants.VIDEO_SIZE,
          isDefaultOriginal:true
        }).then((res) => {
          LOG.log('result',res);
          if(res.retCode === '000000'){
            if(res.retData.list[0].exif.size && res.retData.list[0].exif.size < (this.constants.MIN_VIDEO_SIZE / 1024)){
              this.$toast(`视频大小不小于${this.constants.MIN_VIDEO_SIZE / 1024 / 1024}M`);
              return;
            }
            let filePath = res.retData.list[0].path;
            let thumbPath = res.retData.list[0].thumbPath;
            LOG.log('thumbPath', thumbPath);
            let ind = filePath.lastIndexOf('/');
            let fileType = filePath.slice(ind + 1).split('.')[1].toLowerCase();
            LOG.log('fileType',fileType);
            if(fileType !== 'mp4' && fileType !== 'mov') {
              this.$toast("请上传MP4格式的视频");
              return;
            }
            this.uplusUploader(filePath, '2', '0', this.constants.VIDEO, thumbPath).then((res) => {
              LOG.log(res);
              let {type, backData, filePath, thumbPath} = res;
              if (type === this.constants.VIDEO) {
                //文件服务器地址
                let ind = this.designVideoList.length - 1;
                this.designVideoList.splice(ind, 1, {
                  type: "video",
                  image: thumbPath,
                  video: backData,
                  uploadfail: false,
                  progress: 100,
                }); 
                this.uploadingVideo = false;
                this.initVideoJs();
                if(!this.designVideoErr){
                  this.$toast("视频上传成功"); 
                }
              }
            });
          }
        }, (err)=>{
          if(err.retCode === '180001'){
            LOG.log('180001','获取相册权限失败');
          }
          if(err.retCode === '180002'){
            LOG.log('180002','用户取消视频选择');
          }
          if(err.retCode === '180003'){
            LOG.log('180003','视频浏览失败');
          } 
        });
      });  
    },
    uplusUploader(filePath, fileType, sizeLimit, type, thumbPath){
      return new Promise((resolve, reject) => {
        if (type === this.constants.VIDEO){
        this.uploadingVideo = true;
        let arr = [];
        arr.push({ type: "video", video: filePath, image:thumbPath, uploadfail: true, progress: 0 });
        let newArr = this.designVideoList.slice(0, this.designVideoList.length);
        this.designVideoList = [...newArr, ...arr];
      } else if(type === this.constants.DESIGN) {
        this.uploadingDesign = true;
        let arr = [];
        arr.push({ type: "image", image: filePath, uploadfail: true, progress: 0 });
        let newArr = this.schemeImgList.slice(0, this.schemeImgList.length);
        this.schemeImgList = [...newArr, ...arr];
      }
      this.uplusUploaderId ++;
      this.$uplus.instance.initDeviceReady().then(() => {
        this.$uplus.instance.upHttpModule.uploadFileWithProgress({
          url: `${apiSpecialConfig.hostupload}/api/file/simpleUpload`,
          data: {type: fileType,sizeLimit},
          headers:{
            "Authorization":`${apiSpecialConfig.uploadToken}`
          },
          transform: 'false',
          filePath: filePath,
          name: "file",
          uploadId: this.uplusUploaderId + '',
          progress: (res) => {
            LOG.log(filePath, res.progress);
            if (type === this.constants.VIDEO) {
              let ind = this.designVideoList.length - 1;
              this.designVideoList[ind].progress = parseInt(res.progress);
            } else if (type === this.constants.DESIGN) {
              let ind = this.schemeImgList.findIndex(
                (item) => item.image === filePath
              );
              this.schemeImgList[ind].progress = parseInt(res.progress);
            }
          }
        }).then((result) => {
          LOG.log('result uploader',result);
          if(result.retCode === '000000'){
            let backData = result.retData.data.data;
            resolve({type, backData, filePath, thumbPath});
          }
        }).catch((err) =>{
          LOG.log('err',err);
          reject();
        });
      });
      });
    },
    dataURItoBlob(dataURI) {  
      var byteString = atob(dataURI.split(',')[1]);  
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];  
      var ab = new ArrayBuffer(byteString.length);  
      var ia = new Uint8Array(ab);  
      for (var i = 0; i < byteString.length; i++) {  
          ia[i] = byteString.charCodeAt(i);  
      }  
      return new Blob([ab], {type: mimeString});  
    },  
    closePopBox(){
      this.showBottomPop = false;
      // if(this.uploadPopConfig.type === this.constants.DESIGN  && this.schemeImgList.length < 1){
      //   this.$toast(this.getToastMessage());
      // }   
    },
    //删除图片或视频
    deleteItem(type, selectFile) {
      LOG.log("deleteItem");
      if (type === this.constants.DESIGN) {
        let ind = this.schemeImgList.findIndex(
          (item) => item.image === selectFile
        );
        this.schemeImgList.splice(ind, 1);
        //必填项为空
        // if(this.schemeImgList.length < 1) {
        //   this.$toast(this.getToastMessage());
        // }
      } else if (type === this.constants.VIDEO) {
        this.designVideoList.splice(0, 1);
        this.designVideoErr = false;
        let player = videoJS('myVideo');
        player.dispose();
      }
    },
    openUpload() {
      if(this.fileSelectFlag > 1 && this.schemeImgList.length < 1) {
        this.fileSelectFlag = 1;
        this.$toast(this.getToastUploadMessage());
      } else {
        this.fileSelectFlag = 2;
      }
    },
    checkImgFile(fileList){
      LOG.log('checkImgFile', fileList);
      let hasErr = fileList.some(item => 
        item.image && !(/.jpeg|.jpg|.png/i).test(item.image)
      );
      if(hasErr && fileList.length > 1) {
        return true;
      }
      return false;
    },
    countLimit(type){
      if(this.schemeImgList.length >= this.limit && type === this.constants.DESIGN) {
        this.$toast(`图片限制最多上传${ this.limit }张`);
      }
      if(this.designVideoList.length >= 1 && type === this.constants.VIDEO) {
        this.$toast("视频限制最多上传1个");
      }
    },
    selectFile(event, type){
      LOG.log('event',event);
      LOG.log('file',event.target.files[0]);
      let file = event.target.files[0];
      if(!file){
        return;
      }
      let base64Url = '';
      let _this = this;
      if(type === this.constants.DESIGN) {
        this.fileSelectFlag = 1;
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e){
          base64Url = e.target.result;
          _this.beforeRead(file, type, base64Url);
        };
      } else if (type === this.constants.CERTIFICATE) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e){
          base64Url = e.target.result;
          _this.beforeRead(file, type, base64Url);
        };
      } else if (type === this.constants.VIDEO) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e){
          base64Url = e.target.result;
          _this.beforeRead(file, type, base64Url);
        };
      }
    },
    beforeRead(file, type, base64Url){
      if(type === this.constants.DESIGN){
        if(file.type !== 'image/jpg' && file.type !== 'image/jpeg' && file.type !== 'image/png'){
          this.$toast("请上传JPG、PNG格式的图片");
          return false;
        }
        if(file.size > this.constants.IMAGE_SIZE){
          this.$toast(`图片大小不超过${this.constants.IMAGE_SIZE / 1024 / 1024}M`);
          return false;
        }
        this.uploadToServer(file, type, base64Url);
      } else if(type === this.constants.CERTIFICATE){
        if(file.type !== 'image/jpg' && file.type !== 'image/jpeg' && file.type !== 'image/png'){
          this.$toast("请上传JPG、PNG格式的图片");
          return false;
        }
        if(file.size > this.constants.IMAGE_SIZE){
          this.$toast(`图片大小不超过${this.constants.IMAGE_SIZE / 1024 / 1024}M`);
          return false;
        }
        this.uploadToServer(file, type, base64Url);
      } else if (type === this.constants.VIDEO) {
        this.designVideoErr = false;
        if(file.type !== 'video/mp4' && file.type !== 'video/quicktime'){
          this.$toast("请上传MP4格式的视频");
          return false;
        }
        if(file.size > this.constants.VIDEO_SIZE){
          this.$toast(`视频大小不超过${this.constants.VIDEO_SIZE / 1024 / 1024}M`);
          return false;
        }
        if(file.size < this.constants.MIN_VIDEO_SIZE){
          this.$toast(`视频大小不小于${this.constants.MIN_VIDEO_SIZE / 1024 / 1024}M`);
          return false;
        }
        let arr = [];
        arr.push({ type: "video", video: base64Url, uploadfail: true, progress: 0 });
        let newArr = this.designVideoList.slice(0, this.designVideoList.length - 1);
        this.designVideoList = [...newArr, ...arr];
        this.uploadToServer(file, this.constants.VIDEO);
      }
    },
    uploadToServer(file, type, base64Url) {
      return new Promise((resolve, reject) => {
        if (type === this.constants.VIDEO){
          this.uploadingVideo = true;
        } else if(type === this.constants.DESIGN) {
          this.uploadingDesign = true;
          let arr = [];
          arr.push({ type: "image",filePath:file, image: base64Url, uploadfail: true, progress: 0 });
          let newArr = this.schemeImgList.slice(0, this.schemeImgList.length);
          this.schemeImgList = [...newArr, ...arr];
        }
        // formdata
        let params = new FormData();
        params.append('file', file, file.name);

        let xhr = new XMLHttpRequest();
        let uploader = xhr.upload;
        uploader.onprogress = (ev) => {
          // LOG.log('uploader onprogress', ev)
          const progress = parseInt((ev.loaded / ev.total) * 100);
          LOG.log('uploader onprogress', progress);

          if (type === this.constants.VIDEO) {
            let ind = this.designVideoList.length - 1;
            this.designVideoList[ind].progress = progress;
          } else if (type === this.constants.DESIGN) {
            let ind = this.schemeImgList.findIndex(
              (item) => item.filePath === file
            );
            this.schemeImgList[ind].progress = progress;
          }
        };
        xhr.open("POST", `${apiSpecialConfig.hostupload}/api/file/simpleUpload`);
        xhr.setRequestHeader("Authorization",`${apiSpecialConfig.uploadToken}`);
        xhr.send(params);

        xhr.onreadystatechange = () => {
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
            let res = JSON.parse(xhr.responseText);
            let backData = res.data;
            if(type === this.constants.DESIGN) {
              // 文件服务器地址
              let ind = this.schemeImgList.findIndex(
                (item) => item.filePath === file
              );
              this.schemeImgList.splice(ind, 1, {
                type: "image",
                image: backData,
                uploadfail: false,
                progress: 100,
              });
              if(!this.schemeImgErr){
                this.$toast("图片上传成功");
              }
              this.uploadingDesign = false;
            } else if (type === this.constants.VIDEO) {
              //文件服务器地址
              let ind = this.designVideoList.length - 1;
              this.designVideoList.splice(ind, 1, {
                type: "video",
                video: backData,
                uploadfail: false,
                progress: 100,
              });
              this.uploadingVideo = false;
              if(!this.designVideoErr){
                this.$toast("视频上传成功"); 
              }
              this.initVideoJs();
            }
            resolve();
          }
        };
        xhr.onerror = function () {
          if (type === this.constants.VIDEO){
            this.$toast.fail("视频上传失败，请检查网络");
          } else {
            this.$toast.fail("图片上传失败，请检查网络");
          }
          reject();
        };
      });
    },
    getToastUploadMessage() {
      return `请上传${ this.toastKey }`;
    },
    clearCache() {
      this.schemeImgList.splice(0, this.schemeImgList.length);
      this.designVideoList.splice(0, this.designVideoList.length);
    },
    // 下一步
    submit() {
      if(this.schemeImgList.length < 1 || this.designVideoErr || this.uploadingDesign || this.uploadingVideo) {
        return;
      }
      
      let schemeImgList = [];
      let designVideoList = [];
      this.schemeImgList
        .filter((item) => item.type === "image" && item.uploadfail === false)
        .forEach((item) => {
          schemeImgList.push(item.image);
        });
      this.designVideoList
        .filter((item) => item.type === "video" && item.uploadfail === false)
        .forEach((item) => {
          designVideoList.push(item.video);
        });

      if (schemeImgList.length < 1) {
        return this.$toast(this.getToastUploadMessage());
      }
      if (schemeImgList.length > 9) {
        return this.$toast(`最多上传${ this.limit }张图片`);
      }
      if (designVideoList.length > 1) {
        return this.$toast("视频最多上传1个");
      }  
      
      const authInfo = {
        designScheme: schemeImgList.join(','),
        designVideo: designVideoList.join(','),
      };
      this.$store.commit("user/setAuthInfo", authInfo);
      LOG.log('this.$store.setAuthInfo', authInfo);
    },
    onTest(){
      LOG.log(">>>onTest");
    }
  }
};
</script>

<style lang='scss' scoped>
.section {
  width: 100vw;
  // height: calc((100vh - 2.62rem - 2.74rem) - env(safe-area-inset-bottom));
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  background: #F6F7F6;
}


.footer{
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #FE3826;
  letter-spacing: 0;
  line-height: 18px;
}

.upload_image {
  width: auto;
  height: auto;
  background: #ffffff;
  padding: .4rem .4rem 0 .4rem;
  margin-bottom: .12rem;

  margin: v-bind(margin);
  padding: v-bind(padding);
  border-radius: v-bind(radius);
}
.upload_title {
  font-size: .28rem;
  color: #333333;
  font-weight: 600;
  margin-bottom: 0.16rem;
}
.tip_title {
  font-size: .24rem;
  color: #999999;
  letter-spacing: 0;
  line-height: .36rem;
  font-weight: 400;
}
.red {
  color: #FDC72C;
}
.image_wrapper {
  margin: .20rem 0rem 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.image_item {
  // pointer-events: none;
  width: 23%;
  width: 1.52rem;
  height: 1.52rem;
  width: 30%;
  height: 2rem;

  background: #fafafc;
  border: .01rem solid #f1f3f6;
  border-radius: .08rem;
  margin-right: 2%;
  margin-bottom: .20rem;
  overflow: hidden;

  // border: 1px solid blue;
}

.image_box {
  position: relative;
  // pointer-events: none;

  width: 100%;
  height: 100%;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  // border: 1px solid blue;
}

.user_image {
  width: 100%;
  height: 100%;
}

.mengban {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
}
.delete_btn {
  width: .30rem;
  height: .30rem;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;
}
.upload_tip {
  color: #ffffff;
  text-align: center;
  margin: .30rem auto .10rem;
  font-size: .24rem;
}
.progress {
  color: #ffffff;
  text-align: center;
  margin: .10rem auto;
  font-size: .24rem;
}
.add_btn {
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}
.add_image {
  position: relative;
  // left: 0.52rem;
  top: -1.52rem;
  // width: .48rem;
  height: .48rem;
  // width: .48rem;

  top: -1.3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.add_image_placeholder{
  pointer-events: none; //透传
  position: relative;

  width: 100%;
  height: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.add_image_video {
  pointer-events: none; //透传

  position: relative;
  left: 0.7rem;
  top: -0.7rem;
  width: .48rem;
  height: .48rem;
}

.add_image_title{
  left: -0.5rem;
  margin-top: 4px;

  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  letter-spacing: 0;
}

.add_image_img{
  width: 24px;
  height: 20px;
}

.upload_placehorlder {
  position: relative;
  // top: -2rem;
  left: -50px;
  top: 50px;

  width: 2rem;
  height: 2rem;

  // border: 1px solid blue;
}


.upload_input {
  width: auto;
  height: 2.16rem;
  background: #ffffff;
  padding: .4rem;
  margin-bottom: 0.12rem;
}
.input_box {
  width: auto;
  height: .78rem;
  background: #fafafc;
  border: .02rem solid #f1f3f6;
  border-radius: .08rem;
  margin-top: .16rem;
  display: flex;
  align-items: center;
}
.weui_input {
  width: 100%;
  height: 100%;
  padding-left: .10rem;
  font-size: .24rem;
  border: none;
}
.submit_box {
  width: 100%;
  height: 2.74rem;
  background: #ffffff;
  padding: .36rem .4rem 1.5rem;
  // position: fixed;
  left: 0;
  bottom: 0;
  bottom: constant(safe-area-inset-bottom); /*兼容 IOS<11.2*/
  bottom: env(safe-area-inset-bottom); /*兼容 IOS>11.2*/
  z-index: 22;
}
.submit {
  width: 6.7rem;
  height: .88rem;
  background: $--theme-color;
  border-radius: .44rem;
  text-align: center;
  line-height: .88rem;
  font-size: .28rem;
}
.grayColor {
  opacity: 0.3;
}
.popBox{
  background-color: #f1f3f6;
  font-size: .28rem;
  .item{
    height: 0.88rem;
    line-height: 0.88rem;
    width: 100%;
    text-align: center;
    background-color: #ffffff;
  }
  .select{
    margin-bottom: .12rem;
  }
  .new{
    margin-bottom: .02rem;
  }
}
video::-webkit-media-controls-panel {
  display:none !important;
}

.subtitle{
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  letter-spacing: 0;
}
</style>