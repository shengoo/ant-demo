import React from 'react';

//导入echarts
var echarts = require('echarts/lib/echarts') //必须
require('echarts/lib/chart/bar') //图表类型
require('echarts/lib/component/title') //标题插件
import '../../charcoal';


class EchartDemo extends React.Component{

    constructor(props) {
        super(props)
        this.setPieOption = this.setPieOption.bind(this)
    }

    initPie() {console.log(this.pieChart)
        const { data } = this.props //外部传入的data数据
        let myChart = echarts.init(this.pieChart, 'charcoal') //初始化echarts

        //我们要定义一个setPieOption函数将data传入option里面
        let options = this.setPieOption(data)
        //设置options
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        })
    }

    componentDidMount() {
        this.initPie()
    }

    componentDidUpdate() {
        this.initPie()
    }


    render() {
        return (
            <div className="pie-react">
                <div ref={(div) => { this.pieChart = div; }} style={{width: "400px", height: "400px"}}></div>
            </div>
        )
    }

    setPieOption(data) {
        return {
            series : [
                {
                    name: '比例',
                    type: 'pie',
                    radius: ['70%', '90%'],
                    avoidLabelOverlap: true,
                    data: data, //传入外部的data数据
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            textStyle: {
                                fontSize: '18'
                            },
                            formatter: "{d}% \n{b}",
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '18',
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    }
                }
            ]
        }
    }
}

export default EchartDemo;