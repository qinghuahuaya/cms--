// 饼形图 -- 封装函数特点 : 变量名方便 , 方便ajax渲染
const setPie = _ => {
    let myChart = echarts.init(document.querySelector('.pie'))
    let option = {
        // 新增添加标题
          title : {
          // 标题
            text : '籍贯 Hometown',
            // 标题颜色
            textStyle : {
            color : '#6d767e'
            }
          },
        // 删除图例组件
          // legend: {
          //   top: 'bottom'
          // },
        // 删除工具栏 组件
          // toolbox: {
          //   show: true,
          //   feature: {
          //     mark: { show: true },
          //     dataView: { show: true, readOnly: false },
          //     restore: { show: true },
          //     saveAsImage: { show: true }
          //   }
          // },
        // 新增提示框组件
         tooltip : {
          // 饼图 , 仪表盘 , 漏斗图 : {a} (系列名称) , {b} (数据项名称) ,
          //                          {c} (数值) , {d} (百分比)
           formatter : "{a}<br>{b} <b>{c}</b> 占比{d}人"
         },
          series: [
            {
              name: '各地人员分布',
              type: 'pie',
              // 圆心半径  内圆 和外圆
              radius: ['10%', '60%'],
              // 圆心位置
              center: ['50%', '50%'],
              // area面积模式 radius 半径模式
              roseType: 'area',
              // 元素样式
              itemStyle: {
                // 扇形圆角圆润程度
                borderRadius: 4
              },
              // 内容
              data: [
                { value: 6, name: '广东省' },
                { value: 4, name: '甘肃省' },
                { value: 1, name: '河南省' },
                { value: 6, name: '广西壮族自治区' },
                { value: 5, name: '黑龙江省' },
                { value: 4, name: '西藏自治区' },
                { value: 2, name: '河北省' },
                { value: 3, name: '云南省' },
                { value: 4, name: '内蒙古自治区' },
                { value: 4, name: '湖南省' },
                { value: 7, name: '江苏省' },
                { value: 4, name: '山东省' },
                { value: 6, name: '新疆维吾尔族自治区' },
              ]
            }
          ]
        };
    myChart.setOption(option)
}
// 调用函数  函数不调用不执行 
setPie ()



// 折线图  -- 封装函数特点 : 变量名方便 , 方便ajax渲染
const setLine = _ => {
    let myChart = echarts.init(document.querySelector('.line'))
    // 删除随机数代码 , 控制x轴坐标值的数据
  // let base = +new Date(1968, 9, 3);
  // let oneDay = 24 * 3600 * 1000;
  // let date = [];
  // let data = [Math.random() * 300];
  // for (let i = 1; i < 20000; i++) {
  //   let now = new Date((base += oneDay));
  //   date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
  //   data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  // }
 let option = {
  // 提示框
  tooltip: {
    // 触发 axis 轴触发 
    trigger: 'axis',
    // 提示框位置
    position: function (pt) { // pt 鼠标坐标的数组
    // x坐标是你鼠标的位置 y坐标固定10%   位置   
      return [pt[0], '10%'];
    }
  },
  // 头部指示框
  legend : {
    //  组件离顶部位置
    top : 20
  },
  // 标题
  title: {  
    // 标题位置 默认靠左
    // left : 'center',
    // 标题
    text: '薪资 Salary',
    // 标题样式
    textStyle : {
    // 标题颜色
    color : '#6d767e'
    }
  },
// 提示框不用删除  
  //   toolbox: {
  //   feature: {
  //     dataZoom: {
  //       yAxisIndex: 'none'
  //     },
  //     restore: {},
  //     saveAsImage: {}
  //   }
  // },
  // x轴 
  xAxis: {
    // 类别
    type: 'category',
    // 两侧是否留白 false不留白 true留白
    boundaryGap: false,
    // 修改x轴坐标值
    data:  ['张三', '李四', '张飞', '赵云', '狗哥', '张三', '李四', '张飞', '赵云', '狗哥', '张三', '李四', '张飞', '赵云', '狗哥', '张三', '李四', '张飞', '赵云', '狗哥']
  },
  // y轴
  yAxis: {
    type: 'value',
    // y轴留白 留白影响最大值和最小值
    boundaryGap: [0, '50%']
  },
  // 底部缩放组件
  dataZoom: [
    {
      // slider : 滑块 (默认) inside : 鼠标滑轮
      type : 'slider',
      start: 0, // 起始位置
      end: 100 // 结束位置
    },
  ],
  // 线条颜色外置写法
  // color : ['#ee6666','#5470c6'],
  series: [
    {
      // 第一条线的名字
      name: '期望薪资',
      type: 'line',// 折现
      symbol: 'none',// 数据点拐点位置的样式none表示没用 
      smooth : true ,// 使用平滑曲线
      sampling: 'lttb',// 转折位置的策略
      // 元素样式
      itemStyle: {
        //第一条线的颜色
        color: '#ee6666'
      },
  // 删除areaStyle 控制面积颜色删除
      // areaStyle: {
      //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //     {
      //       offset: 0,
      //       color: 'rgb(255, 158, 68)'
      //     },
      //     {
      //       offset: 1,
      //       color: 'rgb(255, 70, 131)'
      //     }
      //   ])
      // },
    // 修改了期望薪资的数据
      data: [8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000]
    },
    {
      // 第二条线的名字
      name: '实际薪资',
      type: 'line', // 折现
      smooth : true ,// 使用平滑曲线
      symbol: 'none', // 数据点拐点位置的样式none表示没用 
      sampling: 'lttb', // 转折位置的策略
      // 元素样式
      itemStyle: {
        // 第二条线的颜色
        color: '#5470c6'
      },
  // 删除areaStyle 控制面积颜色删除
    // 修改了期望薪资的数据
      data: [9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 13000]
    }
  ]
};
    myChart.setOption(option)
}
// 调用函数  函数不调用不执行  
setLine ()



