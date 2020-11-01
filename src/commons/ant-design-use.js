/* eslint-disable */
import {
  Button ,
  Modal ,
  Input,
  Tabs,
  Icon,
  Empty,
} from 'ant-design-vue'
import Vue from 'vue'
Vue.use(Button)
Vue.use(Modal)
Vue.use(Input)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Empty)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$warning = Modal.warning
