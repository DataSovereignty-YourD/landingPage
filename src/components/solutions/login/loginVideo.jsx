import ReactPlayer from 'react-player';
import styled from 'styled-components';

function LoginVideo() {
  const videoUrl = './webAuth_demo_0123.mp4';

  return (
    <VideoWrapper>
      <div className="flex flex-col justify-center items-center my-24 mx-auto w-full ">
        <div className="text-center mb-4 w-full items-center justify-center flex flex-col">
          <div className="w-fit text-4xl font-pre-bold text-transparent pb-1 bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">How it works</div>
          <div className='text-4xl mt-2 font-bold mb-8'>
            Introducing Your<span className="text-[#fccc00]">D</span> Auth
          </div>
        </div>
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          controls
          style={{borderRadius:18,overflow:'hidden'}}
          className="mx-auto"
        />
      </div>
    </VideoWrapper>
  );
}

const VideoWrapper = styled.div`
  width: 100%; /* 기본 너비 */

  @media screen and (min-width: 640px) {
    /* sm 이상일 때 */
    max-width: 1000px; /* 더 큰 너비로 지정 */
    margin: 0 auto; /* 중앙 정렬 */
  }

  @media screen and (max-width: 640px) {
    /* sm 미만일 때 */
    max-width: 400px; /* 작은 너비로 지정 */
    margin: 0 auto; /* 중앙 정렬 */
  }
`;

export default LoginVideo;
