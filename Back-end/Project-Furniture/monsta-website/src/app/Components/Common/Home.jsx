import React from 'react'
import SliderComponent from '../SliderComponents'
import BannerSection from '../BannerSection'
import Container1 from '../Container1'
import TrandingCollection from '../TrandingCollection'
import BestSelling from '../BestSelling'
import SecondLast from '../SecondLast'

export default function Home() {
  return (
    <div>
      <SliderComponent/>
      <BannerSection/>
      <Container1/>
      <TrandingCollection/>
      <BestSelling/>
      <SecondLast/>
    </div>
  )
}
