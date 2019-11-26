<template>
    <div style="height: 100%;" ref="echart">
        echart
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    props: {
        chartData: {
            type: Object,
            default() {
                return {
                    xData: [],
                    series: []
                }
            }
        },
        isAxisChart: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        options() {
            return this.isAxisChart ? this.axisOption : this.normalOption
        }
    },
    data () {
        return {
            echart: null,
            axisOption: {},
            normalOption: {}
        }
    },
    methods: {
        initChart() {
            if(this.echart){
                this.echart.setOption(this.options)
            }else {
                this.echart = echarts.init(this.refs.echart)
                this.echart.setOption(this.options)
            }
        },
        initChartData(){
            if(this.isAxisChart){
                console.log('axis')
            }else {
                console.log('normal')
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
