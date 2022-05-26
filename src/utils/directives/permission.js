const permission = {
  inserted: function (el, binding) {
      let hasPermission = binding.value; // 获取到 v-permission的值
      if (!hasPermission) {
          // 没有权限 移除Dom元素
          el.parentNode && el.parentNode.removeChild(el);
      }
  },
};

export default permission;


//   <!-- 显示 -->
//   <button v-permission="true">权限按钮1</button>
//   <!-- 不显示 -->
//   <button v-permission="false">权限按钮2</button>