import { createApp } from 'vue'
// ch03
import FirstApp from './components/ch03/FirstApp.vue'
import ReactiveVar from './components/ch03/ReactiveVar.vue'
import ReactiveMulti from './components/ch03/ReactiveMulti.vue'
import ComputeGood from './components/ch03/ComputeGood.vue'
import MethodCompute from './components/ch03/MethodCompute.vue'
// ch04
import BindBasic from './components/ch04/BindBasic.vue'
import BindObject from './components/ch04/BindObject.vue'
import StyleBasic from './components/ch04/StyleBasic.vue'
import ClassBasic from './components/ch04/ClassBasic.vue'
import CloakBasic from './components/ch04/CloakBasic.vue'


// const app = createApp(FirstApp)
// const app = createApp(ReactiveVar)
// const app = createApp(ReactiveMulti)
// const app = createApp(ComputeGood)
// const app = createApp(MethodCompute)
// const app = createApp(BindBasic)
// const app = createApp(BindObject)
// const app = createApp(ClassBasic)
const app = createApp(CloakBasic)
app.mount('#app')