// 柱状图  -- 封装函数特点 : 变量名方便 , 方便ajax渲染
const setBar = _ => {
    let myChart = echarts.init(document.querySelector('.barChart'))
    let option = {
        // 鼠标移入提示框
        tooltip: {
          // 触发方式 , axis表示轴触发 , item表示每一项
          trigger: 'axis',
          // 坐标轴指示器配置项
          axisPointer: {
            // 十字准星指示器,其他选项lien shadow none (配合x轴设置组成十字准星)
            type: 'cross',
            // 样式
            crossStyle: {
              // 颜色
              color: '#999'
            }
          }
        },
      // 删除工具栏组件  
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ['line', 'bar'] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
      // 删除图例组件中data属性  
        legend: {},
      // 添加网格
      grid : {
        // 离顶部的距离
        top : 30 ,
        // 离底部的距离
        bottom : 30 ,
        // 离左侧的距离
        left : '7%' ,
        // 离右侧的距离
        right : '7%'
      },
      // x轴
        xAxis: [
          {
            // type 类别category类型
            type: 'category',
            // 数值
            data: ['1组', '2组', '3组', '4组', '5组', '6组', '7组'],
            // x轴样式设置
            axisPointer: {
              type: 'shadow' //鼠标进入 有阴影
            }
          }
        ],
        yAxis: [
          {
            // 属性 值
            type: 'value',
            // name: 'Precipitation', 坐标轴名称
            min: 0, // 数据最小值
            max: 100, // 数据最大值
            interval: 10,//间隔 把 y轴分成多少份
            // y轴文字设置
            axisLabel: {
              // y轴文字
              formatter: '{value}分'
            }
          },
          {
            type: 'value',
            // name: 'Temperature', 坐标轴名称
            min: 0, //数据最小值
            max: 10, // 数据最大值
            interval:1, // step步长 把y轴的数据分成多少份
            // y轴文字设置
            axisLabel: {
              // y轴文字
              formatter: '{value}人'
            }
          }
        ],
        series: [
          {
            name: '平均分', // 第一根柱子的名字
            type: 'bar',// 样式属性 bar柱子
            barWidth : '15' , //柱子宽度
         // 删除提示框外边有了没用      
            // tooltip: {
            //   valueFormatter: function (value) {
            //     return value + ' ml';
            //   }
            // },
            // 数值
            data:[83, 57, 90, 78, 66, 76, 77, 87, 69, 92, 88, 78]
          },
          {
            name: '低于60分人数',//第2根柱子的名字
            type: 'bar',// 样式属性 bar柱子
            yAxisIndex: 1, // 以哪个y轴为准 0 是左侧 1是右侧
            barWidth : '15' , //柱子宽度
         // 删除提示框外边有了没用  
        // 数值
            data: [2, 1, 3, 4, 2, 5, 2, 2, 4, 1, 6, 2]
          },
          {
            name: '60到80分之间', // 第3根柱子的名字
            type: 'bar', // 样式属性 bar柱子
            yAxisIndex: 1, // 以哪个y轴为准 0 是左侧 1是右侧
           // 删除提示框外边有了没用  
           barWidth : '15' , //柱子宽度
          // 数值
            data: [3, 2, 1, 5, 1, 2, 3, 4, 5, 2, 2, 4]
          },{
            name: '高于80分人数', // 第4根柱子的名字
            type: 'bar', // 样式 bar柱子
            yAxisIndex: 1, // 以哪个y轴为准 0 是左侧 1是右侧
           // 删除提示框外边有了没用  
           barWidth : '15' , //柱子宽度
          // 数值
            data: [ 9, 5, 4, 3, 6, 7, 5, 6, 8, 6, 7, 9,]
          }
        ]
      };
    myChart.setOption(option)
}
// 调用函数  函数不调用不执行 
setBar ()



