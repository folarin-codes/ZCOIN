import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          paddingVertical:10,
          height:80

        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name='Home' color={focused ? '#0063F5':'#6C757D'} image={require('../../assets/images/home.png')} />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name='Portfolio' image={require('../../assets/images/portfolio.png')} color={focused ? '#0063F5':'#6C757D'} />
          ),
        }}
      />
           <Tabs.Screen
        name="rewards"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'Rewards'} image={require('../../assets/images/rewards.png')}  color={focused ? '#0063F5':'#6C757D'} />
          ),
        }}
      />     <Tabs.Screen
      name="markets"
      options={{
        title: '',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={'Markets'} image={require('../../assets/images/market.png')} color={focused ? '#0063F5':'#6C757D'} />
        ),
      }}
    /> <Tabs.Screen
    name="profile"
    options={{
      title: '',
      tabBarIcon: ({ color, focused }) => (
        <TabBarIcon name={'Profile'} image={require('../../assets/images/profile.png')} color={focused ? '#0063F5':'#6C757D'} />
      ),
    }}
  />
    </Tabs>
  );
}
