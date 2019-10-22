import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import index from './c/index.vue'
import no2 from './c/no2.vue'
import no3 from './c/no3.vue'
import no4 from './c/no4.vue'
import no2child from './c/no2child.vue'
import no2sun from './c/no2sun.vue'
Vue.use(Router)
Vue.use(Resource)
var routes = [{
		path: '/',
		name: 'index',
		component: index
	},
	{
		path: '/no2',
		name: 'no2',
		component: no2,
		children: [{
				path: 'no2child/:value',
				name: 'no2child',
				component: no2child,
				children:[
					{
						path:'no2sun',
						name:'no2sun',
						component:no2sun
					}
				]
			}

		]
	},
	{
		path: '/no3',
		name: 'no3',
		component: no3
	},
	{
		path: '/no4',
		name: 'no4',
		component: no4
	},
]

var router = new Router({
	routes
})

export default router