import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TouchableHighlight, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import GradientText from '../../components/Common/GrText';
import { CoinLineChart } from '../../components/Common/LineChart';
import { COLORS, icons } from '../../constants';
import { GetDashboardData } from './redux/actions';

import { DiscoverStyles } from './styles';

const Discover = ({ navigation }) => {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const [dashboardData, setDashboardData] = useState(undefined);

  const [totalFunds, setTotalFunds] = useState(undefined);
  const [yieldFund, setYieldFund] = useState(undefined);
  const [kliqFund, setkliqFund] = useState(undefined);

  useEffect(() => {
    const data = {}
    dispatch(GetDashboardData({
      data,
      onSuccess: res => {
        setDashboardData(res);
        console.log('dashboardData', res)
        if (res && res.total_funds) {
          const { total_funds, total_kliq_coins } = res;
          setTotalFunds(total_funds);
          setYieldFund(res.yield);
          setkliqFund(total_kliq_coins);
          setIsLoading(false);
        }
      },
      onError: err => console.log(err),
    }));
  }, [])
  const totalEth = totalFunds !== undefined ? totalFunds.eth : 'NA';
  const totalUSD = totalFunds !== undefined ? totalFunds.eth : 'NA';
  const yieldEth = yieldFund !== undefined ? yieldFund.eth : 'NA';
  const yieldUSD = yieldFund !== undefined ? yieldFund.dollars : 'NA';
  const yieldPer = yieldFund !== undefined ? yieldFund.percentage : 'NA';
  const kliqEth = kliqFund !== undefined ? kliqFund.eth : 'NA';
  const kliqUSD = kliqFund !== undefined ? kliqFund.dollars : 'NA';
  console.log('totalEthtotalEthtotalEth', totalEth)
  return (
    <SafeAreaView style={DiscoverStyles.wrapper}>
      <Text style={DiscoverStyles.toptitleStyle}>Wallet</Text>
      {isLoading ? (<>
      <View style={{marginTop: 150}}>
      <ActivityIndicator
          visible={true}
          size={'large'}
          textContent={'Loading...'}
          textStyle={DiscoverStyles.lottie}
        >
        </ActivityIndicator>
      </View>
      </>) : (
        <>
          <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '50%', height: 100, marginTop: 32, marginStart: 5 }}>
          <Text style={DiscoverStyles.ethLbl}>{`${totalEth}ETH`}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <GradientText style={DiscoverStyles.totalAmount}>{`${totalUSD}`}</GradientText>
            <Text style={DiscoverStyles.currencySym}>$</Text>
          </View>
          <Text style={DiscoverStyles.desc}>{'TOTAL' + '\n' + 'FUNDS'}</Text>
        </View>
        <View style={{ width: '50%', marginTop: 32, marginStart: 5 }}>
          <Text style={DiscoverStyles.ethLbl}>{`${yieldEth}ETH`}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <GradientText style={DiscoverStyles.totalAmount}>{`${yieldUSD}`}</GradientText>
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
                {`${yieldPer}%`}
              </Text>
              <Text style={DiscoverStyles.incLbl}>
                {'+1.2%' + '\n'}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ width: '50%', height: 100, marginTop: 32, marginStart: 5 }}>
          <Text style={DiscoverStyles.ethLbl}>{`${kliqEth}ETH`}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <GradientText style={DiscoverStyles.totalAmount}>{`${kliqUSD}`}</GradientText>
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
        </>
      )}

    </SafeAreaView>
  );
};

export default Discover;
