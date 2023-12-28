import React, { useState } from 'react';

const MusicPlayer = () => {
  //초기값만 필요하고 변경값이 필요하지 않을 때 사용하는 useState
  const [state, setState] = useState({
    playList: ['1.mp3', '2.mp3', '3.mp3'],
    currentSong: 0,
    isPlaying: false, //처음엔 무조건 시작하지 않는 역할
  });
  //재생 버튼을 누를 때 재생이 될 수 있도록 설정
  const playSong = () => {
    setState((prevState) => ({ ...prevState, isPlaying: true }));
  };

  //일시정지 버튼
  const pauseSong = () => {
    setState((prevState) => ({ ...prevState, isPlaying: false }));
  };
  //재생목록
  const displayPlayList = () => {
    console.log('재생목록 :', state.playList.join(','));
  };

  //다음 곡 재생
  const playNextSong = () => {
    const nextSong = (state.currentSong + 1) % state.playList.length; //음악이 끝나면 처음으로 돌아가는 역할

    setState((prevState) => ({ ...prevState, currentSong: nextSong })); //이전 상태 복사해와서 currentSong에다가 nextSong 해주는 역할
  };
  return (
    <div>
      <h1>음악플레이어</h1>
      <p>현재 재생중 : {state.playList[state.currentSong]}</p>
      <button onClick={playSong} disabled={state.isPlaying}>
        재생
      </button>
      <button onClick={pauseSong} disabled={!state.isPlaying}>
        일시정지
      </button>
      <button onClick={playNextSong}>다음 곡</button>
      <button onClick={displayPlayList}>재생 목록 보기</button>
    </div>
  );
};
export default MusicPlayer;
