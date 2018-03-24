import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import axios from 'axios';

export default class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.onChartReadyCallback = this.onChartReadyCallback.bind(this);
  }
  componentWillMount() {
    axios.get('/users/temp')
      .then((res) => {
        if(res.data.errcode == 0) {
          this.setState(Object.assign({}, this.state, {
            date: res.data.data.date,
            data: res.data.data.temperature.map(function(ele, index) {
              return [index, ele];
            }),
          }));
        }
      });
  }

  onChartReadyCallback() {
    console.log('finished');
  }

  getOption() {
    console.log(this.state);
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    title: {
        text: `${this.state.date}温度变化曲线`,
        subtext: '每隔一小时记录一次，单位为摄氏度',
        left: 'center',
        top: 16
    },
    xAxis: {
      name: '时间',
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        splitNumber: 24
    },
      yAxis: {
        name: '温度',
        type: 'value',
        min: -10,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    grid: {
      top: 90
    },
    series: [{
        type: 'scatter',
        label: {
            emphasis: {
                show: true,
                position: 'right',
                textStyle: {
                    color: 'blue',
                    fontSize: 16
                }
            }
        },
        data: this.state.data
    }, {
      type: 'line',
      smooth: true,
      showSymbol: false,
      data: this.state.data,
      markPoint: {
        itemStyle: {
          normal: {
            color: 'transparent'
          }
        },
        label: {
          normal: {
          show: true,
          position: 'left',
          textStyle: {
            color: '#333',
            fontSize: 14
          }
        }
      },
    }
    }],
      toolbox: {
        show: true,
      }
    };
  }
  render() {
    return (
      <div>
        <p>Temperature</p>
        <ReactEcharts
        option={this.getOption()}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
        onChartReady={this.onChartReadyCallback}
        />
      </div>
    )
  }
}
