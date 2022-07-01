# VPopup

```
    <VPopup
    v-model:show="showPopover" 
    :items="popItems"
    @click="clickPopue"
    >
    </VPopup>
```

```
///pop
const popItems = reactive([
  {
    title: '一键已读',
    icon: require('@/assets/images/icon_read_all.png'),
  },
  {
    title: '编辑',
    icon: require('@/assets/images/icon_edit_two.png'),
  },
  {
    title: '消息设置',
    icon: require('@/assets/images/icon_msg_setting.png'),
  },
]);


const clickPopue = (index) => {
  console.log(index);
};
```