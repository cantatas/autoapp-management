/* eslint-disable */
import {
  Button ,
  Modal ,
  Empty,
} from 'ant-design-vue'
import Vue from 'vue'
Vue.use(Button )
Vue.use(Modal)
Vue.use(Empty)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$warning = Modal.warning
