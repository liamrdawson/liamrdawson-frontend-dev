import styled from 'styled-components'

const VideoPlayerContainer = styled.div`
  position: relative;
  height: 180px;
  width: 225px;
  border-radius: 7px;
  overflow: hidden;
  align-self: center;
  video {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: -50px;
    bottom: 0;
    width: 400px;
    vertical-align: middle;
    margin: auto 0;
    border: 0;
    padding: 0;
  }
`

type VideoPlayerProps = {
  src: string
}

export const VideoPlayer = ({ src }: VideoPlayerProps) => (
  <VideoPlayerContainer>
    <video autoPlay loop playsInline src={src} preload="metadata" muted />
  </VideoPlayerContainer>
)
