class Sound {
    constructor(name, audioContext, audioBuffer) {
        this.name = name;
        this.audioContext = audioContext;//new (window.AudioContext || window.webkitAudioContext)();
        this.audioBuffer = audioBuffer;
        this.sources = [];
        this.volume = 1.0;
        this.pan = 0.0;
        this.pitch = 1.0;
        this.isLooping = false;
        this.currentPosition = 0; // Store the current position in seconds
        this.gainNode = this.audioContext.createGain();
        this.panNode = this.audioContext.createStereoPanner();
        this.equalizer = {
            bass: this.createBiquadFilter('lowshelf', 140, 0),
            mid: this.createBiquadFilter('peaking', 1000, 0),
            treble: this.createBiquadFilter('highshelf', 4000, 0),
        };

        // Connect nodes

        this.gainNode.connect(this.panNode);
        this.panNode.connect(this.equalizer.bass);
        this.equalizer.bass.connect(this.equalizer.mid);
        this.equalizer.mid.connect(this.equalizer.treble);
        this.equalizer.treble.connect(this.audioContext.destination);
    }

    static createFromTone(frequency, duration, phase) {
        let name = "midi:" + nameOrFreq + "Hz" + duration + phase;
        const sampleRate = this.audioContext.sampleRate;
        const length = Math.ceil(sampleRate * duration);
        const audioBuffer = this.audioContext.createBuffer(1, length, sampleRate);
        const data = audioBuffer.getChannelData(0);

        for (let i = 0; i < length; i++) {
            data[i] = amplitude * Math.sin(2 * Math.PI * frequency * (i / sampleRate) + phase);
        }
        s = new Sound(name,this.audioContext,audioBuffer);
    }

    getName(){
        return this.name;
    }

    _createSource() {
        if (!this.audioBuffer) return null;

        const source = this.audioContext.createBufferSource();
        source.buffer = this.audioBuffer;

        // Configure pitch
        source.playbackRate.value = this.pitch;

     
        // Set volume
        source.volume = this.volume;

        // Set loop
        source.loop = this.isLooping;

        source.onended = () => {
            this.sources.splice(this.sources.indexOf(source), 1);
         };
        source.connect(this.gainNode);
        this.sources.push(source);
        return source;
    }
    play$(){
        this.play();
    }

    play(volume) {
        const source = this._createSource();
        if (source) {
            if (volume) source.volume = volume;
            console.log("play", this.currentPosition);
            source.start(0, this.currentPosition); // Start from the current position
        }
        return source;
    }

    resume(){
        this.play();
    }

    pause() {
       // console.log("pause", this.sources);
        this.sources.forEach((source) => {
            source.stop();
        });
        this.sources.length = 0;
    }

    stop() {
        this.pause();
        this.currentPosition = 0; // Reset the current position
    }

    // ... (other methods)

    createBiquadFilter(type, frequency, gain) {
        const filter = this.audioContext.createBiquadFilter();
        filter.type = type;
        filter.frequency.value = frequency;
        filter.gain.value = gain;
        return filter;
    }

    setBass(gain) {
        this.equalizer.bass.gain.value = gain;
    }

    setMid(gain) {
        this.equalizer.mid.gain.value = gain;
    }

    setTreble(gain) {
        this.equalizer.treble.gain.value = gain;
    }

    setVolume(volume) {
        if (volume >= 0 && volume <= 1) {
            this.volume = volume;
            this.gainNode.gain.value = volume;
           // this.gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
            
        }
    }

    setPan(pan) {
        if (pan >= -1 && pan <= 1) {
            this.pan = pan;
            this.panNode.pan.value = pan;
        }
    }

    setPitch(pitch) {
        if (pitch > 0) {
            this.pitch = pitch;
            this.sources.forEach((source) => {
                source.playbackRate.setValueAtTime(this.pitch, this.audioContext.currentTime);
            });
        }
    }

    setLooping(loop) {
        this.isLooping = loop;
        this.sources.forEach((source) => {
            source.loop = this.isLooping;
        });
    }

