/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import styled from 'styled-components'
import { HeroHeading } from '@/components/atoms/Heading/Heading'
import { VideoPlayer } from '@/components/molecules/VideoPlayer'

const BannerContainer = styled.div`
  overflow-x: hidden;
  min-height: 700px;
  height: 90vh;
  width: 100%;
  background: var(--color-background-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const RowOne = styled.span`
  display: flex;
  flex-direction: row;
  font-size: clamp(50px, 8vw, 125px);
  padding-left: 1vw;
  justify-content: space-between;
  span {
    white-space: nowrap;
  }
`

const RowTwo = styled.span`
  margin: 0 auto;
  font-size: clamp(90px, 12vw, 188px);
  margin-top: 49;
  margin-bottom: 49px;
  width: 100%;
`

const RowThree = styled.span`
  display: flex;
  flex-direction: row;
  font-size: clamp(50px, 8vw, 125px);
  justify-content: space-between;
  span {
    padding-right: 1vw;
  }
`

export const HeroBanner = () => (
  <BannerContainer>
    <HeroHeading>
      <RowOne>
        <span>I create </span>
        <VideoPlayer src="/assets/images/aboutVid.mp4" />
        <VideoPlayer src="/assets/images/aboutVid.mp4" />
      </RowOne>
      <RowTwo>memorable</RowTwo>
      <RowThree>
        <VideoPlayer src="/assets/images/aboutVid.mp4" />
        <span> experiences</span>
      </RowThree>
    </HeroHeading>
  </BannerContainer>
)
