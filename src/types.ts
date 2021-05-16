export interface Transcript {
    text: Subtitle[];
}

export interface Subtitle {
    text: string;
    start: string;
    dur: string;
}

export interface TranscriptList {
    track?: TranscriptLanguage[];
}

export interface TranscriptLanguage {
    lang_code: string;
    lang_original: string;
    lang_translated: string;
    lang_default?: string;
}