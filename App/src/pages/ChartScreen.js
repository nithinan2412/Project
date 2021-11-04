import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image,ScrollView,StyleSheet } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { color } from 'react-native-elements/dist/helpers';

class ChartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["null"],
      datasets: [{ data: [0] }],
    };
  }
  componentDidMount() {

    //fetch API
    this.setState({
      labels: ["Verry Poor", "Poor", "Average", "Good", "Excellent"],
      labels2: ["45", "50", "55", "60", "65"],
      datasets: [
        {
          data: [3,2,4,3,5],
        },
      ]
    }), 100
  }
  render() {

    const data1 = {
      labels: ["45", "50", "55", "60", "65"],
      datasets: [
        {
          data: [1, 5, 3, 4, 4]
        }
      ]
    };
   {/* const data2 = {
      labels: ["Verry Poor", "Poor", "Average", "Good", "Excellent"],
      datasets: [
        {
          data: [1, 3, 7, 8, 7]
        }
      ]
    };*/}
    const data3 = {
      labels: ["Verry Poor", "Poor", "Average", "Good", "Excellent"],
      datasets: [
        {
          data: [1, 3, 7, 8, 7]
        }
      ]
    };

    return (
      <View style={{ flex: 1, backgroundColor: 'pink' }}>
        <ScrollView style={styles.scrollView}>
        <View style={{ backgroundColor: 'pink', margin: 10 }} >
        <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>กราฟข้อมูลอุณหภูมิ</Text>
        <LineChart
            data={data1}
            width={Dimensions.get("window").width - 20} // from react-native
            height={170}
            //yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "pink",
              backgroundGradientFrom: "#FA8EFF",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: () => `#000`,
              labelColor: () => `#000`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
        {/*<Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>กราฟข้อมูลเวลา</Text>
        <View style={{ backgroundColor: 'pink', margin: 10 }} >
        <LineChart
            data={data2}
            width={Dimensions.get("window").width - 20} // from react-native
            height={170}
            //yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "pink",
              backgroundGradientFrom: "#FA8EFF",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: () => `#000`,
              labelColor: () => `#000`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>*/}

        <View style={{ backgroundColor: 'pink', margin: 10 }} >
        <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>กราฟข้อมูลความพึงพอใจ</Text>
        <LineChart
            data={data3}
            width={Dimensions.get("window").width - 20} // from react-native
            height={170}
            //yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "pink",
              backgroundGradientFrom: "#FA8EFF",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: () => `#000`,
              labelColor: () => `#000`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
},
});
export default ChartScreen;
