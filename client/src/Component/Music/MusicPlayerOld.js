import React, { useState, useEffect } from 'react';

const MusicPlayerOld = () => {
  const audioUrls = ['https://ex/song1.mp3', 'https://ex/song2.mp3'];

  //플레이 리스트
  const [playList, setPlayList] = useState(['제목1', '제목2', '제목3']);
  //현재 재생중인 음악
  const [currentSong, setCurrentSong] = useState(0);
  //음악 재생, 음악 일시정지를 위한 상태
  const [isPlaying, setIsPlaying] = useState(false);
  //오디오 박스
  const [audio, setAudio] = useState(new Audio(audioUrls[currentSong]));

  useEffect(() => {
    // Audio 박스 객체를 초기화
    setAudio(new Audio(audioUrls[currentSong]));

    //재생중을 누를 경우 재생이 될 수 있도록 설정
    if (isPlaying) {
      Audio.play();
    }

    // Audio 처음 시작할 때 시간과 일시정지를 설정
    return () => {
      audio.pause();
      audio.currentTime = 0; //처음 시작은 0초부터 시작
    };
  }, [currentSong]);

  //재생 버튼을 누를 때 재생이 될 수 있도록 설정
  const playSong = () => {
    setIsPlaying(true);
    audio.play();
    console.log('곡 재생 : ', playList[currentSong]);
  };

  //일시정지 버튼
  const pauseSong = () => {
    setIsPlaying(false);
    audio.pause();
    console.log('일시정지');
  };
  //재생목록
  const displayPlayList = () => {
    console.log('재생목록 :', playList.join(','));
  };

  //다음 곡 재생
  const playNextSong = () => {
    const nextSong = (currentSong + 1) % playList.length; //음악이 끝나면 처음으로 돌아가는 역할
    setCurrentSong(nextSong);
    setIsPlaying(true);
    console.log('다음 곡 재생', playList[nextSong]); //지금 당장은 음악을 들을 수 없으니 다음곡 넘어가기
  };
  return (
    <div>
      <h1>음악플레이어</h1>
      <p>현재 재생중 : {playList[currentSong]}</p>
      <button onClick={playSong} disabled={isPlaying}>
        재생
      </button>
      <button onClick={pauseSong} disabled={!isPlaying}>
        일시정지
      </button>
      <button onClick={playNextSong}>다음 곡</button>
      <button onClick={displayPlayList}>재생 목록 보기</button>
    </div>
  );
};
export default MusicPlayerOld;