    setPosition(position) {
        if (position >= 0 && position <= this.getDuration()) {
            this.currentPosition = position;
        }
    }

    isLooping() {
        return this.isLooping;
    }

    isPlaying() {
        return this.activeSources() > 0;
    }

    getVolume() {
        return this.volume;
    }

    /**
     * Returns the panning of this music stream.
     * panning in the range -1 (full left) to 1 (full right). 0 is
     *            center position.
     */
    getPan() {
        return this.pan;
    }

    /** Returns the pitch multiplier of the sound instance 
     *  1 == default, >1 == faster, <1 == slower, the value has to be between 0.5 and 2.0 */
    getPitch() {
        return this.pitch;
    }

    getBitRate() {
        if (this.audioBuffer) {
            return this.audioBuffer.sampleRate;
        }
        return 0;
    }
    getPosition() {
        return this.currentPosition;
    }
    /**
     * @returns Duration of audio in seconds
     */
    getDuration() {
        if (this.audioBuffer) {
            return this.audioBuffer.duration;
        }
        return 0;
    }


    /** Returns Sample rate/frequency in Hz */
    getSampleRate() {
        return 16;//audio.audioBitrate;
    }

    /**
     * 
     * @returns Returns number of active sources playing
     */
    activeSources() {
        return this.sources.length;
    }

}


class SoundManager {
    constructor(audioContext) {
        this.audioContext = audioContext;
        this.sounds = {}; // Store loaded sound instances
    }

    async loadSound(key, audioData) {
        try {
           // const response = await fetch(audioFilePath);
           // const audioData = await response.arrayBuffer();
            let audioBuffer = await this.audioContext.decodeAudioData(audioData);
            const sound = new Sound(key, this.audioContext, audioBuffer);
            this.sounds[key] = sound;
            console.log("reading auio",key, this.sounds);
            return sound;
        } catch (error) {
            console.error('Error loading audio:', error);
        }
        return null;
    }

    /**
     * 
     * @param {*} nameOrFreq name of Sound or the frequency to play
     * @param {*} duration length in seconds
     * @param {*} phase initial phase
     * @returns 
     */
    getSound(nameOrFreq, duration, phase) {
        if (duration) {
            let name = "midi:" + nameOrFreq + "Hz" + duration + phase;
            let s = this.sounds[name];
            if (s) return s;
            s = new Sound(this.audioContext, _generateTone(nameOrFreq, 1, phase, duration))
        } else {
            return this.sounds[nameOrFreq];
        }
    }

    _generateTone(frequency, amplitude, phase, duration) {
        const sampleRate = this.audioContext.sampleRate;
        const length = Math.ceil(sampleRate * duration);
        const audioBuffer = this.audioContext.createBuffer(1, length, sampleRate);
        const data = audioBuffer.getChannelData(0);

        for (let i = 0; i < length; i++) {
            data[i] = amplitude * Math.sin(2 * Math.PI * frequency * (i / sampleRate) + phase);
        }
        return audioBuffer;
    }


    /** Returns size in KB */
    getSize() {
        let audioBitrate = getSampleRate();//audio.audioBitrate;
        let audioDuration = getDuration();
        let audioSizeKB = (audioBitrate * audioDuration) / 8;
        return audioSizeKB;
    };



    /**
     * Plays sound source  with the name
     * @param {String}name
     * @param {boolean}looping true if sound is to be repeated continuously
     * @throws SimphyScriptException 
     */
    playSound(id, looping) {
        let s = getSound(id);
        if (s) {
            s.setLooping(looping);
            s.play();
        }
    }

    /**
     * Stops all sounds
     */
    stopAllSounds() {
        this.sounds.forEach((sound) => {
            sound.stop();
        });
    }

    clearAll(){
        this.sounds.forEach((sound) => {
            sound.stop();
        });
        this.sounds.length=0;
    }
}


export{SoundManager,Sound};
//Demo();