/* eslint-disable */
import {
  Button ,
  Modal ,
  Input,
  Tabs,
  Icon,
  Empty,
  message,
  Tooltip,
  Form,
} from 'ant-design-vue'
import Vue from 'vue'
Vue.use(Button)
Vue.use(Modal)
Vue.use(Input)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Empty)
Vue.use(Tooltip)
Vue.use(Form)

Vue.prototype.$message = message
Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$warning = Modal.warning
Vue.prototype.$error = Modal.error
