export interface Transcript {
    text: subtitle[];
}

export interface subtitle {
    text: string;
    start: string;
    dur: string;
}