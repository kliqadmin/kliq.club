import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TouchableHighlight, FlatList } from 'react-native';
import GradientText from '../../components/Common/GrText';
import { CoinLineChart } from '../../components/Common/LineChart';
import { COLORS, icons } from '../../constants';

import { TransactionStyles } from './styles';

const Transactions = ({ navigation }) => {
  const [istoolTipVisible, settoolTipVisible] = useState(false)
  const data = [
    {
      id: 1,
      amount: "0.3",
      fan_name: "John",
      from: "0x559443063737ED53dE5Fc8dC03752A99d607d7F7",
      transaction_date: "29 Jan, 2022 8:30 AM"
  },
  {
      id: 2,
      amount: "0.7",
      fan_name: "Kayle",
      from: "0x559443063737ED53dE5Fc8dC03752A99d607d7F7",
      transaction_date : "1 Feb, 2022 5:30 AM"
  },
  {
    id: 3,
    amount: "0.4",
    fan_name: "Philips",
    from: "0x559443063737ED53dE5Fc8dC03752A99d607d7F7",
    transaction_date : "3 Feb, 2022 8:22 AM"
},
{
  id: 4,
  amount: "0.6",
  fan_name: "Chris",
  from: "0x559443063737ED53dE5Fc8dC03752A99d607d7F7",
  transaction_date : "19 Jan, 2022 11:30 AM"
},
{
  id: 5,
  amount: "0.4",
  fan_name: "Philips",
  from: "0x559443063737ED53dE5Fc8dC03752A99d607d7F7",
  transaction_date : "3 Feb, 2022 8:22 AM"
},
{
id: 6,
amount: "0.6",
fan_name: "Chris",
from: "0x559443063737ED53dE5Fc8dC03752A99d607d7F7",
transaction_date : "19 Jan, 2022 11:30 AM"
}
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={TransactionStyles.row}>
          {/* <Image source={{ uri: item.image }} style={TransactionStyles.pic} /> */}
          <View>
            <View style={TransactionStyles.nameContainer}>
              <Text style={TransactionStyles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.amount}</Text>
              <Text style={TransactionStyles.mblTxt}>{item.transaction_date}</Text>
            </View>
            <View style={TransactionStyles.msgContainer}>
              <Text style={TransactionStyles.msgTxt}>{item.from}</Text>
            </View>
            <View style={TransactionStyles.fanContainer}>
              <Text style={TransactionStyles.msgTxt}>{`Fan name: ${item.fan_name}`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={TransactionStyles.wrapper}>
        <FlatList
          data={data}
          keyExtractor = {(item) => {
            return item.id;
          }}
          renderItem={renderItem}/>
    </SafeAreaView>
  );
};

export default Transactions;
