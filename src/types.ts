export interface Transcript {
    text: Subtitle[];
}

export interface Subtitle {
    text: string;
    start: string;
    dur: string;
}