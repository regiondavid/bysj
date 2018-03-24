import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Gas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  getOption() {
    return {
    title: {
        text: '粮仓气体采集对比'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['硫化氢','二氧化碳','氧气','其他气体']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'硫化氢',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'二氧化碳',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'氧气',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'其他气体',
            type:'line',
            stack: '总量',
            data:[320, 332, 101, 334, 260, 330, 320]
        }
    ]
    };
  }
  render() {
    return (
      <div>
        <p>粮仓气体采集</p>
                <ReactEcharts
        option={this.getOption()}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
        />
      </div>
    )
  }
}
