import ReactPlayer from 'react-player';

function LoginVideo() {
  const videoUrl = './YourD_Credential_Demo_tts3.mp4';

  return (
    <div className="flex flex-col justify-center items-center my-24 mx-auto w-full">
      <div className="text-center mb-4">
        <div className="font-bold text-2xl text-slate-600">How it works</div>
        <div className='text-4xl mt-2 font-bold'>
          Introducing Your<span className="text-[#fccc00]">D</span> Auth
        </div>
      </div>
      <ReactPlayer
        url={videoUrl}
        width="1000px"
        height="600px"
        controls
        className="mx-auto"
      />
    </div>
  );
}

export default LoginVideo;
