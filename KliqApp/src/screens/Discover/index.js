import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import GradientText from '../../components/Common/GrText';
import { CoinLineChart } from '../../components/Common/LineChart';
import { COLORS, icons } from '../../constants';

import { DiscoverStyles } from './styles';

const Discover = ({ navigation }) => {
  const [istoolTipVisible, settoolTipVisible] = useState(false)
  return (
    <SafeAreaView style={DiscoverStyles.wrapper}>
      <Text style={DiscoverStyles.toptitleStyle}>Wallet</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '50%', height: 100, marginTop: 32, marginStart: 5 }}>
          <Text style={DiscoverStyles.ethLbl}>300.13 ETH</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <GradientText style={DiscoverStyles.totalAmount}>907,632</GradientText>
            <Text style={DiscoverStyles.currencySym}>$</Text>
          </View>
          <Text style={DiscoverStyles.desc}>{'TOTAL' + '\n' + 'FUNDS'}</Text>
        </View>
        <View style={{ width: '50%', marginTop: 32, marginStart: 5 }}>
          <Text style={DiscoverStyles.ethLbl}>300.13 ETH</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <GradientText style={DiscoverStyles.totalAmount}>313.321</GradientText>
            <Text style={DiscoverStyles.currencySym}>$</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={DiscoverStyles.desc}>
                {'YIELD' + '\n'}
              </Text>
              <TouchableOpacity onPress={() => settoolTipVisible(true)}>
                <Image
                  source={icons.info}
                  style={{
                    width: 12,
                    height: 12,
                    marginStart: 5,
                    marginTop: 2,
                    tintColor: COLORS.gray,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={DiscoverStyles.descBtm}>
                {'12.31%' + '\n'}
              </Text>
              <Text style={DiscoverStyles.incLbl}>
                {'+1.2%' + '\n'}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ width: '50%', height: 100, marginTop: 32, marginStart: 5 }}>
          <Text style={DiscoverStyles.ethLbl}>20.12 ETH</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <GradientText style={DiscoverStyles.totalAmount}>21,212</GradientText>
            <Text style={DiscoverStyles.desc}>{'TOTAL KLIQ COINS'}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%', marginBottom: 10}}>
            <TouchableOpacity style={DiscoverStyles.receivedBtn}>
              <Text style={DiscoverStyles.yieldLbl}>YIELD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={DiscoverStyles.yieldBtn} onPress={() => navigation.navigate('Transactions')}>
              <Text style={DiscoverStyles.receivedLbl}>RECEIVED</Text>
            </TouchableOpacity>
        </View>
        <CoinLineChart />
    </SafeAreaView>
  );
};

export default Discover;
