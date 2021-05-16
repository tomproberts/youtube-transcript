export const subtitleTrackUrl = 'https://video.google.com/timedtext';
export const availableTranscriptUrl = 'https://video.google.com/timedtext';
export const youtubeUrl = 'https://www.youtube.com/watch?v=';

export interface SubtitleTrackParams {
    lang: string,
    v: string,
    fmt: string
}

export interface AvailableTranscriptParams {
    v: string,
    type: string
}