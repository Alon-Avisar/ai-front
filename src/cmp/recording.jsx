import React, { useState } from 'react';

export const RecordingButton = () =>  {
  const [isRecording, setIsRecording] = useState(false);
  let mediaRecorder;

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setIsRecording(true);
    });
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setIsRecording(false);
  };

  return (
    <button
      onClick={isRecording ? stopRecording : startRecording}
      style={{ backgroundColor: isRecording ? 'red' : 'green' }}
    >
      {isRecording ? 'Stop Recording' : 'Start Recording'}
    </button>
  );
}