// 地图  -- 封装函数特点 : 变量名方便 , 方便ajax渲染
const setMap = _ => {
    let myChart = echarts.init(document.querySelector('.map'))
    console.log(document.querySelector('.map'));
    
  // 位置 + 经纬度
  let chinaGeoCoordMap = {
    "顺义校区": [
        116.4551,
        40.2539
    ],
    "海拉尔区": [
        119.736279,
        49.212189
    ],
    "市中区": [
        116.997777,
        36.651474
    ],
};
  let chinaDatas = [
    [
        {
            "name": "海拉尔区",
            "value": 0
        }
    ],
    [
        {
            "name": "市中区",
            "value": 0
        }
    ],
];

  let convertData = function (data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let dataItem = data[i];
      let fromCoord = chinaGeoCoordMap[dataItem[0].name];
      let toCoord = [116.4551, 40.2539]; // 目标点经纬度（北京顺义校区）
      if (fromCoord && toCoord) {
        res.push([{
          coord: fromCoord,
          value: dataItem[0].value
        }, {
          coord: toCoord,
        }]);
      }
    }
    return res;
  };
  let series = [];
  [['顺义校区', chinaDatas]].forEach(function (item, i) {
    series.push({
      type: 'lines',
      zlevel: 2,
      effect: {
        show: true,
        period: 4, //箭头指向速度，值越小速度越快
        trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
        symbol: 'arrow', //箭头图标
        symbolSize: 5, //图标大小
      },
      lineStyle: {
        normal: {
          width: 1, //尾迹线条宽度
          opacity: 1, //尾迹线条透明度
          curveness: 0.2 //尾迹线条曲直度
        }
      },
      data: convertData(item[1])
    }, {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: { //涟漪特效
        period: 4, //动画时间，值越小速度越快
        brushType: 'stroke', //波纹绘制方式 stroke, fill
        scale: 4 //波纹圆环最大限制，值越大波纹越大
      },
      label: {
        normal: {
          show: true,
          position: 'right', //显示位置
          offset: [5, 0], //偏移设置
          formatter: function (params) {//圆环显示文字
            return params.data.name;
          },
          fontSize: 12
        },
        emphasis: {
          show: true
        }
      },
      symbol: 'circle',
      symbolSize: function (val) {
        return 4 + val[2] * 5; //圆环大小
      },
      itemStyle: {
        normal: {
          show: false,
          color: '#f00'
        }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[0].name,
          value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
        };
      }),
    },
      //被攻击点
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          period: 4,
          brushType: 'stroke',
          scale: 4
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            offset: [5, 0],
            color: '#9eca7f', // 目标点文字颜色
            formatter: '{b}',
            textStyle: {
              color: "#9eca7f"
            }
          },
          emphasis: {
            show: true,
            color: "#f60", // 目标点鼠标移入的颜色
          }
        },
        symbol: 'pin',
        symbolSize: 50,
        data: [{
          name: item[0],
          value: chinaGeoCoordMap[item[0]].concat([10]),
        }],
      }
    );
  });

  let option = {
    title: {
      text: '来京路线 From',
      textStyle: {
        color: '#6d767e'
      }
    },
    // tooltip: {
    //   trigger: 'item',
    //   backgroundColor: 'rgba(166, 200, 76, 0.82)',
    //   borderColor: '#FFFFCC',
    //   showDelay: 0,
    //   hideDelay: 0,
    //   enterable: true,
    //   transitionDuration: 0,
    //   extraCssText: 'z-index:100',
    //   formatter: function (params, ticket, callback) {
    //     //根据业务自己拓展要显示的内容
    //     let res = "";
    //     let name = params.name;
    //     let value = params.value[params.seriesIndex + 1];
    //     res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
    //     return res;
    //   }
    // },
    // backgroundColor: "#013954",
    // visualMap: { //图例值控制
    //   min: 0,
    //   max: 1,
    //   calculable: true,
    //   show: false,
    //   color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
    //   textStyle: {
    //     color: '#fff'
    //   }
    // },
    geo: {
      map: 'china',
      zoom: 1.2,
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true, //是否允许缩放
      itemStyle: {
        normal: {
          // color: 'rgba(51, 69, 89, .5)', //地图背景色
          // color: '#5a6fc0', //地图背景色
          // borderColor: '#516a89', //省市边界线00fcff 516a89
          borderWidth: 1
        },
        emphasis: {
          color: 'rgba(37, 43, 61, .5)' //悬浮背景
        }
      }
    },
    series: series
  };

    myChart.setOption(option)
}
// 调用函数  函数不调用不执行 
setMap ()