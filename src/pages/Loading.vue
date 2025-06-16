<template>
  <div class="loading">
    <h1>상품을 3D로 변환하는 중입니다.</h1>
    <button @click="sendMessage">진행률 확인</button>
    <div class="progress-container">
      <div class="progress-bar" :style="{ width: progressBarWidth }">{{ progressBarWidth }}</div>
    </div>
    <div class="progress-info">{{ progressInfo }}</div>
  </div>
</template>

<script>
import router from "@/scripts/router";

export default {
  name: 'loading',
  data() {
    return {
      progressBarWidth: '0%',
      progressInfo: '',
      socket: null
    };
  },
  mounted() {
    // WebSocket 연결
//    this.socket = new WebSocket("ws://43.200.158.21/ws");
    this.socket = new WebSocket("ws://163.180.117.36:30000/ws");
    // 연결이 성공하면
    this.socket.onopen = () => {
      console.log("WebSocket 연결 성공.");
    };

    // 메시지 수신 시
    this.socket.onmessage = (event) => {
      console.log("서버에서 메시지 수신:", event.data);

      // JSON 형식의 데이터를 파싱하여 객체로 변환
      const data = JSON.parse(event.data);
      // 진행률, 경과 시간, 남은 시간 추출
      const { progress, elapsed_time, remain_time } = data;
      // 진행률 업데이트
      this.progressBarWidth = `${progress}%`;
      // 경과 시간을 분과 초로 변환
      const elapsedMinutes = Math.floor(elapsed_time / 60);
      console.log("경과분",elapsedMinutes);
      const elapsedSeconds = Math.floor(elapsed_time % 60);
      console.log("경과초",elapsedSeconds);
      // 남은 시간을 분과 초로 변환
      const remainingMinutes = Math.floor(remain_time / 60);
      console.log("남은분",remainingMinutes);
      const remainingSeconds = Math.floor(remain_time % 60);
      console.log("남은초",remainingSeconds);
      // 진행 정보 업데이트
      this.progressInfo = `진행률: ${progress}%, 경과 시간: ${elapsedMinutes
        .toString()
        .padStart(2, "0")}분 ${elapsedSeconds.toString().padStart(2, "0")}초, 남은 시간: ${remainingMinutes
          .toString()
          .padStart(2, "0")}분 ${remainingSeconds.toString().padStart(2, "0")}초`;

      // 진행률이 100인 경우 소켓 연결 종료
      if (progress >= 100) {
        console.log("진행률이 100%입니다. 소켓 연결 종료합니다.");
        this.socket.close();
      }
    };

    // 연결이 종료되면
    this.socket.onclose = () => {
      console.log("WebSocket 연결 종료.");
      window.alert('3D 변환이 완료되었습니다.');
      router.push({ path: '/' });

    };
  },
  methods: {
    sendMessage() {
      console.log("서버로 'send' 메시지 전송...");
      this.socket.send("send");
    }
  }
};
</script>

<style scoped>
.loading {
  text-align: center;
  margin-top: 50px;
}

.progress-container {
  width: 300px;
  height: 30px;
  border: 1px solid #ccc;
  margin: 20px auto;
  /* 화면 중앙 정렬 */
  position: relative;
}

.progress-bar {
  height: 100%;
  background-color: #4CAF50;
  text-align: center;
  line-height: 30px;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
}

.progress-info {
  margin-bottom: 350px;
}
</style>
