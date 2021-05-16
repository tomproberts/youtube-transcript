import axios from 'axios';
import {
    subtitleTrackUrl,
    SubtitleTrackParams,
    youtubeUrl,
    availableTranscriptUrl,
    AvailableTranscriptParams
} from '@/youtube-api/url';
import { parseAvailableTranscriptListXML, parseTranscriptXML } from '@/youtube-api/xml-parser';
import { Transcript, TranscriptList } from '@/types';

export async function getTranscript(video: string): Promise<Transcript | undefined> {
    const params: SubtitleTrackParams = { lang: 'de', v: video, fmt: '' };
    const response = await axios.get(subtitleTrackUrl, { params })
        .catch(err => console.warn(err));

    return response === undefined ? undefined : parseTranscriptXML(response.data);
}

export async function getAvailableTranscriptList(video: string): Promise<TranscriptList | undefined> {
    const params: AvailableTranscriptParams = { v: video, type: 'list' };
    const response = await axios.get(availableTranscriptUrl, { params })
        .catch(err => console.warn(err));

    return response === undefined ? undefined : parseAvailableTranscriptListXML(response.data);
}

export function parseUrl(url: string): string {
    // TODO: make less dodgy
    return url.substring(youtubeUrl.length);
}